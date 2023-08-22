import React from "react";
import styled from "styled-components";

function Header({ children, $size, $variants, $weight }) {
  return (
    <Title $size={$size} $weight={$weight} $variants={$variants}>
      {children}
    </Title>
  );
}

const Title = styled.h1`
  font-size: ${({ $size }) =>
    $size === "xl"
      ? "4rem"
      : $size === "lg"
      ? "3.3rem"
      : $size === "md"
      ? "2.5rem"
      : $size === "sm"
      ? "1.5rem"
      : "1rem"};
  font-family: ${({ $variants }) =>
    $variants === "primary" ? "semplicitapro" : "dancing script"};
  font-weight: ${({ $weight }) => ($weight === "bold" ? "bold" : "normal")};
  padding: 5px;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: ${({ $size }) =>
      $size === "xl"
        ? "4.4rem"
        : $size === "lg"
        ? "3.8rem"
        : $size === "md"
        ? "3.2rem"
        : $size === "sm"
        ? "2.5rem"
        : $size === "xs"
        ? "1.5rem"
        : "1rem"};
  }
`;

export default Header;
