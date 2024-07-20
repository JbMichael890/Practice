import React from "react";
import styled from "styled-components";
import {
  AiFillAccountBook,
  AiFillAlert,
  AiFillApple,
  AiFillBank,
} from "react-icons/ai";

const HomeTwo = () => {
  const cardsInfo = [
    {
      icon: <AiFillAccountBook />,
      title: "Card One ",
      content: " this is the first card",
    },
    {
      icon: <AiFillAlert />,
      title: "Card Two ",
      content: " this is the Second card",
    },
    {
      icon: <AiFillApple />,
      title: "Card Three ",
      content: " this is the Thirs card",
    },
    {
      icon: <AiFillBank />,
      title: "Card Four ",
      content: " this is the Forth card",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <h1>Easy Step For your care</h1>

        <CardHolder>
          {cardsInfo.map((data, i) => (
            <Card key={i}>
              <div> {data.icon} </div>
              <h3>Title</h3>
              <p>fghjkl</p>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default HomeTwo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
      h1{
    font-size: 31px;
  }
    }
`;
const Card = styled.div`
  height: 200px;
  width: 200px;
  background-color: lightblue;
  margin: 10px;
`;
const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
