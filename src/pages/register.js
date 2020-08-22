import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  SmallP,
  SubIndex,
  Title,
  UploadButton,
  Message,
} from "../components/common"
// import { FirebaseContext} from '../components/Firebase'
import { FirebaseContext } from "../components/Firebase"

const A = styled.a`
  text-decoration: none;
  color: #4c9c41;
  &:hover {
    color: #4c9c41;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Register = () => {
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  })
  const [fileErrorMessage, setFileErrorMessage] = useState("")
  const [fileUploaded, setFileUploaded] = useState("")
  const [image, setImage] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const router = useRouter()

  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          photoURL: imageUrl,
        })
        .then(() => router.push("/"))
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Password and Confirm Password do not match")
    }
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
      })
  }

  function handleImage(e) {
    const image = e.target.files[0]
    setImage(image)
  }

  return (
    <section>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>SIGN UP</Title>
        <br></br>
        <Form required onSubmit={onSubmitFile}>
          <SubIndex>PROFILE IMAGE</SubIndex>
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
          <SubIndex>USERNAME</SubIndex>
          <Input
            onChange={handleInputChange}
            value={formValues.username}
            placeholder="username"
            type="text"
            required
            name="username"
          />
          <SubIndex>EMAIL</SubIndex>
          <Input
            onChange={handleInputChange}
            value={formValues.email}
            placeholder="email"
            type="email"
            required
            name="email"
          />
          <SubIndex>PASSWORD</SubIndex>
          <Input
            onChange={handleInputChange}
            value={formValues.password}
            placeholder="password"
            type="password"
            required
            minLength={6}
            name="password"
          />
          <SubIndex>CONFIRM PASSWORD</SubIndex>
          <Input
            onChange={handleInputChange}
            value={formValues.confirmPassword}
            placeholder="confirm password"
            type="password"
            required
            minLength={6}
            name="confirmPassword"
          />
          {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <br></br>
          <Button type="submit" block>
            Send
          </Button>
        </Form>
        <br></br>
        <SmallP>
          <p>
            Read
            <A href="/terms" target="_blank">
              {" "}
              Terms and Conditions
            </A>
          </p>
        </SmallP>
        <SmallP>
          <p>
            Already a member?
            <A to="/"> Login</A>
          </p>
        </SmallP>
        <br />
      </FormContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  )
}

export default Register
