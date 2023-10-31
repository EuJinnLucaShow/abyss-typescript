export const concatObject = (
  prev: any,
  property: any,
  element: any
) => {
      let obj: any = {};
      obj[`${property}`] = element;
      return Object.assign({}, prev, obj);
};
