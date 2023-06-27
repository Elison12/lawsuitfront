import React from "react";
import {Container, IconButton, Title} from "./style";
import { useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import http from "../../services/APIhttp.js";
import { logout } from "../../services/auth.js";

const TopBar = () => {

    const history = useHistory();

    const desloga = () => {
        logout();
        http.defaults.headers.Authorization = undefined;
        history.goBack("/");
        window.location.reload(true)
    }


    return (
        <Container>
                <Title>Área do servidor</Title>
                <IconButton onClick={desloga}>
                    <LogoutIcon name='magnify' size={28} color='#1c408a' />
                </IconButton>
        </Container>
    )
}

export default TopBar;