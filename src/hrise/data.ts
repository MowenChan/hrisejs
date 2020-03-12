namespace hrise{
//namespace>>>>{hrise.adaptor}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**Hrise data adaptor*/
export namespace data{
  
  /**plain data*/
  export interface Meta{
    raw:any;
    type:string;
    meme?:string;
  }

  /**data adaptor*/
  export interface Adaptor{
    /**translat Meta data to anything*/
    adapt(data:Meta):any;
  }
  
}
}