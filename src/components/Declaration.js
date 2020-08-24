import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { BodyText, TopLink } from "../components/common"

const DecContainer = styled.div`
  text-align: center;
  margin: 0 auto 3rem;
`
const DeclarationP = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #02102e;
  font-size: 32px;
`

const Declaration = () => {
  return (
    <>
      <DecContainer>
        <Fade bottom duration={2000}>
          <DeclarationP>農業を通じて、</DeclarationP>
        </Fade>
        <br></br>
        <Fade bottom duration={2000}>
          <DeclarationP>地方活性化を目指す</DeclarationP>
        </Fade>
      </DecContainer>
      <Fade duration={2000}>
        <BodyText>
          少子化や都市部への人口集中が加速する中、地方では人口減少問題が深刻化しています。当法人は、地方への移住希望者並びにその潜在層に対し、農業を通じて地方に定住・関与してもらうための取組を推進する
          ことで、地方活性化等に参画したいと考える市民活動のプラットフォーム形成に寄与してまいります。
        </BodyText>
      </Fade>
      <Fade duration={1500}>
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <Link href="/about/vision">
            <TopLink Link>設立理念 →</TopLink>
          </Link>
        </div>
      </Fade>
    </>
  )
}

export default Declaration
