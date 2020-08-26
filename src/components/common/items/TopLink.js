import styled from "styled-components"

export const TopLink = styled.a`
  width: 35%;
  font-size: 14px;
  color: #4c9c41;
  display: block;
  text-align: center;
  border: solid 1px #4c9c41;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 3em;
  &:hover {
    color: #fff;
    background-color: #a9ce84;
    border: solid 1px #a9ce84;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`
