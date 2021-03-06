import React from "react"
import styled from "styled-components"
import { Button, Form, Input, PageTitle, SubIndex } from "../components/common"
// import { FirebaseContext} from '../components/Firebase'
// import { Editor } from '@tinymce/tinymce-react';

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`

const Contact = () => {
  return (
    <>
      <section>
        <PageTitle>
          <span>お問合せ</span>
          <p>Contact</p>
        </PageTitle>
        <Form
          name="contact"
          method="post"
          action="/contact_success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <br></br>
          <p>下記フォームに必要事項をご記入の上、お問合わせください。</p>
          <p>
            通常、４営業日以内にご返答いたします。メールアドレスの入力はお間違いのないようにご記入ください。
          </p>
          <br></br>
          <input type="hidden" name="form-name" value="contact" />
          <SubIndex>NAME</SubIndex>
          <Input required placeholder="Name" type="text" name="name" />
          <SubIndex>TITLE</SubIndex>
          <Input required placeholder="Title" type="text" name="subject" />
          <SubIndex>EMAIL</SubIndex>
          <Input required placeholder="Email" type="email" name="email" />
          <SubIndex>INQUIRY</SubIndex>
          <TEXTAREA required placeholder="Inquiry" name="inquiry" />
          <Button type="submit" block>
            Send
          </Button>
        </Form>
        <br />
        <br />
        <br></br>
      </section>
    </>
  )
}

export default Contact
