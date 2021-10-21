import styled from "@emotion/styled"

const Wrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`

export function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>
}
