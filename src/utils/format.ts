/**
 * 电话号码脱敏
 * @param phoneNumber 
 * @returns 
 */
export function maskPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * 数字千分位格式化
 * @param number 
 * @returns 
 */
export function formatToThousands(number: string) {
  return number.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

/**
 * 
 * @param str 字符
 * @param type 去除类型 1、全部 2、头和尾 3、头 4、尾
 * @returns 
 */
export function trim(str: string, type: number = 1) {
  if (!str) return;
  if (typeof str !== 'string') {
    throw new Error(`参数必须为字符串类型，当前类型：${typeof str}`);
  }
  switch(type) {
    case 1:
      return str.replace(/\s/g, '');
    case 2:
      return str.replace(/(^\s+)|(\s+$)/g, '');
    case 3:
      return str.replace(/(^\s+)/g, '');
    case 4:
      return str.replace(/(\s+$)/g, '');
  }
}

/**
 * 数组扁平化
 * @param arr 待扁平化数组
 * @returns 
 */
export function flattenArray<T>(arr: T[]): T[] {
  return arr.reduce((acc: T[], val: T) => Array.isArray(val) ?  acc.concat(flattenArray(val), []) : acc.concat(val), []);
}

/**
 * 数组对象去重
 * @param arr 数据
 * @param key 属性key
 * @param options 配置参数
 * @returns 
 */
export function uniqueArray(arr: any[], key: string = '', options?: { deep: boolean, isObjectArray: boolean }) {
  if (!options?.isObjectArray) {
    return [...new Set(arr.map(item => key ? item[key] : item))];
  }
  return [...new Map(arr.map(item => [options?.deep ? JSON.stringify(item) : item[key], item])).values()];
}

/**
 * 数组元素随机排序，并返回新数组
 * @param array 待排序数组
 * @returns 排序后的新数组
 */
export function randomSortArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}