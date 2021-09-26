import styled from "styled-components";

import React from "react";

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  margin: 1rem;

  &:active {
    background-color: blue;
  }
`;

export default Button;
