import React, { Children } from "react"
import styled from "styled-components"
import BackButton from "./BackButton"

const PageContainer = styled.div`
  margin: 24px;
`

export default function Page(props) {
  return (
    <PageContainer>
      {props.backNav &&
        <BackButton />
      }
      {props.children}
    </PageContainer>
  )
}
