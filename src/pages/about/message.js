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
    opacity: 55%;
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

  // br {
  //   display: block;
  //   margin-bottom: 2px;
  //   font-size: 2px;
  //   line-height: 2px;
  // }
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
            alt="Shohei Yamaguchi"
          ></img>
          {/* <p>
            産業と自然がともに生きる
            <br></br>
            新しい循環型社会の実現へ
          </p> */}
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
          <br></br>
        </div>
      </section>
    </>
  )
}

export default Message
