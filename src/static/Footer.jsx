import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <MainFoot>
          <Title>Discover</Title>
          <nav>Chicago</nav>
          <nav>Los Angles</nav>
          <nav>Miami</nav>
          <nav>Nwe York</nav>
        </MainFoot>
        <MainFoot>
          <Title>Discover</Title>
          <nav>Chicago</nav>
          <nav>Los Angles</nav>
          <nav>Miami</nav>
          <nav>Nwe York</nav>
        </MainFoot>
        <MainFoot>
          <Title>Discover</Title>
          <nav>Chicago</nav>
          <nav>Los Angles</nav>
          <nav>Miami</nav>
          <nav>Nwe York</nav>
        </MainFoot>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const MainFoot = styled.div`
  nav {
    margin: 10px 0px;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
`;
