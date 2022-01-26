import React, { ReactNode } from "react";
import styled from "styled-components";

function CartListItem({ children, onClick }: Props) {
  return <StdListItem onClick={onClick}>{children}</StdListItem>;
}

export default CartListItem;

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const StdListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  padding: 0 8px;

  border: 1px solid #000;
  border-radius: 6px;

  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  & > span {
    font-size: 18px;
  }
`;
