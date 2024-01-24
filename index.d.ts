declare module "fast-shallow-equal" {
  type AnyObject = Record<string, any>;

  function equal(a: AnyObject, b: AnyObject): Object;
  export = equal;
}
