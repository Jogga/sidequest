import styled from "styled-components"
import { colors } from "../../globalStyles"

export const PrimaryButton = styled.button`
  background-color: ${ colors.Primary80 };
  color: ${ colors.Background0 };
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: ${ colors.Primary90 };
  }
`

export const SecondaryButton = styled.button`
  cursor: pointer;
  border: 1px solid ${ colors.Primary80 };
  color: ${ colors.Primary80 };
  background-color: transparent;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
`