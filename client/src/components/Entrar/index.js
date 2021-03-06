import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBtnWrap,
  FormRoute,
  A,
} from "./EntrarElements";

import SimpleModal from "./modalPassword";

const Entrar = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Quintero</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Ingreso al sistema de la corporación</FormH1>
              <FormLabel htmlFor="email">Rut</FormLabel>
              <FormInput type="email" id="email" placeholder="Ej: 13.450.233-2" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput type="password" id="password" placeholder ="minimo 4 digitos y maximo 8" required />
              <FormLabel style={{ textAlign:"center"}}>
                ¿Has olvidado tu Contraseña?  
                <SimpleModal />
              </FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="../perfil">Afiliados</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="../admin">Directiva</FormRoute>
              </FormBtnWrap>
               {/* <FormButton type="submit">Continue</FormButton>  */}
              {/*<Text>Forgot password?</Text>}*/}
            </Form>
        </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Entrar;
