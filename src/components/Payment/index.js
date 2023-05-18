import {Component} from 'react'

import {
  BgMainContainer,
  FirstPart,
  SecondPart,
  BigHeadeingEl,
  UnorderedList,
  List,
  ParaElFirstPart,
  ImageElFirstpart,
  Firstofdiv,
  Signupimage,
  ParaforSingup,
  Headingforseconpart,
  Twilemonthdiv,
} from './styledComponents'

import './index.css'

class Payment extends Component {
  state = {
    total: '₹179',
    subscription: '-18,321',
    tweilemonth: true,
    sixmonth: false,
    threemonth: false,
  }

  onchang12 = () => {
    this.setState({
      total: '₹179',
      subscription: '-18,321',
      tweilemonth: true,
      sixmonth: false,
      threemonth: false,
    })
  }

  onchang6 = () => {
    this.setState({
      total: '₹149',
      subscription: '-18,351',
      tweilemonth: false,
      sixmonth: true,
      threemonth: false,
    })
  }

  onchange3 = () => {
    this.setState({
      total: '₹99',
      subscription: '-18,401',
      tweilemonth: false,
      sixmonth: false,
      threemonth: true,
    })
  }

  render() {
    const {total, subscription, tweilemonth, sixmonth, threemonth} = this.state
    return (
      <BgMainContainer>
        <FirstPart>
          <BigHeadeingEl>
            Access curated courses worth ₹
            <span className="spanelfor18000"> 18,500 </span> at just
            <span className="sapnelfor99"> ₹99 </span>per year!
          </BigHeadeingEl>
          <UnorderedList>
            <List>
              <ImageElFirstpart
                alt="icon_img"
                src="https://res.cloudinary.com/divg06uwj/image/upload/v1684292018/Icon_sypkym.svg"
              />
              <ParaElFirstPart>
                <span className="sapnelfor99">100+ </span>Job relevent courses
              </ParaElFirstPart>
            </List>
            <List>
              <ImageElFirstpart
                alt="icon_img"
                src="https://res.cloudinary.com/divg06uwj/image/upload/v1684293158/Icon_1_zwuajb.svg"
              />
              <ParaElFirstPart>
                <span className="sapnelfor99">20,000+ </span> Hourse of content
              </ParaElFirstPart>
            </List>
            <List>
              <ImageElFirstpart
                alt="icon_img"
                src="https://res.cloudinary.com/divg06uwj/image/upload/v1684293782/Icon_4_hw0otl.svg"
              />
              <ParaElFirstPart>
                <span className="sapnelfor99">Exclusive </span>Weninar access
              </ParaElFirstPart>
            </List>
            <List>
              <ImageElFirstpart
                alt="icon_img"
                src="https://res.cloudinary.com/divg06uwj/image/upload/v1684322927/Icon_5_lmd2av.svg"
              />
              <ParaElFirstPart>
                Scholership worth
                <span className="sapnEl"> ₹94,000</span>
              </ParaElFirstPart>
            </List>
            <List>
              <ImageElFirstpart
                alt="icon_img"
                src="https://res.cloudinary.com/divg06uwj/image/upload/v1684323347/Icon_6_owxrqg.svg"
              />
              <ParaElFirstPart>
                <span className="sapnelfor99">Add Free </span>lerning experience
              </ParaElFirstPart>
            </List>
          </UnorderedList>
        </FirstPart>
        <SecondPart>
          <Firstofdiv>
            <div className="signup">
              <Signupimage src="https://res.cloudinary.com/divg06uwj/image/upload/v1684329401/Icon_1_cmnp9k.svg" />
              <ParaforSingup>Signup</ParaforSingup>
            </div>
            <div className="signup">
              <Signupimage src="https://res.cloudinary.com/divg06uwj/image/upload/v1684329834/Icon_1_1_t4joox.svg" />
              <ParaforSingup>Subscribe</ParaforSingup>
            </div>
          </Firstofdiv>
          <Headingforseconpart>
            Select your subscription plan
          </Headingforseconpart>
          <Twilemonthdiv
            oncli12={tweilemonth}
            value={179}
            onClick={this.onchang12}
          >
            <div className="fist_div">
              <div className="recondiv">
                <p>Recomended</p>
              </div>
              <div className="imgesdiv">
                <img
                  src={
                    tweilemonth
                      ? 'https://res.cloudinary.com/divg06uwj/image/upload/v1684339197/Vector_s8kjcl.png'
                      : 'https://res.cloudinary.com/divg06uwj/image/upload/v1684338960/Vector_htobhv.svg'
                  }
                  alt="imag"
                />
                <p>12 Moth Subscription</p>
              </div>
            </div>
            <div className="second_div">
              <p className="fist_para">
                Total<span>₹179</span>
              </p>
              <p className="seon_para">
                ₹15<span>/mo</span>
              </p>
            </div>
          </Twilemonthdiv>
          <Twilemonthdiv value={149} oncli12={sixmonth} onClick={this.onchang6}>
            <div className="sist_div">
              <img
                src={
                  sixmonth
                    ? 'https://res.cloudinary.com/divg06uwj/image/upload/v1684339197/Vector_s8kjcl.png'
                    : 'https://res.cloudinary.com/divg06uwj/image/upload/v1684338960/Vector_htobhv.svg'
                }
                alt="imag"
                className="imgageof3"
              />
              <p>6 Moth Subscription</p>
            </div>
            <div className="second_div">
              <p className="fist_para">
                Total<span>₹149</span>
              </p>
              <p className="seon_para">
                ₹25<span>/mo</span>
              </p>
            </div>
          </Twilemonthdiv>
          <Twilemonthdiv
            value={99}
            oncli12={threemonth}
            onClick={this.onchange3}
          >
            <div className="sist_div">
              <img
                src={
                  threemonth
                    ? 'https://res.cloudinary.com/divg06uwj/image/upload/v1684339197/Vector_s8kjcl.png'
                    : 'https://res.cloudinary.com/divg06uwj/image/upload/v1684338960/Vector_htobhv.svg'
                }
                alt="imag"
                className="imgageof3"
              />
              <p>3 Moth Subscription</p>
            </div>
            <div className="second_div">
              <p className="fist_para">
                Total<span>₹99</span>
              </p>
              <p className="seon_para">
                ₹33<span>/mo</span>
              </p>
            </div>
          </Twilemonthdiv>
          <div className="sunfee">
            <p>Subscriotion Fee</p>
            <p>18,000</p>
          </div>
          <div className="sun_container">
            <div>
              <p className="can">Limited time offer</p>
              <div className="inner_div_foot">
                <img
                  src="https://res.cloudinary.com/divg06uwj/image/upload/v1684343629/Vector_1_jjt7vh.svg"
                  alt="imag"
                />
                <p>offer valid.....23 March</p>
              </div>
            </div>
            <div>
              <p>{subscription}</p>
            </div>
          </div>
          <div className="totaldiv">
            <p className="totaldivparaone">
              Total<span className="totaldivspanone">(Incl.of 18% GST )</span>
            </p>
            <p className="totaldivparatwo">{total}</p>
          </div>
          <div className="btndiv">
            <button type="button" className="btnone">
              CANCEL
            </button>
            <button type="button" className="btntwo">
              PROCEED TO PAY
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/divg06uwj/image/upload/v1684373301/Frame_12537_cwsi91.png"
            alt="img"
            className="last_img"
          />
        </SecondPart>
      </BgMainContainer>
    )
  }
}
export default Payment
