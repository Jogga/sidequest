import styled from "styled-components"
import { colors } from "../globalStyles"

export const PrimaryButton = styled.button`
  background-color: ${ colors.Primary80 };
  color: ${ colors.Background0 };
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: ${ colors.Primary90 };
  }
`
