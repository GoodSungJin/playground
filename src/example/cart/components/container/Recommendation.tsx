import React, { useMemo } from "react";

import useCartNavigate from "../../hooks/useCartNavigate";
import { cartHistoryState } from "../../recoil";
import { RECOMMENDATIONS } from "../../constants";
import { Item } from "../../constants/type";
import CartTitle from "../presentational/CartTitle";
import CartList from "../presentational/lIst/CartList";
import CartListItem from "../presentational/lIst/CartListItem";
import CartPlusButton from "../presentational/button/CartPlus";
import styled from "styled-components";

function Recommendation() {
  const cartNavigate = useCartNavigate(cartHistoryState);

  const currItem = useMemo(
    () => cartNavigate.currHistory.options?.state.item,
    [cartNavigate.currHistory.options?.state.item]
  );

  const onClick = (item: Item) => {
    cartNavigate.navigate("");

    cartNavigate.navigate("option-selector", {
      state: {
        item: item,
      },
    });
  };

  return (
    <StdRecommendation>
      <CartTitle>같이 사면 좋아요</CartTitle>

      <CartList>
        {currItem?.recommendationID &&
          RECOMMENDATIONS[currItem.recommendationID].map((item) => (
            <CartListItem key={item.name} onClick={() => onClick(item)}>
              <span>{item.name}</span>
              <CartPlusButton />
            </CartListItem>
          ))}
      </CartList>

      <StdSkipButton>넘어가기</StdSkipButton>
    </StdRecommendation>
  );
}

export default Recommendation;

const StdRecommendation = styled.div``;

const StdSkipButton = styled.button`
  display: block;

  margin: 18px auto 0;

  border: 0;
  border-radius: 8px;
  background-color: transparent;

  font-size: 18px;
  color: gray;
  text-decoration: underline;

  cursor: pointer;
`;
