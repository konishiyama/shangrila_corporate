import React, { useContext } from "react"
import { IndexArticles, IndexMemberPosts } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom" // Importing Zoom effect
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"

const CoverPic = styled.div`
  background: linear-gradient( 135deg, rgba(246, 255, 0, 0.8), rgba(255, 0, 161, 0.8)),
  background: url(https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample7.jpg?alt=media&token=85fc967d-5da8-4903-8d34-a01f5aa69d65);
  background-size: cover;
`

const Test = props => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        ></div>
        <CoverPic />
        <div>
          <Fade bottom duration={3000}>
            <p>
              The following is the stress test for the chosen effect. A 100
              paragraphs of lorem ipsum text will be revealed as you scroll
              down. To reset the test select an option from the button toolbar
              above. The following whitespace is intentionally left blank.
              Scroll down to begin stress test.
            </p>
          </Fade>
        </div>
        <div>
          <Fade left duration={1500}>
            <p>
              The following is the stress test for the chosen effect. A 100
              paragraphs of lorem ipsum text will be revealed as you scroll
              down. To reset the test select an option from the button toolbar
              above. The following whitespace is intentionally left blank.
              Scroll down to begin stress test.
            </p>
          </Fade>
        </div>
        <div>
          <Reveal effect="fadeInUp">
            <p>
              The following is the stress test for the chosen effect. A 100
              paragraphs of lorem ipsum text will be revealed as you scroll
              down. To reset the test select an option from the button toolbar
              above. The following whitespace is intentionally left blank.
              Scroll down to begin stress test.
            </p>
          </Reveal>
        </div>

        <Reveal effect="fadeInUp">
          <p>
            The following is the stress test for the chosen effect. A 100
            paragraphs of lorem ipsum text will be revealed as you scroll down.
            To reset the test select an option from the button toolbar above.
            The following whitespace is intentionally left blank. Scroll down to
            begin stress test.
          </p>
        </Reveal>
      </section>
    </>
  )
}

export default Test
