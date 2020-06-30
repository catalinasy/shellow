import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/close.svg";

const Root = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  
`;

const Modal = styled.div`
  border: solid 1px gray;
  border-radius: 10px;
  background: white;
  height: 50vh;
  width: 50vw;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  height: 80%;
`;

const Title = styled(Text)`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Image = styled.img`
  height: auto;
  border-radius: 300px;
  margin: 1rem;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 20vh;
  right: 23vw;
  align-self: flex-end;
  height: 1rem;
`;

const Link = styled.a``;

const getUser = (instagram) => {
  const algo = instagram.split("/");
  return `@${algo[3]}`;
};

export const DetailBusiness = ({ setOpenModal, business }) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Root>
      <Modal>
        <Image src={business.imageUrl} />
        <Content>
          <Title>{business.comercio}</Title>
          <Text>Categoria: {business.categoria}</Text>
          <Link href={business.instagram} target={"_blank"}>
            {getUser(business.instagram)}
          </Link>
  <Link href={business.web} target={'_blank'}>{business.web}</Link>
        </Content>
        <CloseIcon onClick={handleCloseModal}> cerrar</CloseIcon>
      </Modal>
    </Root>
  );
};
