import React, { ReactNode } from "react";
import styled from "styled-components";

const CartListItem = ({ children, onClick }: Props) => {
  return <StdList onClick={onClick}>{children}</StdList>;
};

export default CartListItem;

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const StdList = styled.li`
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
