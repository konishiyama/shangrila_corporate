import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import {
  Button,
  CheckBox,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  SmallP,
  SubIndex,
  Title,
} from "../components/common"
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

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")

  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .then(() => router.push("/"))
      .catch(error => {
        setErrorMessage(error.message)
      })
  }
  //login()はプロミスなので（async）thenを使っている。

  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>ログイン</Title>
        <Form onSubmit={handleSubmit}>
          <SubIndex>EMAIL</SubIndex>
          <Input
            required
            placeholder="email"
            value={formValues.email}
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <SubIndex>パスワード</SubIndex>
          <Input
            required
            placeholder="password"
            value={formValues.password}
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          {!!errorMessage && (
            <ErrorMessage>
              パスワードまたはメールアドレスが間違っています
            </ErrorMessage>
          )}
          <div
            style={{
              display: `flex`,
              marginBottom: `10px`,
              marginTop: `20px`,
            }}
          >
            {/* <CheckBox type="checkbox" />
            <span
              style={{
                paddingLeft: `4px`,
              }}
            >
              Remember Password
            </span> */}
          </div>
          <Button type="submit" block>
            Login
          </Button>
        </Form>
        <br />
        <SmallP>
          <p>
            <Link href="/register">
              <A>パスワード</A>
            </Link>
            をお忘れですか？
          </p>
        </SmallP>
        <SmallP>
          <p>
            会員登録は
            <Link href="/register">
              <A>こちら</A>
            </Link>
          </p>
        </SmallP>
        <br />
      </FormContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  )
}

export default Login
