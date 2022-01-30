import { useNavigate } from "react-router-dom"
import { ReactComponent as BackIcon } from '../assets/icon-back.svg' 
import styled from "styled-components"
import { colors } from "../globalStyles"

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 20px;
  background: transparent;
  border: none;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${ colors.Primary10 };
  }
`
const ButtonLabel = styled.span`
  color: ${ colors.Primary80 };
  padding: 4px 8px 4px 4px;
`

export default function BackButton() {
  const navigate = useNavigate()
  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      <BackIcon />
      <ButtonLabel>
        Back
      </ButtonLabel>    
    </StyledBackButton>
  )
}
