import React from "react";
import { Container } from "./style";
import FormComponent from "../../components/animatedloginform"

const Login  = () => {
    return(
        <Container>
            {/* <FormLogin /> */}
            <FormComponent />
        </Container>
    )
}

export default Login;