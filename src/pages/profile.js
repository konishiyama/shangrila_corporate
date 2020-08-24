import Link from "next/link"
import React, { useContext } from "react"
import styled from "styled-components"
import { Container, ProfileImage2, SubTitle } from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const TD = styled.td`
  word-break: break-all;
`

const Profile = () => {
  const { firebase, user } = useContext(FirebaseContext)
  // const [PimageUrl, setPImageUrl] = useState('');
  console.log(firebase, user)

  return (
    <section>
      <Container>
        <SubTitle>
          <span>プロフィール</span>
        </SubTitle>
        {!!user && !!user.photoURL && (
          <Link href="/profile-edit">
            <ProfileImage2 src={user.photoURL} alt="profilepic"></ProfileImage2>
          </Link>
        )}
        {!!user && !user.photoURL && (
          <Link href="/profile-edit">
            <ProfileImage2
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
              alt="profilepic"
            ></ProfileImage2>
          </Link>
        )}
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <TD>
                <b>EMAIL</b>
              </TD>
              {!!user && !!user.email && <TD>{user.email}</TD>}
            </tr>
            <tr>
              <TD>
                <b>USERNAME</b>
              </TD>
              {!!user && !!user.username && <TD>{user.username}</TD>}
            </tr>
            <tr>
              <TD>
                <b>ID</b>
              </TD>
              {!!user && !!user.uid && <TD>{user.uid}</TD>}
            </tr>
          </tbody>
        </table>
        <br></br>
        {/* <EditLink href="/profile-edit">EDIT</EditLink> */}
        <br></br>
      </Container>
    </section>
  )
}

export default Profile
