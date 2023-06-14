import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  LoginField,
  FormContainer,
  ContainerButton,
} from "./style";
import Button from "../../common/Button";
import { api } from '../../services/api';
import { setLocal } from '../../services/localStorage';

export function Login() {

  const [signupActive, setSignupActive] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  async function signin() {
    await api.post('/auth/signin', {
      username: username,
      password: password
    }).then((response) => {
      setLocal('user', response.data.username);
      setLocal('userId', response.data.id);
      setLocal('cart', []);
      alert('Bem vindo, ' + response.data.username);
      window.location.href = '/';
    }).catch((err) => {
      console.log(err);
      alert('Email ou senha inválidos 😢');
    })
  }

  async function signup() {
    let idUser = '';
    let idAddress = '';
    await api.post('/auth/signup', {
      username: username,
      email: email,
      password: password,
      role: ["user"],
    }).then((response) => {
      const id = response.data.message;
      let index = id.indexOf('-');
      idUser = id.substring(0, index).trim(' ');
    }).catch((err) => {
      console.log(err);
      alert('Erro ao cadastrar 😢')
    })

    await api.post('/enderecos', {
        cep: "11111111",
        rua: "-",
        bairro: "-",
        cidade: "-",
        numero: 0,
        complemento: "-",
        uf: "NN",
    }).then(response => {
      idAddress = response.data.idEndereco;
    }).catch(err => {
      console.log(err);
    })

    await api.post('/clientes', {
      nomeCompleto: username,
      email: email,
      senha: password,
      cpf: cpf,
      telefone: telefone,
      dataNascimento: dataNascimento,
      user: {
        id: idUser,
      },
      endereco: {
        idEndereco: idAddress,
      }
    }).then((response) => {
      alert('Cadastrado com sucesso 🙂');
      window.location.reload();
    }).catch((err) => {
      console.log(err);
      alert('Erro ao cadastrar 😢');
    })
  }

  return (
    <>
      <Container>
        <BoxContainer>

          <TitleContainer>
            <AiOutlineLogin className="icon" />
            {signupActive ? 
              <h2>Cadastro</h2> : 
              <h2>Página de Login.</h2>
            }
          </TitleContainer>

          <ContentContainer>
            <FormContainer>

              <LoginField active={signupActive}>
                <span>Digite seu e-mail:</span>
                <input 
                  type="text" 
                  placeholder="Seu e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={30}
                />
              </LoginField>

              <LoginField active={true}>
                <span>Digite seu nome:</span>
                <input 
                  type="text"
                  placeholder="Seu nome" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={25}
                />
              </LoginField>

              <LoginField active={true}>
                <span>Digite sua senha:</span>
                <input 
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={12}
                />
              </LoginField>

              <LoginField active={signupActive}>
                <span>Digite seu cpf:</span>
                <input 
                  type="text" 
                  placeholder="Seu cpf" 
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  maxLength={11}
                />
              </LoginField>

              <LoginField active={signupActive}>
                <span>Digite seu telefone:</span>
                <input 
                  type="tel" 
                  placeholder="Seu telefone" 
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  maxLength={11}
                />
              </LoginField>

              <LoginField active={signupActive}>
                <span>Digite sua data de nascimento:</span>
                <input 
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </LoginField>
              
              <ContainerButton>
                <Button 
                  text="SignIn" 
                  color="#000" 
                  background="#fff"
                  active={!signupActive}
                  onClick={() => signin()} 
                ></Button>
                <Button 
                  text="SignUp" 
                  color="#000" 
                  background="#fff"
                  active={signupActive}
                  onClick={() => signup()} 
                ></Button>
                {signupActive ? 
                  <p onClick={() => {setSignupActive(false)}}>Voltar para o login</p> : 
                  <p onClick={() => {setSignupActive(true)}}>Não tem uma conta? Clique aqui para se cadastrar</p>
                }
              </ContainerButton>
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}

