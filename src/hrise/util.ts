namespace hrise{
//namespace>>>>{hrise.util}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**hrise.util*/
export namespace util{
  export class UniqueGenerator{
    /**return a string based on 36 numeration system */
    static timeBased(pattern:string="{{gen}}"):string{
      return pattern.replace("{{gen}}",Number(new Date().getTime()-TIME_BASE).toString(36));
    };

  }
  export class ObjectTool{

  }
}
}