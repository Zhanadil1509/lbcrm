type ObjectType = {
  obj: { [key: string]: string | number };
  fn: (v: string | number, k: string, i: number) => { [key: string]: string };
};

export const objectMap = ({ obj, fn }: ObjectType) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));
