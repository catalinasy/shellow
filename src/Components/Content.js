import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import styled from "styled-components";
import useGetData from "../hooks/useGetData";
import Spinner from "../styles/spinner";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Content = () => {
  const data = useGetData();
  const [filters, setFilters] = useState({
    queryString: null,
    prov: null,
  });

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let rawData;
    if (!filters || (!filters.queryString && !filters.prov))
      setFilteredData(data);
    else if (filters.prov && !filters.queryString) {
      rawData = data.filter((d) =>
        d.Provincia.toLowerCase().includes(filters.prov.toLowerCase())
      );
      setFilteredData(rawData);
    } else if (!filters.prov && filters.queryString) {
      rawData = data.filter(
        (d) =>
          d.comercio.toLowerCase().includes(filters.queryString) ||
          d.categoria.toLowerCase().includes(filters.queryString)
      );
      setFilteredData(rawData);
    } else if (filters.prov && filters.queryString) {
      rawData = data.filter(
        (d) =>
          d.Provincia.toLowerCase().includes(filters.prov.toLowerCase()) &&
          (d.comercio.toLowerCase().includes(filters.queryString) ||
            d.categoria.toLowerCase().includes(filters.queryString))
      );
      setFilteredData(rawData);
    }
  }, [data, filters]);

  return (
    <>
      <Root>
        {data.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <SearchBar setFilter={setFilters} />
            <SearchResult key={filteredData} results={filteredData} />
          </>
        )}
      </Root>
    </>
  );
};

export default Content;
