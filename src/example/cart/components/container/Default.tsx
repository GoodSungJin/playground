import React from "react";
import useCartNavigate from "../../hooks/useCartNavigate";
import { cartHistoryState, selectedCartItems } from "../../recoil";
import { ITEMS } from "../../constants";
import CartTitle from "../presentational/CartTitle";
import CartList from "../presentational/lIst/CartList";
import CartListItem from "../presentational/lIst/CartListItem";
import CartPlusButton from "../presentational/button/CartPlus";
import { Item, ITEM_ID } from "../../constants/type";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

function Default() {
  const items = useRecoilValueLoadable(selectedCartItems);

  const { navigate } = useCartNavigate(cartHistoryState);

  const onClick = (item: Item) => {
    navigate("option-selector", {
      state: {
        item,
      },
    });
  };

  console.log(items.contents, "SD<SD<<S");
  return (
    <div>
      {!!items.contents.length && (
        <>
          <CartTitle>담긴 상품</CartTitle>

          <CartList>
            {
              //   items.contents.map((item) => (
              //   <CartListItem key={item.itemID}>
              //     <span>{getItemNameByItemID(item.itemID)}</span>
              //   </CartListItem>
              // ))
            }
          </CartList>
        </>
      )}

      <CartTitle>판매 상품</CartTitle>

      <CartList>
        {ITEMS.map((item) => (
          <CartListItem key={item.name} onClick={() => onClick(item)}>
            <span>{item.name}</span>
            <CartPlusButton />
          </CartListItem>
        ))}
      </CartList>
    </div>
  );
}

export default Default;

const getItemNameByItemID = (itemID: ITEM_ID) =>
  ITEMS.find((item) => item.itemID === itemID)!.name;
