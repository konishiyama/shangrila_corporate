import React from "react"
import styled from "styled-components"
import { PageTitle, BodyText } from "../../components/common"

const PresidentPic = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #808080;
  // display: inline-block;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 1.5em;
    font-weight: 550;
    letter-spacing: 0.02em;
    width: 80%;
    font-size: 20px;
    color: #fff;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  img {
    opacity: 35%;
    background-color: black;
    width: 100%;
    margin: 0;
    object-fit: cover;
    display: block;

    @media (min-width: 768px) {
      height: 500px;
    }

    @media (min-width: 1024px) {
      height: 630px;
    }
  }
`

const SignatureContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
`

const Signature = styled.p`
  line-height: 1.7;
  font-size: 15px;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  margin: 0 1.5rem 0 auto;
  bottom: 0;
`

const SignatureImg = styled.img`
  width: 8rem;
  margin: 0;
`

const Message = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>代表メッセージ</span>
          <p>Message</p>
        </PageTitle>
        <PresidentPic>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shangri-la-inc.appspot.com/o/konishiyama_2.jpg?alt=media&token=2753849c-3fe0-405d-8396-6ab081cc2912"
            alt="Ko Nishiyama"
          ></img>
          <p>
            人々が自由に、国境を超えて
            <br></br>
            人生を享受できる世界の実現
          </p>
        </PresidentPic>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.5em 1.5rem 1.45rem`,
          }}
        >
          <BodyText>
            「自分らしく生きていける世界が、生まれ育った韓国以外の場所にもあるということに、日本に初めて旅行に来たときに気付かされたんです。」
            <br></br>
            これまで事業として取り組んできた海外人材紹介事業のなかで日本企業への就職をお手伝いさせていただいた学生さんの一人が私に語ってくれた言葉です。
          </BodyText>
          <br></br>
          <BodyText>
            法人を設立した当初、私は「東アジア地域の人の移動のさらなる流動化を通じ、より平和なアジアを創っていきたい。」というような想いを持って事業に取り組もうと考えていました。
            ものすごく、単純な話です。ヨーロッパで実現できているような、平和を追求するための手段としての地域統合が、私達が生きているアジアでも不可能なはずはない。そういった、青年期特有の、青臭い考えとも言えるかもしれない噺なのですが、学問的にも、事業的にも、どうしたら実現できるのかについて、ずっと、考え続けてきました。その理想を実現させる方法として、起業という道を選んだのです。
          </BodyText>
          <br></br>
          <BodyText>
            しかし、事業をすすめるなかで、「地域統合」や「平和」といった言葉が、独り歩きしているように感じることが、多々、ありました。
            事業の関係で様々な方々にお会いする度に、意気揚々と語るのですが、皆様両手を上げて大賛成！！！、、、というわけには行かず。。。「気持ちはわかるけど、絵空事のような気がするなぁ。」といった趣旨のことを言われることもしばしばありました。
          </BodyText>
          <br></br>
          <BodyText>
            そうした時、出会ったのが上述の学生さんの言葉です。
            <br></br>
            「ああ、そうだったのか、何をそんなに難しく考えていたのか。」と、
            <br></br>
            率直にそう感じました。
          </BodyText>
          <br></br>
          <BodyText>
            人はそれぞれ、日々より良い生活を求めて行動する生き物であると思います。
            <br></br>
            より楽しく、より充実した人生を歩みたいと思うからこそ、人は美味しいものを食べるために外に繰り出し、旅にでかけ、新しい仕事を探し、移住したりするのでしょう。
            そしてそうした人々の行動は、近代の国際情勢の安定化という恩恵を受けつつ、より国境を超えた範囲へと広がっていっています。その結果、人々は海外旅行という選択肢や、音楽・文学といった海外の文化を楽しんだり、未だ会ったことのない友人との出会いを求め、言語を学習したりするようになりました。
            <br></br>
            私自身、これまで中国、台湾、韓国と、それぞれの土地で住み、食べ、遊ぶことを通じてより充実した人生を歩もうとしてきたのであり、そうした人々の隊列に加わる一員なのであるということにもまた、改めて気付かされたのです。
          </BodyText>
          <br></br>
          <BodyText>
            必ずしも、生まれた環境や、今生きている世界が、自身の人生にとって最適な選択肢であるとは限りません。あらゆる人々が国や地域という枠を飛び越え、広い世界において人生を自由に追求ができる時代が訪れれば、どれだけよいことでしょう。
            <br></br>
            そしてまた、地域統合や平和が必要だから、人々が動くのではありません。人々が望むことの結果として、地域の連携や、地域的な平和を、時代が、人々が求める時が訪れるのではないでしょうか。
            <br></br>
            そして私達は、そうして自由に、生まれた国や環境を超えて人生を楽しもうとする人々のサポートをすることを通じ、新たな時代を形つくって行くことができるような存在の一角となりたい、そしてまた、その先に待ち受けているアジアという地域の未来が、包容力が高い、そして平和な世界であって欲しい、といった想いから、日々、事業に取り組んでいます。
          </BodyText>
          <br></br>
          <BodyText>
            日頃から我々の事業や理念にご賛同いただき、ご支援いただいている皆様に対し、厚く御礼を申し上げつつ、これからも引き続きのご支援を賜わりますよう、お願い申し上げます。
          </BodyText>
          <br></br>
          <SignatureContainer>
            <Signature>代表取締役社長</Signature>
            <SignatureImg src="https://firebasestorage.googleapis.com/v0/b/shangri-la-inc.appspot.com/o/signature.jpg?alt=media&token=1ecb81b8-924a-42a4-8b01-d90796eca177"></SignatureImg>
          </SignatureContainer>
          <br></br>
        </div>
      </section>
    </>
  )
}

export default Message
