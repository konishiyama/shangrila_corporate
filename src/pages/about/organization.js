import React from "react"
import styled from "styled-components"
import { PageTitle } from "../../components/common"

const TH = styled.th`
  font-size: 12px;
  width: 30%;
  font-weight: 500;
  color: #4c9c41;
  padding: 1.8em 0 1.5em 0.8em;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  vertical-align: top;
`

const TD = styled.td`
  word-break: break-all;
  line-height: 2;
  font-size: 12px;
  width: 70%;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  padding: 1.8em 0 1.5em 0;
`

const TdContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: justify;
`

const Organization = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>団体概要</span>
          <p>Profile</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0em 1.5rem 1.45rem`,
          }}
        >
          <table>
            <tbody>
              <tr>
                <TH>法人名</TH>
                <TD>特定非営利活動法人 IMOLUTION</TD>
              </tr>
              <tr>
                <TH>住所</TH>
                <TD>栃木県日光市高徳508</TD>
              </tr>
              <tr>
                <TH>設立年月日</TH>
                <TD>2020年8月10日</TD>
              </tr>
              <tr>
                <TH>代表者</TH>
                <TD>山口 翔平</TD>
              </tr>
              <tr>
                <TH>事業内容</TH>
                <TD>
                  <TdContainer>
                    1. 農場経営事業
                    <br></br>
                    2. 農作物販売・輸出事業
                    <br></br>
                    3. 農業初心者への情報発信
                    <br></br>
                    4. 農作物を通じた地方活性化事業
                    <br></br>
                  </TdContainer>
                </TD>
              </tr>
              <tr>
                <TH>活動の種類</TH>
                <TD>
                  <TdContainer>
                    1. まちづくりの推進を図る活動
                    <br></br>
                    2. 観光の振興を図る活動
                    <br></br>
                    3. 農山漁村又は中山間地域の振興を図る活動
                    <br></br>
                    4. 国際協力の活動
                    <br></br>
                    5. 科学技術の振興を図る活動
                    <br></br>
                    6. 経済活動の活性化を図る活動
                    <br></br>
                  </TdContainer>
                </TD>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Organization
