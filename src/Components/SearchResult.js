import React, {useState} from "react";
import Card from "./Card";
import styled from 'styled-components';
import {DetailBusiness} from './DetailBusiness'
import Spinner from '../styles/spinner';



const Root = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;
    padding-top: 1rem;
    min-height: 50vh;
    min-width: 100vw;
`;

const SearchResult = ({ results}) => {

  const [openModal, setOpenModal] = useState(false);
  const [business, setBusiness] = useState(null);
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <Root>
      {openModal && <DetailBusiness setOpenModal={setOpenModal} business={business}/>}
      {!results && <Spinner/>}
      {results?.length ? results.map((r) => (
        <Card key={r.comercio} data={r} handleOpenModal={handleOpenModal} setBusiness={setBusiness}/>
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      )) :( results &&  <div> No hay resultados 😭 </div>)}
    </Root>
  );
};

export default SearchResult;
