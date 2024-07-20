import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>|Sidebar</Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 80vh;
  width: 250px;
  background-color: aqua;
`;
