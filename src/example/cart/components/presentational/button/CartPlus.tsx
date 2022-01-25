import React from "react";
import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";

function CartPlusButton({ onClick }: Props) {
  return (
    <StdButton type="button" onClick={onClick}>
      <BsCartPlus size="100%" />
    </StdButton>
  );
}

export default CartPlusButton;

interface Props {
  onClick?: () => void;
}

const StdButton = styled.button`
  width: 35px;
  height: 35px;

  border: 0;
  background-color: transparent;

  cursor: pointer;
`;
