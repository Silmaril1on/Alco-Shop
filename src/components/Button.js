import React from "react";
import styled from "styled-components";

function Button({ children, onClick, $variants }) {
  return (
    <Btn onClick={onClick} $variants={$variants}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  background: ${({ $variants }) =>
    $variants === "black"
      ? "white"
      : $variants === "transparent"
      ? "transparent"
      : "#000"};
  border: ${({ $variants }) =>
    $variants === "transparent" ? "2px solid white" : "none"};
  cursor: pointer;
  color: ${({ $variants }) => ($variants === "black" ? "#000" : "#fff")};
  display: flex;
  font: bold 0.5rem semplicitapro;
  height: auto;
  justify-content: center;
  letter-spacing: 1px;
  margin: 5px;
  padding: 10px;
  text-transform: capitalize;
  transition: 0.3s;
  @media (min-width: 800px) {
    font-size: 1rem;
  }
  &:hover {
    color: goldenrod;
    transform: scale(1.1);
  }
`;

export default Button;
