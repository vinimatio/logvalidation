import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled === false &&
    css`
      pointer-events: none;
      opacity: 0.6;
      }
    `}
`;
