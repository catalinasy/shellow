import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  border-radius: 6px;
  padding: 1rem;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  &:hover {
    -webkit-box-shadow: 10px 10px 92px 0px rgba(191, 187, 191, 1);
    -moz-box-shadow: 10px 10px 92px 0px rgba(191, 187, 191, 1);
    box-shadow: 10px 10px 92px 0px rgba(191, 187, 191, 1);
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-weight: bold;
  color: #313236;
`;

const Image = styled.img`
  max-height: 12rem;
  border-radius: 5px;
`;

const Card = ({ data, handleOpenModal, setBusiness }) => {

  const handleClick = () => {
    setBusiness(data);
    handleOpenModal(true);
  }

  return (
    <Root onClick={handleClick}>
      <Image src={data.imageUrl} />
      <Title>{data.comercio}</Title>
    </Root>
  );
};

export default Card;
