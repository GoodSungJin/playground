import React, { useMemo } from "react";

import CartTitle from "../presentational/CartTitle";
import CartList from "../presentational/lIst/CartList";
import CartListItem from "../presentational/lIst/CartListItem";
import CartPlusButton from "../presentational/button/CartPlus";

import useCartNavigate from "../../hooks/useCartNavigate";

import { cartHistoryState } from "../../recoil";

function OptionSelector() {
  const cartNavigate = useCartNavigate(cartHistoryState);
  const currItem = useMemo(
    () => cartNavigate.currHistory.options?.state.item,
    [cartNavigate.currHistory.options?.state.item]
  );

  const onClick = async (option: string) => {
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
    } else {
      cartNavigate.navigate("", {
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
