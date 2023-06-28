import React from "react";
import TopBar from "../../components/topbar";
import CaixadeSaida from "../../components/caixadesaida"
import { Grid, Title } from "./style";


const Saida = () => {
    return (
        <Grid>
            <TopBar>
                <Title>Caixa de entrada</Title>
            </TopBar>
            <CaixadeSaida />
        </Grid>
    )
}

export default Saida;