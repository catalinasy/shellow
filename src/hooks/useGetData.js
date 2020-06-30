import { useState, useEffect } from "react";
import Tabletop from "tabletop";

const useGetData = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        Tabletop.init({
            key: '18g4VCfed4bpL7xRUx6NE3JWh_-1q5_IvL74E3a_JKp4',
            callback: googleData => { setData(googleData)},
            simpleSheet: true,
          });
    }, [])
  
  return data;
};

export default useGetData;
