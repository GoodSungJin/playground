import { Item, ITEM_ID } from "../constants/type";

export interface CartHistory {
  name: string;
  options?: HistoryOptions;
}

export interface HistoryOptions {
  replace?: boolean;
  state: {
    item?: Item;
    selectedItem?: SelectedItem;
  };
}

export interface SelectedItem {
  itemID: ITEM_ID;
  option: string;
  quantity: number;
}
