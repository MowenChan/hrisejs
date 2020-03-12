/// <reference path="./StateLib.ts" />


namespace hrise{
//namespace>>>>{hrise.H$.tsetState}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**Hrise runtime environment library mount point for developer*/
export namespace H$.StateLib{
  
  //
  export function addMetaData(_this:Function,_super:Function|undefined=undefined,group:string="",param:type.SSIT<any>={},exit:type.SSIT<string>={},icon:string=""){
    (<type.SSIT<any>>_this).H$StateMetaData={};
    if(_super===undefined){
      (<type.SSIT<any>>_this).H$StateMetaData.icon=icon;
      (<type.SSIT<any>>_this).H$StateMetaData.group=group;
      (<type.SSIT<any>>_this).H$StateMetaData.param=param;
      (<type.SSIT<any>>_this).H$StateMetaData.exit=exit;
    }
    else{
      //create icon and group
      (<type.SSIT<any>>_this).H$StateMetaData.icon=icon||(<type.SSIT<any>>_super).H$StateMetaData.icon;
      (<type.SSIT<any>>_this).H$StateMetaData.group=group||(<type.SSIT<any>>_super).H$StateMetaData.group;
      //merg parameter list
      let _param=(<type.SSIT<any>>_super).H$StateMetaData.param;
      for(let i in _param){
      for(let j in param){
        if(i===j) console.warn("duplicate parameter name: ",i,"declared in class :",(<any>_this).name," with it's super class");
        param[i]=_param[i];
      }
      }
      (<type.SSIT<any>>_this).H$StateMetaData.param=param;
      //merg exit list
      let _exit=(<type.SSIT<any>>_super).H$StateMetaData.exit;
      for(let i in _exit){
      for(let j in exit){
        if(i===j) console.warn("duplicate exit alphabet(value): ",i,"declared in class :",(<any>_this).name," with it's super class");
        exit[i]=_exit[i];
      }
      }
      (<type.SSIT<any>>_this).H$StateMetaData.exit=exit;

    }
  };

  //
  function ExportState(State:Function){
    H$StateLibMetaData[H$StateLibMetaData.length]=State;
  }
  export var H$StateLibMetaData:Array<any>=[

  ]

  addMetaData(FlowBase);
  ExportState(FlowBase);
  addMetaData(FlowBreaker);
  ExportState(FlowBreaker);
  

}
}