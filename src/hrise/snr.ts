namespace hrise{
//namespace>>>>{hrise.snr}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export namespace snr{

  /**Signal api*/
  export interface Signal{
    s:Sender|Receiver;
    p:any;
    r:Receiver|Sender;
    t:string;
    _:boolean;
  }

  /**Signal Sender api*/
  export interface Sender{
    send(s:Signal):void;
  }

  /**Signal Receiver api*/
  export interface Receiver{
    receive(s:Signal):void;
  }

  /**Standard transceiver*/
  export abstract class Actor implements Sender,Receiver{
    static send(s:Signal){
      H$MainDispatcher.receive(s);
    };
    abstract send(s:Signal):void;
    abstract receive(s:Signal):void;
  }

  /**Internal Signal Dispatcher*/
  export class Dispatcher extends Actor{

    actors:type.SSIT<Actor>={};
    
    send(s:Signal):void{
      s.s=this;
      Dispatcher.send(s);
    };

    receive(s:Signal):void{
      for(let i in this.actors){
        if(s._)return;
        let actor:Actor=this.actors[i];
        if(!type.Comparator.isUndef(actor)) actor.receive(s);
      };
    };

    regActor<T extends Actor>(id:string,act:T):void{
      this.actors[id]=act;
    };

  }

  var H$MainDispatcher:Sender&Receiver=new Dispatcher();
  export function getDispatcher():Sender&Receiver{
    return H$MainDispatcher;
  };
  export function setDispatcher(dispatcher:Sender&Receiver){
    H$MainDispatcher=dispatcher?dispatcher:getDispatcher();
  };
  export function createSignal(s:Sender | Receiver,p:any,r:Sender | Receiver,t:string,_:boolean):Signal{
    return {s:s,p:p,r:r,t:t,_:_}
  };
}
//namespace<<<<{hrise.snr}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}