import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: url("https://assets-metrostyle.abs-cbn.com/prod/metro.style/media/assets-v2/12_december/31/william-ti-toy-room_desktop.jpg?ext=.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 100px 0;
`;

export const BoxContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  max-width: 400px;
  margin: 0px auto;
  padding: 100px 0;
  border-radius: 15px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align:left;
  margin-top: -80px;

  .icon {
    font-size: 21px;
  }
  
  h2 {
    text-shadow: 2px 2px #000;
    font-size: 25px;
    color: #fff;
  }

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  input {
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 5px;
    align-items: center;
    margin-top: 5px;
    background-color: #1a1c1a;
    color: #fff;
  }
`;

export const LoginField = styled.div`
  text-align: left;
  width: 100%;
  flex-direction: column;
  display: ${(props) => {
    let display = '';
    props.active ? display = 'flex' : display = 'none';
    return display;
  }};
    
  input {
    height: 25px;
    width: 300px;
    position: relative;
      ::placeholder {
        position: absolute;
        top: 0;
        padding: 7px 0 0;
    }
  }
  span {
    color: #fff;
  }

  #password {
    display: flex;
    align-items: center;
  }

  #icon {
    font-size: 20px;
    cursor: pointer;
    margin-left: 5px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    text-decoration: underline;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    margin: 0;
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
  }
`;

export const MessageContainer = styled.div`
    text-align: left;
    width: 100%;
    vertical-align: top-bottom;
        input {        
        height: 200px;
        width: 300px;
          ::placeholder {
            position: absolute;
            top: 0;
            bottom: 100;
            padding: 7px 0 0;
          }
        }
`;

export const SendMsgBt = styled.button`
margin: auto;
    margin-top: 0px;
    margin-right: 10px;
    //margin-bottom: ;
    margin-left: 10px;
`;