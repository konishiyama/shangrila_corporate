import { Editor } from "@tinymce/tinymce-react"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  PageTitle,
  SubIndex,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const MemberWrite = ({ data }) => {
  const [titleValues, setTitleValues] = useState({ title: "" })
  const [contentValues, setContentValues] = useState({ content: "" })
  const { firebase, user } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [timeStamp, setTimeStamp] = useState("")
  const [usernameValues, setUsernameValues] = useState("")
  const [PimageUrl, setPImageUrl] = useState("")
  const [postNumber, setPostNumber] = useState("")

  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .memberWrite({
        title: titleValues.title,
        content: contentValues.content,
        date: timeStamp,
        username: usernameValues,
        userPhoto: PimageUrl,
        postNum: postNumber,
      })
      .then(() => router.push("/"))
      .catch(error => {
        setErrorMessage(error.message)
      })
  }

  function handleInputTitleChange(e) {
    setErrorMessage("")
    setTitleValues({
      title: e.target.value,
    })
    setTimeStamp(new Date().toLocaleDateString())
    setUsernameValues(user.username)
    setPImageUrl(user.photoURL)
    firebase.getMemberPostNumbers().then(r => {
      setPostNumber(r.docs.length + 1)
    })
  }

  function handleEditorChange(e) {
    setContentValues({
      content: e.target.getContent(),
    })
    setTimeStamp(new Date().toLocaleDateString())
    setUsernameValues(user.username)
    setPImageUrl(user.photoURL)
  }

  return (
    <section>
      <PageTitle>
        <span>掲示板投稿</span>
        <p>Write</p>
      </PageTitle>
      <Form onSubmit={handleSubmit}>
        <SubIndex>タイトル</SubIndex>
        <Input
          required
          placeholder="title"
          type="text"
          onChange={handleInputTitleChange}
        />
        <br></br>
        <SubIndex>投稿内容</SubIndex>
        <div className="App">
          <Editor
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help",
            }}
            apiKey="n5flvaer5akndukhxw941fwbvz69k09cq48w1bhe57jq4s65"
            onChange={handleEditorChange}
            required
          />
        </div>
        {!!errorMessage && <ErrorMessage>Failed posting</ErrorMessage>}
        <br></br>
        <Button type="submit" block>
          投稿する
        </Button>
      </Form>
      <br />
      <br />
      <br></br>
    </section>
  )
}

export default MemberWrite
