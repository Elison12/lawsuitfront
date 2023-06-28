import { React, useEffect, useState } from "react";
import { Container } from "./style";
import { getId } from "../../services/auth";
import http from "../../services/APIhttp";
import Processo from "../processo";

const CaixadeEntrada = () => {

  const [entrada, setEntrada] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/readentrada`);
      setEntrada(response.data);
      const respo = await http.get(`/user/${getId()}`);
      console.log(respo);
      setUser(respo.data);
    })
  }, []);


  return (
    <Container>
      <div style={{ width: '100%' }}>
        {entrada.map((item, index) => {
          return (
            <Processo data={item} key={index} />
          )
        })}
      </div>  
    </Container>
  )
}

export default CaixadeEntrada;