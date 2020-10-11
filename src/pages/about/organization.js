import React from "react"
import styled from "styled-components"
import { PageTitle } from "../../components/common"

const TH = styled.th`
  font-size: 12px;
  width: 30%;
  font-weight: 500;
  color: #1e90ff;
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
          <span>企業概要</span>
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
                <TD>株式会社シャングリラ</TD>
              </tr>
              <tr>
                <TH>住所</TH>
                <TD>東京都渋谷区渋谷3−6−3</TD>
              </tr>
              <tr>
                <TH>設立年月日</TH>
                <TD>2018年1月12日</TD>
              </tr>
              <tr>
                <TH>代表者</TH>
                <TD>西山 洸</TD>
              </tr>
              <tr>
                <TH>事業内容</TH>
                <TD>
                  <TdContainer>
                    1. 有料職業紹介事業(許可番号：13-ユ-311374)
                    <br></br>
                    2. 各種コンサルティング事業
                    <br></br>
                    3. 調査事業
                    <br></br>
                  </TdContainer>
                </TD>
              </tr>
              <tr>
                <TH>代表電話</TH>
                <TD>
                  <TdContainer>
                    050-5534-1928
                    <br></br>
                    ※海外からの場合は冒頭に＋81
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
