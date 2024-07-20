import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Medic.</Logo>
          <Navagations>
            <nav>Home</nav>
            <nav>About</nav>
            <nav>Doctors</nav>
            <nav>Services</nav>
            <nav>Departnment</nav>
          </Navagations>
          <Button>Contact Us</Button>

          <SideNav onClick={handleToggle}>
            <VscThreeBars />
          </SideNav>
        </Wrapper>
      </Container>

      <div>{toggle ? <SideBar /> : null}</div>
    </div>
  );
};

export default Header;

const Container = styled.div`
  margin-bottom: 70px;
  height: 70px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  background-color: yellowgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div``;
const Button = styled.button`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navagations = styled.div`
  display: flex;
  align-items: center;
  nav {
    margin: 0px 15px;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;
