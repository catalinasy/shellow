import React from "react";
import styled from "styled-components";

const Root = styled.div`
  height: 20vh;
  display: flex;
  justify-content: flex-end;
  background: #f5f0d9;
  align-items: center;
  padding: 0 10rem;
  color: #f5d64e;
`;

const Title = styled.div`
  font-size: 4rem;
  font-family: "Notable", sans-serif;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: #d9a203;
`;

const Link = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: white;
  border: solid #f49136 2px;
  border-radius: 4px;
  padding: 0.5rem;
  background: #f49136;
  text-decoration: none;

`;


const Header = () => {
  return (
    <Root>
      <Link target={'_blank'} href={'https://forms.gle/AU8BNDPnu9W73o1y8'}>Sumar un negocio</Link>
      <Title>
        Shellow.
        <Text>El consumo tambien es politico</Text>
      </Title>
    </Root>
  );
};

export default Header;
