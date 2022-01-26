import { atom, useRecoilCallback } from "recoil";
import { CartHistory, SelectedItem } from "./type";

export const cartHistoryState = atom<CartHistory[]>({
  key: "Atom/CartHistoryState",
  default: [],
});

export const selectedCartItems = atom<SelectedItem[]>({
  key: "Atom/SelectedCartItems",
  default: [],
});
