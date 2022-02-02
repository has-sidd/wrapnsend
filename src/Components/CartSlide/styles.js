import styled from "styled-components";

export const CartSideBar = styled.div`
  z-index: 10000;
  width: 380px;
  background: #fff;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;

  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -400px;
  }
`;

export const EmptyCart = styled.div`
    position: absolute;
    top:50%;
    right: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
`;

export const SideBarHeader = styled.div`
  font-weight: 300;
  margin-bottom: 20px;
  font-size: 24px;
  text-transform: uppercase;
  position: relative;
  padding: 15px 0;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
  }
`;
