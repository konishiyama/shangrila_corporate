import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  text-align: center;
  margin: 0 auto 4rem;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
`

const Cap = styled.span`
  text-align: left;
  margin: 0;
  color: #1e90ff;
  font-size: 40px;
  font-weight: bold;
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", "MS 明朝", serif;
`

const Big = styled.span`
  text-align: left;
  margin: 0;
  color: #02102e;
  font-size: 30px;
  font-weight: bold;
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", "MS 明朝", serif;
`

const Small = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #808080;
  font-size: 14pt;
  font-weight: bold;
`

const ImgContainer = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  margin: 30px 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`

const Activity = () => {
  return (
    <>
      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>海</Cap>
            <Big>外人材紹介事業</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>韓国・中国・台湾の人材の</Small>
          <Small>日本企業への紹介事業</Small>
        </Fade>
        {/* <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shangri-la-inc.appspot.com/o/topimage3.jpg?alt=media&token=a7695180-d905-48ce-af8d-c730e236ae4c"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade> */}
      </Container>

      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>コ</Cap>
            <Big>ンサルティング事業</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>東アジア地域に関する</Small>
          <Small>各種コンサルテイング・調査事業</Small>
        </Fade>
        {/* <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade> */}
      </Container>
      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>ソ</Cap>
            <Big>フトウェア開発事業</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>外国語ウェブサイトの制作等</Small>
          <Small>各種ソフトウェア開発事業</Small>
        </Fade>
        {/* <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade> */}
      </Container>
    </>
  )
}

export default Activity
