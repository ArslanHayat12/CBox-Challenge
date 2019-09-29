import { uniqBy, sortBy, remove } from "lodash";

export const getUniqueProperty = (data, property) =>
  sortBy(uniqBy(data, property), property);

export const TYPE_COLORS = {
  "0": "#48BEFF",
  "1": "#3DFAFF",
  "2": "#43C59E",
  "3": "#3D7068",
  "4": "#14453D"
};

export const sliceValue = (data, value) => remove(data, el => el === value);

export const getFilteredTypes = (data, types) => {
  let items = data.filter(item => types.includes(item.type));
  items = items.length ? items : data;
  return items.sort((a,b)=>a.type-b.type);
};
