import React, { ReactNode } from "react";
import styled from "styled-components";

function CartList({ children }: Props) {
  return <StdUl>{children}</StdUl>;
}

export default CartList;

interface Props {
  children: ReactNode;
}

const StdUl = styled.ul`
  margin: 0;
  padding: 0 8px;
`;
