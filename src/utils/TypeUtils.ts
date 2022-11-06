export type Constructor<T = any> =
  (new (...args: any[]) => T) & { create?(...p: any[]): T };

/**
 * 获取/创建元数据
 */
export function getMetaData<T>(type: any, key: string, default_?: T): T {
  let res = type[key] ||= default_;
  if (res?.type != type) {
    const keys = res ? Object.keys(res) : [];
    type[key] = keys.reduce((_res, key) => {
      const val = res[key];
      if (val instanceof Array)
        _res[key] = val.slice(0); // 复制数组
      else if (typeof val == "object")
        _res[key] = Object.assign({}, val); // 复制对象（浅复制）
      else
        _res[key] = val;
      return _res;
    }, {} as any);
    type[key].type = type
  }
  return type[key];
}
