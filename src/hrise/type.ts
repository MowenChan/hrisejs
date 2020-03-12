namespace hrise{
//namespace>>>>{hrise.type}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export namespace type{

  export type Tree<T>={[sig:number]:(Tree<T>|string)};
  /**namespace*/
  export type NS=SSIT<any>;
  /**string signature index type*/
  export type SSIT<T>={[sig:string]:T};
  /**number signature index type*/
  export type NSIT<T>={[sig:number]:T};
  /**combine signature index type*/
  export type SIT<T>=SSIT<T>&NSIT<T>;
  /**return the typescript type of T*/
  export type Of<T>=new(args?:any)=>T;
  
  /**compare about javascript value/object*/
  export class Comparator{
    
    static isString(obj:any):boolean{
      if(obj.toString)
        return obj.toString()===obj;
      else
        return false;
    };

    static isFunction(obj:any):boolean{
      return obj.constructor===Function;
    };

    static isUndef(obj:any):boolean{
      return obj===undefined;
    };

    static isNull(obj:any):boolean{
      return obj===null;
    };

  };

  /**compare about javascript value/object*/
  export class util{
    
    static sizeOf(set:SIT<any>):number{
      let size=0;
      for(let i in set)
        size++;
      return size;
    };

  };

}
//namespace<<<<{hrise.data}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}