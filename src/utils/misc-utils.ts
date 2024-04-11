import { format } from 'date-fns';
import { Base } from 'models/base';

export const useItemIds = (items: Base[]) => {
  return items?.map((item) => item?.id);
};

export const formatDate = (date: string | number) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

export const parseFetchToRelated = ({ related = [] }: { related: string[] }) => {
  return related?.join(',');
};

export function dynamicSort(property: string) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    // eslint-disable-next-line no-nested-ternary
    const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}


export function mergeLists(list1: any[], list2: any[]): any[] {
  const merged: any[] = [];

  // Create a map to store counts by name
  const countMap: Map<string, number> = new Map();

  // Update counts from list1
  for (const item of list1) {
      countMap.set(item.name, (countMap.get(item.name) || 0) + item.count);
  }

  // Update counts from list2
  for (const item of list2) {
      countMap.set(item.name, (countMap.get(item.name) || 0) + item.count);
  }

  // Convert countMap back to Data objects
  for (const [name, count] of countMap) {
      merged.push({ name, count });
  }

  return merged;
}

export const isSubset = (arr1: any[], arr2: any[]) => arr1.some((item: any) => arr2.includes(item));

export function partitionArray(array : any[], partition : number) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if(i < partition) {
      result.push([array[i]]);
    } else {
      result[i%partition].push(array[i])
    }
  }
  return result;
}