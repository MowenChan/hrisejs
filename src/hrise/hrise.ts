///////////////////////////////////////////////
// Hyper + Prise = Hrise
// 
// A light wight JavaScript Flow Driver Application Framework
// based on Inversion Of Control (IoC) technology,
// it's support a namespace to mount the scoped environment resources
// If your Application need Access Object to Hrise
// make sure it's class already extends the hriseObject(hrise.Object)
// or use hrise api if not ,your object will lose control
//        __    ____  ___
//   /   /  \  /     /
//  /===/___/ o--__ /===
// /   //  \\/____//____>>>>>Hrises___0.1.9
//
// Author:chenwenchao@yihuacomputer.com
// 
///////////////////////////////////////////////

/**Hrise Framework runtime Environment*/
namespace hrise{
  //export let H$:type.NS;
  export const TIME_BASE:number=new Date().getTime();
  export const HRISE_ENV:any=(function(){return this}());

  /**use path to find the resource in the scope(namespace) the default namespace is {global}.hrise.H$*/
  export function indexer<T>(path:type.NSIT<string>|string,scope:type.NS=H$):type.Of<T>|undefined{
    let ns:any=scope;
    //let deep:number=0;
    if(type.Comparator.isString(path)) path=(<string>path).split(".");
    for(let i in <type.NSIT<string>>path){
      if(type.Comparator.isUndef(ns)||type.Comparator.isNull(ns))
        throw "Cannot found resource: \""+path+"\" in scope";
      try{
        ns=ns[path[i]];
      }catch(e){
        throw "Cannot found resource: \""+path+"\" in scope"
      }
    }
    return ns;
  }

  /**force mount anything by path to scope(namespace)*/
  export function forceMount(path:type.NSIT<string>,scope:type.NS=H$,element:any):void{
    //at last node
    if((<Array<string>>path).slice(1).length===0){
      if(scope[path[0]]===undefined) scope[path[0]]={};
      scope[path[0]]=element;
    }
    else forceMount((<Array<string>>path).slice(1),scope[path[0]],element);
  }

}