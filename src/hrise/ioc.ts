namespace hrise{
//namespace>>>>{hrise.ioc}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**hrise.ioc*/
export namespace ioc{
  /**stoarge Bean*/
  var BUK_BEAN:type.SSIT<Bean>;
  /**stoarge singleton*/
  var BUK_SINGLE:type.SSIT<any>;

  /**provide getter and setter for factory find and inject property corrently*/
  export interface Object{
    H$getter(prop:string):any;
    H$setter(prop:string,value:any):void;
  }

  /**Ioc Bean api*/
  export interface Bean{
    clazz:type.Of<any>;
    args?:type.NSIT<{value:string|number}|{ref:string}>;
    props?:type.SSIT<{value:string|number}|{ref:string}>;
    single?:boolean;
  }

  /**Iactory api*/
  export interface Factory{
    createInstance<T>(sig:any):T;
  }

  /**Internal IOC(DI) bean factory implementation*/
  export class HSBeanFactory{
    /**IOC(DI)*/
    createInstance<T>(b:string|Bean):T{

      let bean:Bean;
      let ins:any=undefined;
      if(type.Comparator.isString(b)){
        bean=BUK_BEAN[<string>b];
        //if bean is singlenator and it's instation has been created
        if(BUK_SINGLE[<string>b]) return BUK_SINGLE[<string>b];
      }
      else{
        (<Bean>b).single=false;
        bean=(<Bean>b);
      }
      //dependences inject start
      if(bean.args)
        ins=new bean.clazz(this.prepare(bean.args))
      else
        ins=new bean.clazz();
      if(bean.props){
        let p=this.prepare(bean.props);
        for(let i in p){
          if(ins.H$setter)
            ins.H$setter(i,p[i]);
          else
            ins[i]=p[i];
        }
      };
      //dependences inject end
      if(bean.single)
        BUK_SINGLE[<string>b]=ins;

      return ins;
    };

    /**prepare value and dependence list*/
    private prepare(args:type.SIT<{value:string|number}|{ref:string}>):type.SIT<any>{
      let r:any=Array.isArray(args)?[]:{};
      for(let i in args){
        if((<{value:string|number}>args[i]).value)
          r[i]=(<{value:string|number}>args[i]).value;
        if((<{ref:string}>args[i]).ref)
          r[i]=this.resolveRef((<{ref:string}>args[i]).ref);
      }
      return r;
    };

    /**resolve value refenence*/
    private resolveRef(qfr:string):any{
      let q=qfr.split(".");
      let r:any;
      let size=type.util.sizeOf(q);

      r=this.createInstance(q[0]);
      if(size<=0) return r;
      for(let i=1;i<size;i++){
        if(r.H$getter) r=r.getter(q[i]);
        else r=r[q[i]];
      };
      return r;
    };
  }

  var H$Factory:Factory=new HSBeanFactory();
  export function setFactory(factory:Factory):void{H$Factory=factory||getFactory};
  export function getFactory<T extends Factory>():T{return <T>H$Factory;};


}
//namespace<<<<{hrise.ioc}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}