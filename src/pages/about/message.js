import React from "react"
import styled from "styled-components"
import { PageTitle, BodyText } from "../../components/common"

const PresidentPic = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #808080;
  // display: inline-block;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 1.5em;
    font-weight: 550;
    letter-spacing: 0.02em;
    width: 80%;
    font-size: 20px;
    color: #fff;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  img {
    opacity: 35%;
    background-color: black;
    width: 100%;
    margin: 0;
    object-fit: cover;
    display: block;

    @media (min-width: 768px) {
      height: 500px;
    }

    @media (min-width: 1024px) {
      height: 630px;
    }
  }
`

const SignatureContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
`

const Signature = styled.p`
  line-height: 1.7;
  font-size: 15px;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  margin: 0 1.5rem 0 auto;
  bottom: 0;
`

const SignatureImg = styled.img`
  width: 8rem;
  margin: 0;
`

const Message = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>代表メッセージ</span>
          <p>Message</p>
        </PageTitle>
        <PresidentPic>
          <img src="../images/konishiyama_2.jpg" alt="Ko Nishiyama"></img>
          <p>
            産業と自然がともに生きる
            <br></br>
            新しい循環型社会の実現へ
          </p>
        </PresidentPic>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.5em 1.5rem 1.45rem`,
          }}
        >
          <BodyText>
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </BodyText>
          <br></br>
          <BodyText>
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </BodyText>
          <br></br>
          <BodyText>
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </BodyText>
          <br></br>
          <BodyText>
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </BodyText>
          <SignatureContainer>
            <Signature>代表取締役社長</Signature>
            <SignatureImg src="../images/signature.jpg"></SignatureImg>
          </SignatureContainer>
          <br></br>
        </div>
      </section>
    </>
  )
}

export default Message
