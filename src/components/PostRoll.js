import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const EachPost = styled.div`
  padding: 0.5em;
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid #f4f4f4;
  overflow-x: hidden;
  &:hover {
    cursor: pointer;
    background-color: #f4f9ef;
    transition: all 0.2s ease-in;
    p {
      text-decoration: underline;
      color: #4c9c41;
      transition: all 0.4s ease-in;
    }
  }
`

// const PostLink = styled.a`
// `

const A = styled.a`
  text-decoration: none;
`

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 auto;
  div {
    text-align: left;
    color: #888;
  }
  span {
    text-align: left;
    color: #888;
  }
  span:before {
    content: "|";
    padding: 0 0.5em;
    font-size: 0.8em;
    color: #ccc;
  }
`

const Title = styled.p`
  width: 100%;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: #02102e;
  text-align: left;
  letter-spacing: normal;
`

const Image = styled.img`
  width: 1.5em;
  height: 1.5em;
  text-align: left;
  object-fit: cover;
  border-radius: 50%;
  border: solid 1px;
  border-color: #eeeeee;
  margin-bottom: 0;
  margin-right: 0.2em;
`

const PostRoll = props => {
  return (
    <>
      {/* <Fade right duration={800} delay={1000} distance="50px"> */}
      <EachPost>
        <Link as={`/member/${props.id}`} href={"/member/[id]"}>
          <A>
            <Container>
              <Title>{props.title}</Title>
              <SubContainer>
                {!!props.userPhoto && (
                  <Image src={props.userPhoto} alt="profilepic"></Image>
                )}
                {!props.userPhoto && (
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
                    alt="profilepic"
                  ></Image>
                )}
                <div>{props.username}</div>
                <span>{props.date}</span>
              </SubContainer>
            </Container>
          </A>
        </Link>
      </EachPost>
      {/* </Fade> */}
    </>
  )
}

export default PostRoll
