import Link from "next/link"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { LoginImage, ProfileImage } from "../components/common"
import { FirebaseContext } from "./Firebase"
import NavbarLinks from "./NavbarLinks"
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  @media (max-width: 1024px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 70%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 6.5vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const BG = styled.div`
  height: 100%;
  position: fixed;
  width: 30%;
  z-index: 500;
  background-color: #000;
  opacity: 0;
  cursor: pointer;
  transition: all 0.3s ease-in;
  top: 6.5vh;
  right: 0;

  @media (max-width: 768px) {
    right: ${props => (props.open ? "-100%" : "0")};
    // visibility: ${props => (props.open ? "hidden" : "visible")};
    opacity: ${props => (props.open ? "0" : "60%")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 25px;
  height: 1.5px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 1.5px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`

const LOGO = styled.img`
  height: 8vw;
  margin-bottom: 0;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 5vw;
  }

  @media (min-width: 1024px) {
    visibility: hidden;
  }
`

const LogoLink = styled.a`
  @media (min-width: 1024px) {
    visibility: hidden;
  }
`

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Navigation>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            {!!firebase && (
              <NavbarLinks
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
              />
            )}
          </Navbox>
        ) : (
          <Navbox open>{!!firebase && <NavbarLinks />}</Navbox>
        )}
        {navbarOpen ? (
          <BG onClick={() => setNavbarOpen(!navbarOpen)} />
        ) : (
          <BG open />
        )}

        <LogoLink href="/">
          {!!firebase && (
            <LOGO
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Feuglena_logo.jpg?alt=media&token=c602cec8-72f2-4845-a096-e5bf02c7b1ba"
              alt="LogoImg"
            ></LOGO>
          )}
        </LogoLink>

        {!!user && (
          <div>
            <Link href="/profile">
              <a
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <ProfileImage
                  src={user.photoURL}
                  alt="profilepic"
                ></ProfileImage>
              </a>
            </Link>
          </div>
        )}
        {!!user && !user.photoURL && (
          <div>
            <Link href="/profile">
              <a
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <ProfileImage
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
                  alt="profilepic"
                ></ProfileImage>
              </a>
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link href="/login">
              <a
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <ExitToAppRoundedIcon
                  style={{
                    color: `#02102e`,
                  }}
                ></ExitToAppRoundedIcon>
              </a>
            </Link>
          </div>
        )}
      </Navigation>
    </>
  )
}

export default Header
