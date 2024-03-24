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
