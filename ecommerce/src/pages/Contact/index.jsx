import { useLocation, Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  NameContainer,
  EmailContainer,
  MessageContainer,
  SendMsgBt,
  FormContainer,
} from "./style";

export function Contact() {
  const location = useLocation();

  return (
    <>
      <Container>
        <BoxContainer>
          <TitleContainer>
              <AiOutlineMail className="icon" />
            <h2>Entre em contato a gente. :)</h2>
          </TitleContainer>
          <ContentContainer>
            <FormContainer>
              <NameContainer>
                <span>Nome:    </span>
                <textarea type="text" placeholder="Seu nome" />
   
              </NameContainer>
              <EmailContainer>
                <span>E-mail: </span>
                <textarea type="text" placeholder="Seu e-mail" />
              </EmailContainer>
              <MessageContainer>
                <span>Mensagem (até 1000 caracteres): <br></br></span>
                <textarea type="text" placeholder="Escreva sua mensagem aqui..." maxlength="1000" spellcheck="true"/>
              </MessageContainer>


              <SendMsgBt className="red-bt" isActive={location.pathname === "/"}>Enviar mensagem</SendMsgBt>
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}