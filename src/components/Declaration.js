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
  font-size: 25px;
`

const Declaration = () => {
  return (
    <>
      <DecContainer>
        <Fade bottom duration={2000}>
          <DeclarationP>アジアという地域で</DeclarationP>
        </Fade>
        <br></br>
        <Fade bottom duration={2000}>
          <DeclarationP>自由に人生を謳歌できる世界</DeclarationP>
        </Fade>
      </DecContainer>
      <Fade duration={2000}>
        <BodyText>
          生まれた国や環境に依存せず、人生を存分に謳歌できる世界があったらどれだけいいことか。私達はそう考えています。
          アジアという地域のどこかに生まれた一人のひとが、言語の壁や文化の差異、物理的な距離感といった障害を飛び越えて、より有意義な人生の「選択」を行うことができるサポートを行うための事業を展開しています。
        </BodyText>
      </Fade>
      <Fade duration={1500}>
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <Link href="/about/message">
            <TopLink Link>代表挨拶 →</TopLink>
          </Link>
        </div>
      </Fade>
    </>
  )
}

export default Declaration
