import React, { ReactNode } from "react";
import styled from "styled-components";

function CartTitle({ children }: Props) {
  return (
    <StdTitle>
      <h2>{children}</h2>
    </StdTitle>
  );
}

export default CartTitle;

interface Props {
  children: ReactNode;
}

const StdTitle = styled.div`
  text-align: center;

  & > h2 {
    font-size: 32px;
  }
`;
