import React, { ReactNode } from "react";
import styled from "styled-components";

function CartList({ children }: Props) {
  return <StdList>{children}</StdList>;
}

export default CartList;

interface Props {
  children: ReactNode;
}

const StdList = styled.ul`
  margin: 0;
  padding: 0 8px;
`;
