import { Item, ITEM_ID } from "../constants/type";

export const getItemByItemID = (items: Item[], itemID: ITEM_ID) =>
  items.find((item) => item.itemID === itemID);
