import React, { useMemo } from "react";
import useCartNavigate from "../../hooks/useCartNavigate";
import { cartHistoryState, selectedCartItems } from "../../recoil";
import CartTitle from "../presentational/CartTitle";
import CartList from "../presentational/lIst/CartList";
import CartListItem from "../presentational/lIst/CartListItem";
import CartPlusButton from "../presentational/button/CartPlus";
import { useRecoilValue, useSetRecoilState } from "recoil";

function OptionSelector() {
  const setCartItems = useSetRecoilState(selectedCartItems);
  const cartNavigate = useCartNavigate(cartHistoryState);
  const currItem = useMemo(
    () => cartNavigate.currHistory.options?.state.item,
    [cartNavigate.currHistory.options?.state.item]
  );

  const onClick = (option: string) => {
    if (currItem?.recommendationID) {
      cartNavigate.navigate("recommendation", {
        state: {
          item: currItem,
          selectedItem: {
            option,
            itemID: currItem.itemID,
            quantity: 1,
          },
        },
      });

      setCartItems(cartNavigate.getSelectedItems());
    } else {
      setCartItems(cartNavigate.getSelectedItems());

      cartNavigate.navigate("default", {
        state: {
          selectedItem: {
            option,
            itemID: currItem!.itemID,
            quantity: 1,
          },
        },
      });
    }
  };

  return (
    <div>
      <CartTitle>옵션을 선택해주세요</CartTitle>

      <CartList>
        {currItem?.options &&
          currItem.options.map((option) => (
            <CartListItem key={option} onClick={() => onClick(option)}>
              <span>{option}</span>
              <CartPlusButton />
            </CartListItem>
          ))}
      </CartList>
    </div>
  );
}

export default OptionSelector;
