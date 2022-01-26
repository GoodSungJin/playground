import React, { useEffect } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";

import CartTitle from "../presentational/CartTitle";
import CartList from "../presentational/lIst/CartList";
import CartListItem from "../presentational/lIst/CartListItem";
import CartPlusButton from "../presentational/button/CartPlus";

import useCartNavigate from "../../hooks/useCartNavigate";

import { cartHistoryState, selectedCartItems } from "../../recoil";
import { ITEMS } from "../../constants";
import { Item, ITEM_ID } from "../../constants/type";
import { CartHistory, SelectedItem } from "../../recoil/type";

function Default() {
  const cartNavigate = useCartNavigate(cartHistoryState);
  const selectedItems = useRecoilValue(selectedCartItems);

  const handleSelectedCartItems = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const cartHistory = await snapshot.getPromise(cartHistoryState);
        const prevItems = await snapshot.getPromise(selectedCartItems);
        const getSelectedItems = (v: CartHistory[]) =>
          v.reduce(
            (accu, curr) =>
              curr.options?.state.selectedItem
                ? [...accu, curr.options.state.selectedItem]
                : accu,
            [] as SelectedItem[]
          );

        set(selectedCartItems, [
          ...prevItems,
          ...getSelectedItems(cartHistory),
        ]);
      },
    []
  );

  const onClick = (item: Item) => {
    cartNavigate.navigate("option-selector", {
      state: {
        item,
      },
    });
  };

  useEffect(() => {
    handleSelectedCartItems();

    cartNavigate.reset();
  }, []);

  return (
    <div>
      {!!selectedItems.length && (
        <>
          <CartTitle>담긴 상품</CartTitle>

          <CartList>
            {selectedItems.map((item) => (
              <CartListItem key={item.itemID}>
                <span>
                  {getItemNameByItemID(item.itemID)} / {item.option}
                </span>
              </CartListItem>
            ))}
          </CartList>
        </>
      )}

      <CartTitle>판매 상품</CartTitle>

      <CartList>
        {ITEMS.map(
          (item) =>
            item.isVisible && (
              <CartListItem key={item.name} onClick={() => onClick(item)}>
                <span>{item.name}</span>
                <CartPlusButton />
              </CartListItem>
            )
        )}
      </CartList>
    </div>
  );
}

export default Default;

const getItemNameByItemID = (itemID: ITEM_ID) =>
  ITEMS.find((item) => item.itemID === itemID)?.name;
