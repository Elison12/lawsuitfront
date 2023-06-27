import React from "react";
import TopBar from "../../components/topbar";
import HomePage from "../../components/homepage"
import { Grid, Title } from "./style";


const Home = () => {
    return(
         <Grid>
            <TopBar>
                <Title>Área do Servidor</Title>
            </TopBar>
            <HomePage />
         </Grid>
    )
}

export default Home;