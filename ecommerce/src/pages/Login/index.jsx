import { useLocation, Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  NameContainer,
  SenhaContainer,
  FormContainer,
} from "./style";

export function Login() {
  const location = useLocation();

  return (
    <>
      <Container>
        <BoxContainer>

          <TitleContainer>
              <AiOutlineLogin className="icon" />
            <h2>Página de Login.</h2><br></br>
          </TitleContainer>

          <ContentContainer>
            <FormContainer>

              <NameContainer>
                <span>Digite seu nome de usuário ou e-mail:    </span>
                <input type="text" placeholder="Nome de usuário ou e-mail" />
              </NameContainer>

              <SenhaContainer>
                <span>Digite sua senha: </span>
                <input type="text" placeholder="Sua senha" />
              </SenhaContainer>
              
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}

