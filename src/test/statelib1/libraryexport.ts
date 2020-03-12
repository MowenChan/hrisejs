/// <reference path="./library.ts" />


namespace hrise{
//namespace>>>>{hrise.H$.tsetState}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**Hrise runtime environment library mount point for developer*/
export namespace H$.StateLib.Lib1{
    //
  function ExportState(State:Function){
    H$StateLibMetaData[H$StateLibMetaData.length]=State;
  }
  export var H$StateLibMetaData:Array<any>=[

  ]

  addMetaData(TimeOutState,StateLib.StateBase,"Lib1",{timeout:20000},{OVER_TIME:"超时"});
  ExportState(TimeOutState);
  addMetaData(ViewerState,StateLib.StateBase,"Lib1",{timeout:20000},{DEC_AGAIN:"超时",DEC_END:"结束"});
  ExportState(ViewerState);
  

}
}