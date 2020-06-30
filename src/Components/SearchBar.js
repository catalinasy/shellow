import React, { useRef } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 50%;
  margin: 0 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Bar = styled.input`
  width: 40%;
  font-size: 1rem;
  padding: 0.5rem;
  border: solid black 1px;
  border-radius: 4px;
  margin: 0 1rem;
`;

const Select = styled.select`
  margin-left: 1rem;
  width: 30rem;
  padding: 0.5rem;
`;

const zonas = [
  "Ciudad de Buenos Aires",
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const SearchBar = ({ setFilter }) => {

  const queryString = useRef();

  const handleSearch = (e) => {
    setFilter((previousFilter) => ({...previousFilter, queryString: queryString.current.value}));
  };

  const handleSelect = (value) => {
    setFilter(previousFilter => ({...previousFilter, prov: value}))
  };

  return (
    <Root>
      <Bar
      ref={queryString}
        placeholder="Busca por rubro, barrio o nombre del comercio"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Select name={"provincias"} id={"provincia"} onChange={(e) => handleSelect(e.target.value)} >
        {zonas.map((z) => (
          <option key={z} value={z}>
            {z}
          </option>
        ))}
      </Select>
    </Root>
  );
};

export default SearchBar;
