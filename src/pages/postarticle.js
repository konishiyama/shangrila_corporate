import { Editor } from "@tinymce/tinymce-react"
// import { navigate } from "gatsby"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  Message,
  PageCover,
  SubIndex,
  UploadButton,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const PostArticle = ({ data }) => {
  const [titleValues, setTitleValues] = useState({ title: "" })
  const [contentValues, setContentValues] = useState({ content: "" })
  const { user, firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [fileErrorMessage, setFileErrorMessage] = useState("")
  const [fileUploaded, setFileUploaded] = useState("")
  const [image, setImage] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [timeStamp, setTimeStamp] = useState("")
  const [articleNumber, setArticleNumber] = useState("")
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .postArticle({
        title: titleValues.title,
        content: contentValues.content,
        cover: imageUrl,
        date: timeStamp,
        articleNum: articleNumber,
      })
      .then(router.push("/"))
      .catch(error => {
        setErrorMessage(error.message)
      })
  }

  function handleInputTitleChange(e) {
    // e.persist();
    setErrorMessage("")
    setTitleValues({
      title: e.target.value,
    })
    setTimeStamp(new Date().toLocaleDateString())
    firebase.getArticleNumbers().then(r => {
      setArticleNumber(r.docs.length + 1)
    })
  }

  function handleEditorChange(e) {
    setContentValues({
      content: e.target.getContent(),
    })
    setTimeStamp(new Date().toLocaleDateString())
  }

  function onSubmitFile(e) {
    e.preventDefault()
    if (image === "") {
      setFileErrorMessage("Error File Uploading!")
    }
    firebase.storage
      .ref(`/images/${image.name}`)
      .put(image)
      .then(complete, setFileErrorMessage(""), setFileUploaded("File Uploaded"))
      .catch(error => {
        setFileErrorMessage(error.message)
      })
  }

  function complete() {
    firebase.storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl)
        setTimeStamp(new Date().toLocaleDateString())
      })
  }

  function handleImage(e) {
    const image = e.target.files[0]
    setImage(image)
    setTimeStamp(new Date().toLocaleDateString())
  }

  return (
    <section>
      <PageCover>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f"
          alt="coverImg"
        ></img>
        <p>
          <span>POST ARTICLE</span>
        </p>
      </PageCover>
      <Form required onSubmit={onSubmitFile}>
        <SubIndex>COVER IMAGE</SubIndex>
        <input
          type="file"
          onChange={handleImage}
          style={{
            marginBottom: `1vw`,
          }}
        />
        <br></br>
        <UploadButton>Upload</UploadButton>
        {!!fileUploaded && <Message>Uploaded image properly!</Message>}
        {!!fileErrorMessage && (
          <ErrorMessage>You need to uploaded image!</ErrorMessage>
        )}
      </Form>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <SubIndex>TITLE</SubIndex>
        <Input
          required
          placeholder="title"
          type="text"
          onChange={handleInputTitleChange}
        />
        <br></br>
        <SubIndex>CONTENT</SubIndex>
        <div className="App">
          <Editor
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | forecolor | bold italic underline | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help",
            }}
            apiKey="n5flvaer5akndukhxw941fwbvz69k09cq48w1bhe57jq4s65"
            onChange={handleEditorChange}
            required
          />
        </div>
        {!!errorMessage && (
          <ErrorMessage>Failed posting article properly</ErrorMessage>
        )}
        <br></br>
        <Button type="submit" block>
          Post
        </Button>
      </Form>
      <br />
      <br />
      <br></br>
    </section>
  )
}

export default PostArticle
