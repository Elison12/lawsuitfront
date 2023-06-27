import React from "react";
import TopBar from "../../components/topbar";
import CaixadeEntrada from "../../components/caixadeentrada"
import { Grid, Title } from "./style";


const Entrada = () => {
    return (
        <Grid>
            <TopBar>
                <Title>Caixa de entrada</Title>
            </TopBar>
            <CaixadeEntrada />
        </Grid>
    )
}

export default Entrada;