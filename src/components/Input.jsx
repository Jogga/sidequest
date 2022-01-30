import styled from "styled-components"
import { colors } from "../globalStyles"

export const TextInput = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding: 5px 8px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${ colors.Background0 };
  border-radius: 6px;
  border: 1px solid ${ colors.Foreground30 };
`

export const TextInputField = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  gap: 4px;
`