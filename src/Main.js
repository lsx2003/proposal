import styled from "styled-components";
import logo from "./image/logo192.png";
import logo2 from "./image/logo2.png";

import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";
import image7 from "./image/image7.png";
import image8 from "./image/image8.png";
import image9 from "./image/image9.png";
import image10 from "./image/image10.png";
import image11 from "./image/image11.png";
import image12 from "./image/image12.png";
import image13 from "./image/image13.png";
import image14 from "./image/image14.png";
import image15 from "./image/image15.png";
import image16 from "./image/image16.png";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

function Main() {
  return (
    <>
      <Container>
        <PicturContatiner>
          <LogoContainer>
            <Logo src={logo}></Logo>
            <Logo2 src={logo2}></Logo2>
          </LogoContainer>
          <Picture src={image1}></Picture>
          <Picture src={image2}></Picture>
          <Picture src={image3}></Picture>
          <Picture src={image4}></Picture>
          <Picture src={image5}></Picture>
          <Picture src={image6}></Picture>
          <Picture src={image7}></Picture>
          <Picture src={image8}></Picture>
          <Picture src={image9}></Picture>
          <Picture src={image10}></Picture>
          <Picture src={image11}></Picture>
          <Picture src={image12}></Picture>
          <Picture src={image13}></Picture>
          <Picture src={image14}></Picture>
          <Picture src={image15}></Picture>
          <Picture src={image16}></Picture>
        </PicturContatiner>
        <ButtonContainer>
          <a href="tel:010-3871-0124">
            <BsFillTelephoneFill className="call"></BsFillTelephoneFill>
          </a>

          <BsFillArrowUpCircleFill
            className="arrow"
            onClick={scrollHandler}
          ></BsFillArrowUpCircleFill>
        </ButtonContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  background: white;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 80px;
`;

const Logo = styled.img`
  display: flex;
  justify-content: center;
  width: 140px;
  height: 80px;
`;

const Logo2 = styled.img`
  display: flex;
  width: 140px;
  height: 80px;
  justify-content: center;
  padding: 25px 15px 15px 15px;
`;

const PicturContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: fixed;
  margin-left: 15px;
  width: 30px;
  height: 100px;
  right: 5%;
  bottom: 2vh;
`;

export default Main;
