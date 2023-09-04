import React from "react";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";

const style = {
  cursor: "pointer",
  height: 50,
  width: 50,
};

function Cart({ openCart, cartAmount }) {
  return (
    <Container className="cart-div">
      <FaOpencart style={style} onClick={openCart} />
      <Span>{cartAmount}</Span>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: goldenrod;
  bottom: 80px;
  color: #000;
  height: 50px;
  position: fixed;
  display: flex;
  flex-direction: row;
  left: 0;
  padding: 5px;
  width: auto;
  z-index: 222;
`;

const Span = styled.span`
  height: 20px;
  padding-left: 5px;
  width: 20px;
`;

export default Cart;
