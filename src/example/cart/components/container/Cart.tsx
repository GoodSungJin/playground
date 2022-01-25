import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

import useCartNavigate from "../../hooks/useCartNavigate";

import { cartHistoryState, selectedCartItems } from "../../recoil";

import Recommendation from "./Recommendation";
import OptionSelector from "./OptionSelector";
import Default from "./Default";
import { useRecoilValue } from "recoil";

const Cart = () => {
  const { back, route, reset } = useCartNavigate(cartHistoryState, [
    {
      name: "default",
      isDefault: true,
      element: <Default />,
    },
    {
      name: "recommendation",
      element: <Recommendation />,
    },
    {
      name: "option-selector",
      element: <OptionSelector />,
    },
  ]);

  return (
    <StdCart>
      <StdCartContent>
        <div>
          <StdBackButton
            type="button"
            onClick={() => {
              back();
            }}
          >
            <div>
              <BiArrowBack size="100%" />
            </div>
          </StdBackButton>
        </div>

        {route}
      </StdCartContent>
    </StdCart>
  );
};

export default Cart;

const StdCart = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

const StdCartContent = styled.div`
  width: 440px;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  background-color: #fff;
`;

const StdBackButton = styled.button`
  height: 80px;
  width: 100%;

  padding: 0 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 0;
  background-color: transparent;
  font-size: 28px;

  cursor: pointer;

  & > div {
    width: 40px;
    height: 40px;
  }
`;
