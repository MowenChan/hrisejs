/// <reference path="../d/StateLib.d.ts" />
/// <reference path="../d/StateLibExport.d.ts" />


namespace hrise{
//namespace>>>>{hrise.H$.tsetState}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**Hrise runtime environment library mount point for developer*/
export namespace H$.StateLib.Lib1{
  export class TimeOutState extends StateLib.StateBase{
    init(): boolean{
      let _this=this;
      console.log("TimeOutState init it's will distroy after ",this.H$getter("timeout")/1000," sec");
      this.H$setter("Timer",setTimeout(
        function(){
          return _this.receive(hrise.snr.createSignal(_this,"OVER_TIME",_this,"signal",false))}
          ,this.H$getter("timeout")));
      return true;
    };
    execute(): any{
      console.log("TimeOutState excute");
      return undefined;
    };
    onEvent(s: snr.Signal): any{
      console.log("TimeOutState onEvent",s.p);
      if(s.p==="OVER_TIME") return "OVER_TIME";
    };
    die(){
      clearTimeout(this.H$getter("Timer"))
    };
  }

  export class ViewerState extends StateLib.StateBase{
    init(): boolean{
      console.log("ViewerState init");
      return true;
    };
    execute(): any{
      let self=this;
      console.log("ViewerState execute");
      let view=document.getElementById("boxx");
      let title=document.createElement("span");
      title.innerHTML=this.H$getter("title");
      let button=document.createElement("button");
      let input=document.createElement("input");
      button.onclick=function(){
        hrise.snr.getDispatcher().send(hrise.snr.createSignal(self,input.value,self,"message",false));
      };
      (<HTMLDivElement>view).appendChild(title);
      (<HTMLDivElement>view).appendChild(input);
      (<HTMLDivElement>view).appendChild(button);
      return undefined;
    };
    onEvent(s: snr.Signal): any{
      console.log("ViewerState onEvent",s.p);
      if(s.p==="DEC_AGAIN") return "DEC_AGAIN";
      if(s.p==="DEC_END") return "DEC_END";
      else return undefined;
    };
  }


}
}