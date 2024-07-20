import styled from "styled-components";
import imag from "../assets/download (9).jpeg";

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h1>We ensure the best health services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            laudantium ut in perspiciatis, illo aliquid voluptas placeat
            inventore. Quia, commodi. Saepe earum necessitatibus eos natus est!
            Alias sequi id voluptas.
          </p>
          <button>Start now</button>
        </TextDiv>
        <ImageDiv>
          <img src={imag} alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
  

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    text-align: center;
  }
 
`;
const TextDiv = styled.div`
  width: 500px;
 @media (max-width: 500px) {
      h1{
    font-size: 40px;
  }
    }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const ImageDiv = styled.div`
  img {
    width: 500px;
    object-fit: cover;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
