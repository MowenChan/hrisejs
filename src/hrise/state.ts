namespace hrise{
//namespace>>>>{hrise.state}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**hrise.state*/
export namespace state{

  /**find anything in StateMachine Runtime Environment*/
  export function indexer<T>(path:string):type.Of<T>|undefined{
    return hrise.indexer(path,H$);
  };

  /**Mealy State(Machine)*/
  export abstract class Mealy extends snr.Actor{
    send(s:snr.Signal):void{
      snr.Actor.send(s);
    };
    receive(s:snr.Signal):void{
      this.translate(this.onEvent(s));
    };
    abstract translate(alpha:any):void;
    abstract onEvent(s:snr.Signal):any;
  }

}
//namespace<<<<{hrise.state}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}