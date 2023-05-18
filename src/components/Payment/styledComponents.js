import styled from 'styled-components'

export const BgMainContainer = styled.div`
  background-image: url('https://res.cloudinary.com/divg06uwj/image/upload/v1684288358/Back_Ground_ejs0ui.png');
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 60px;
  gap: 100px;
`

export const FirstPart = styled.div`
  margin-top: -30px;
`

export const BigHeadeingEl = styled.h1`
  width: 600px;
  height: 70px;
  letter-spacing: -0.01em;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  color: #ffff;
`
export const UnorderedList = styled.ul`
  padding: 10px;
`

export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  margin-top: 25px;
`

export const ParaElFirstPart = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 100%;
  /* identical to box height, or 32px */

  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #ffff;
`

export const ImageElFirstpart = styled.img`
  height: 55px;
  width: 55px;
  margin-right: 40px;
`
export const SecondPart = styled.div`
  background-color: #ffff;
  height: 760px;
  width: 500px;
  border-radius: 10px;
`
export const Firstofdiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
`
export const Signupimage = styled.img`
  height: 40px;
  width: 40px;
`
export const ParaforSingup = styled.p`
  font-size: 15px;
`
export const Headingforseconpart = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #3c4852;
`
export const Twilemonthdiv = styled.div`
  background-color: ${props => (props.oncli12 ? '#D7EDDD' : '#ffffff')};
  border: ${props =>
    props.oncli12 ? '2px solid #47BA68' : '2px solid #E7E7E7'};
  border-radius: 4px;
  margin: 15px 10px;

  padding: 25px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  cursor: pointer;
`

export const Sixmothdiv = styled.div``

export const Threemonthdiv = styled.div``

export const Input12month = styled.input``

export const LabelEl = styled.label``
