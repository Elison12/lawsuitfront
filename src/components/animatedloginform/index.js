import React, { useContext, useState } from "react";
import { BackgroundBox, Image, Form, Input, Title, Button, Box1, Box2, Link, Seletor } from './style';
import { Context } from "../../context/contextAPI";
import { getId, idUser, login, logout } from "../../services/auth";
import pgelogo from "../../assets/img/pgelogo.jpg";
import logosse from "../../assets/img/logose.jpg";
import http from "../../services/APIhttp";
import { useHistory } from "react-router-dom";

function FormComponent() {
    const [tipoUser, setTipoUser] = useState(true);

    //LOGIN
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //REGISTER
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');


    const history = useHistory();

    const registerUser = (e) => {
        e.preventDefault();
        const body = {
            username: userName,
            name: nome,
            email: email,
            password: password,
            isProcurador: tipoUser
        }
        console.log(body)

        if (body.userName !== "" && body.email !== '' && body.password !== '') {
            http
                .post('/user', body)
                .then((res) => {
                    console.log(res)
                    console.log('go')
                    window.location.reload()
                })
                .catch((err) => console.log(err.response))
        } else {
            console.log('erro')
        }
    }
    const loginUser = (e) => {

        e.preventDefault();
        const body = {
            username: userName,
            password: password
        }
        console.log(body)
        if (body.username !== "" && body.password !== '') {
            http
                .post('/login', body)
                .then((res) => {
                    logout()
                    console.log(res)
                    console.log('go')
                    login(res.data.token);
                    idUser(res.data._id);
                    console.log(getId())
                    history.push('/home');
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        } else {
            console.log('erro')
        }
    }
    return (
        <>
            {" "}
            <BackgroundBox clicked={click}>
                {/* <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate> */}

                <Form className="signin" onSubmit={loginUser}>

                    <Title>Login</Title>
                    <Input
                        value={userName} onChange={e => setUserName(e.target.value)}
                        name="username"
                        id="usernameId"
                        placeholder="Username"
                    />
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="passwordId"
                        placeholder="Senha"
                    />
                    <Link href="#" onClick={handleClick}>
                        Ainda não tem uma conta
                    </Link>
                    <Button type="submit">Entrar</Button>
                </Form>

                <Form className="signup" onSubmit={registerUser}>
                    <Title>Cadastrar</Title>
                    <Input
                        onChange={e => setNome(e.target.value)}
                        value={nome}
                        type="text"
                        name="name"
                        id="nameId"
                        placeholder="Name"
                    />
                    <Input
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        name="username"
                        id="usernameId"
                        placeholder="Username"
                    />
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email"
                        id="emailId"
                        placeholder="Email"
                    />
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        id="passwordId"
                        placeholder="Senha"
                    />
                    <Seletor>
                        <h2>Tipo de Usuário</h2>
                        <select
                            value={tipoUser}
                            onChange={e => setTipoUser(e.target.value)}
                        >
                            {/* <option value={0}>Selecione</option> */}
                            <option value={true}>Procurador</option>
                            <option value={false}>Acessor</option>
                        </select>
                    </Seletor>
                    <Link href="#" onClick={handleClick}>
                        Já tenho uma conta
                    </Link>
                    <Button type="submit" >Registrar</Button>
                </Form>
                {/* <Text className="text1" clicked={click}>
                    Don't have an account?
                    <br />
                </Text> */}
                <Image src={logosse} clicked={click}></Image>
                <Image src={logosse} clicked={click}></Image>
                <Image src={pgelogo} clicked={click}></Image>
                <Image src={pgelogo} clicked={click}></Image>

                {/* 
                <Text className="text2" clicked={click}>
                    Insira seus dados para se cadastar !
                    <br />
                </Text> */}

                <Box1 clicked={click} />
                <Box2 clicked={click} />
            </BackgroundBox>
        </>
    );
}

export default FormComponent;