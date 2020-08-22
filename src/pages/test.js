import React, { useContext } from "react"
import { IndexArticles, IndexMemberPosts } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom" // Importing Zoom effect
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"

const CoverPic = styled.img`
  margin: 0;
  width: 100%;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 630px;
  }
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
        <Reveal effect="fadeInUp">
          <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f" />
        </Reveal>
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
