import Link from "next/link"
import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import { PageCover, BottomBar, MemberPosts } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import CreateIcon from "@material-ui/icons/Create"

const Write = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover {
    color: #f4b400;
    transition: all 0.4s ease-in;
  }
`

const Member = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <section>
      <PageCover>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
          alt="coverImg"
        ></img>
        <p>
          <span>COMMUNITY</span>
        </p>
      </PageCover>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.5rem 1.45rem`,
        }}
      >
        {!!firebase && <MemberPosts firebase={firebase} />}
        {!!user && (
          <BottomBar>
            <Link href="/member-write">
              <CreateIcon
                style={{
                  color: `white`,
                  backgroundColor: `#F4B400`,
                  borderRadius: `50%`,
                  padding: `0.5rem`,
                  height: `3rem`,
                  width: `3rem`,
                  boxShadow: `rgba(0, 0, 0, 0.4) 0 2px 5px`,
                }}
              />
            </Link>
          </BottomBar>
        )}
      </div>
    </section>
  )
}

export default Member
