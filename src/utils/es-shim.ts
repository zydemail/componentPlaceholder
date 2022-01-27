// es shim
/**
* Description: If browser not supported Object.entries will read this function with the same name
* @param obj
* @return Array
*/
if (!Object.entries) {
  Object.entries = function (obj: any): any[] {
    return Array.prototype.map.call(Object.keys(obj), function (item, i) {
      const arr = [];
      arr.push(item);
      arr.splice(++i, 0, obj[item]);
      return arr;
    });
  };
}

/**
* Description: If browser not supported Object.values will read this function with the same name
* @param obj
* @return Array
*/
if (!Object.values) {
  Object.values = function (obj: any): any[] {
    return Array.prototype.map.call(Object.keys(obj), function (item) {
      return obj[item];
    });
  };
}

/**
 * Promise.prototype.finally
 */
if (typeof Promise.prototype.finally !== 'function') {
  Promise.prototype.finally = function (fn: any) {
    return this
      .then(value => (this.constructor as any).resolve(fn()).then(() => value))
      .catch(reason => (this.constructor as any).resolve(fn()).then(() => { throw reason; }));
  };
}


export default function verify() {
  console.info('Object.values()', typeof Object.values);
  console.info('Object.entries()', typeof Object.entries);
  console.info('Promise.prototype.finally()', typeof Promise.prototype.finally);
}