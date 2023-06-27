import React from "react";
import { Container, ProcessBox, Title } from "./style";
import entradaicon from "../../assets/img/entradaicon.png";
import saidaicon from "../../assets/img/saidaicon.png";
import arquivadosicon from "../../assets/img/arquivadosicon.png";

const HomePage = () => {

  // const [eventos, setEventos] = useState([]);
  // const [user, setUser] = useState([]);
  // const [eventoOrg, setEventoOrg] = useState([])
  // const history = useNavigate();

  // const linkAddEvento = () => {
  //     history('/addevento');
  //     window.location.reload();
  // }

  // useEffect(() => { 
  //     (async () => {
  //       const response = await http.get(`/readeventos`);
  //       setEventos(response.data);
  //       const respo = await http.get(`/user/${getId()}`);
  //       setUser(respo.data);
  //     })();
  //   }, []);

  //   useEffect(() => { 
  //     (async () => {
  //       const response = await http.get(`/readeventofromorganizador/${getId()}`);
  //       setEventoOrg(response.data);
  //     })();
  //   }, []);




  return (
    // <Container>
    //     {/* <ProcessBox></ProcessBox> */}
    //     {/* <h2>TESTE</h2> */}
    //     {/* <Box></Box> */}
    //     {/* {user.isOrganizador ? <div style={{width: '100%'}}>
    //         {eventoOrg.map((item, index) => {
    //         return(
    //             <Eventos data={item} key={index}/>
    //         )
    //     })}
    //     </div> : user.isCliente ?
    //     <div style={{width: '100%'}}>
    //               {eventos.map((item, index) => {
    //         return(
    //             <Eventos data={item} key={index}/>
    //         )
    //     })}
    //         </div> : null} */}

    //     {/* {user.isOrganizador ?  <button onClick={linkAddEvento}>
    //         Adicionar Evento
    //     </button> : null} */}
    //     {/* <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'space-between' }}> */}
    //         <ProcessBox></ProcessBox>
    //         <ProcessBox></ProcessBox>
    //         <ProcessBox></ProcessBox>
    //     {/* </div> */}
    // </Container>
    <Container>
      <ProcessBox backgroundImg={entradaicon}>
        <Title>ENTRADA</Title>
      </ProcessBox>
      <ProcessBox backgroundImg={saidaicon}>
        <Title>SAÍDA</Title>
      </ProcessBox>
      <ProcessBox backgroundImg={arquivadosicon}>
        <Title>ARQUIVADOS</Title>
      </ProcessBox>
    </Container>



  )
}

export default HomePage;