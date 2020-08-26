import styled from "styled-components"

export const PageTitle = styled.div`
  margin: 4rem auto 2rem;
  text-align: center;
  display: block;
  span {
    display: inline-block;
    font-weight: 200;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #444444;
    margin: 0 auto 0.5em;
  }
  p {
    font-weight: 200;
    letter-spacing: 0.03em;
    font-size: 12px;
    color: #808080;
    // margin: 0 auto;
  }
  p:after {
    content: "";
    display: block;
    height: 1.8px;
    width: 65px;
    margin: 0.8rem auto 0;
    background-color: #4c9c41;

    @media (min-width: 768px) {
      width: 75px;
    }

    @media (min-width: 1024px) {
      width: 85px;
    }
  }
`
