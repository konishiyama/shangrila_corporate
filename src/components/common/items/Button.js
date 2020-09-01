import styled from "styled-components"

export const Button = styled.button`
  padding: 6px 10px;
  background: #f4b400;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  ${props => (props.block ? "display: block; width: 100%;" : "")}
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`
