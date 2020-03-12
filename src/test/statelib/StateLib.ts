/// <reference path="../d/state.d.ts" />
/// <reference path="../d/snr.d.ts" />
/// <reference path="../d/ioc.d.ts" />
/// <reference path="../d/type.d.ts" />


namespace hrise{
//namespace>>>>{hrise.H$.tsetState}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**Hrise runtime environment library mount point for developer*/
export namespace H$.StateLib{

  /**Flow*/
  export interface Flow{
    /**select To specific State*/
    selectTo(index:any):boolean;
  }
  /**Actor*/
  export interface Actor{
    action(arg?:any):boolean;
  }

  /**Basic State*/
  export abstract class StateBase extends state.Mealy implements ioc.Object,Actor{
    //static meta_data
    H$private:type.SSIT<any>
    constructor(parent:Flow,stasig:string){
      super();
      this.H$private={
        //parent
        //statesig
      };
    };
    action(arg?:any):boolean{
      console.log("state ",this.H$private.index," begin")
      if(this.init()===true)
        this.translate(this.execute());
      (<snr.Dispatcher>snr.getDispatcher()).regActor(this.H$private.stasig,this);
      return true;
    };
    translate(alpha: any): void{
      let r=false;
      if(type.Comparator.isUndef(alpha)) return;
      else r=(<Flow>this.H$private.parent).selectTo(this.H$private.exit[alpha]);
      if(r) this.die();
    };
    die(){
      console.log("state ",this.H$private.index," end")
    };
    abstract init():boolean;
    abstract execute():any;
    abstract onEvent(s:snr.Signal):any;
    H$getter(prop: string): any{
      return this.H$private[prop];
    };
    H$setter(prop: string, value: any): void{
      this.H$private[prop]=value;
    };
  }

  /**Basic Flow*/
  export class FlowBase extends state.Mealy implements ioc.Object,Flow,Actor{
    H$private:type.SSIT<any>;
    constructor(parent:Flow,stasig:string){
      super();
      this.H$private={
        //parent:parent,
        //stasig:stasig
        //flow:{[idx:number]:ioc.Bean}
      };
    };
    action(arg?:any):boolean{
      this.selectTo(0);
      return true;
    };
    selectTo(index:any):boolean{
      console.log("select to :",index);
      let state=ioc.getFactory<ioc.HSBeanFactory>().createInstance<ioc.Object&Actor>(this.H$private.flow[index]);
      state.H$setter("parent",this);
      state.H$setter("statesig",this.H$private.statesig+index);
      return state.action();
    };
    translate(alpha: any): void{
      let r=false;
      if(type.Comparator.isUndef(alpha)) return;
      else r=(<Flow>this.H$private.parent).selectTo(this.H$private.exit[alpha]);
      if(r) this.die();
    };
    die(){
      console.log("state ",this.H$private.index," end")
    };
    onEvent(s: snr.Signal): any{
      "override this method in your class"
    };
    H$getter(prop: string): any{
      return this.H$private[prop];
    };
    H$setter(prop: string, value: any): void{
      //load the Flow Config
      if(prop==="flow"){
        this.H$private[prop]=state.indexer(value);
        return;
      }
      this.H$private[prop]=value;
    };
  }

  /***/
  export class FlowBreaker implements Actor,ioc.Object{
    H$private:type.SSIT<any>;
    constructor(){
      this.H$private={
        //parent:parent,
        //stasig:stasig,
        //alphabet
      };
    };
    action(){
      this.H$private.parent.translate(this.H$private.alphabet);
      return true;
    };
    H$getter(prop: string): any{
      return this.H$private[prop];
    };
    H$setter(prop: string, value: any): void{
      this.H$private[prop]=value;
    };

  }

}
}