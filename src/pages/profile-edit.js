import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  Message,
  ProfileImage2,
  SubIndex,
  Title,
  UploadButton,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const Profile = () => {
  // useEffect(() => {
  //   const defaultPic = user.photoURL
  //   if(defaultPic){
  //     return setPImageUrl(defaultPic)
  //   }else{
  //     return setPImageUrl("https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6")

  //   }
  // } );

  const { firebase, user } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")

  // const [formValues, setFormValues] = useState({
  //   username: ''
  // });

  const [PfileErrorMessage, setPFileErrorMessage] = useState("")
  const [PfileUploaded, setPFileUploaded] = useState("")
  const [Pimage, setPImage] = useState("")
  const [PimageUrl, setPImageUrl] = useState("")

  // function handleInputChange(e){
  //   e.persist();
  //   setErrorMessage('');
  //   setPFileUploaded('');
  //   setFormValues(currentValues => ({
  //     ...currentValues,
  //     [e.target.name]: e.target.value
  //   }))
  // }

  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .editProfile({
        photoURL: PimageUrl,
        username: user.username,
        userId: user.uid,
        email: user.email,
      })
      .then(() => router.push("/profile"))
      .catch(error => {
        setErrorMessage(error.message)
      })
  }

  function onSubmitPFile(e) {
    e.preventDefault()
    if (Pimage === "") {
      setPFileErrorMessage("Error File Uploading!")
    }
    firebase.storage
      .ref(`/profileImages/${Pimage.name}`)
      .put(Pimage)
      .then(
        Complete,
        setPFileErrorMessage(""),
        setPFileUploaded("File Uploaded")
      )
      .catch(error => {
        setPFileErrorMessage(error.message)
      })
  }

  function Complete() {
    firebase.storage
      .ref("profileImages")
      .child(Pimage.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setPImageUrl(fireBaseUrl)
      })
  }

  function handlePImage(e) {
    const Pimage = e.target.files[0]
    setPImage(Pimage)
  }

  return (
    <section>
      <br></br>
      <br></br>
      {!!user && (
        <FormContainer>
          <Title>プロフィール画像変更</Title>
          {!!PimageUrl && <ProfileImage2 src={PimageUrl}></ProfileImage2>}

          <Form onSubmit={onSubmitPFile}>
            <SubIndex>プロフィール画像</SubIndex>
            <input
              type="file"
              onChange={handlePImage}
              required
              style={{
                marginBottom: `1vw`,
              }}
            />
            <UploadButton>Upload</UploadButton>
            {!!PfileUploaded && <Message>Uploaded image properly!</Message>}
            {!!PfileErrorMessage && (
              <ErrorMessage>You need to uploaded image!</ErrorMessage>
            )}
          </Form>
          <br></br>
          <Form onSubmit={handleSubmit}>
            {/* <SubIndex>USERNAME</SubIndex>
          <Input onChange={handleInputChange} value={formValues.username} placeholder={user.displayName} type="text" required name="username" /> */}
            <Button type="submit" block>
              EDIT
            </Button>
          </Form>
          <br></br>
          <br />
        </FormContainer>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  )
}

export default Profile
