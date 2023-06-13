import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: url("https://i.pinimg.com/originals/25/c4/55/25c455190acf7fa1911b29a03596ac74.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position-y: center;
background-color: rgba(0, 0, 0, .5);
`;

export const BoxContainer = styled.div`
    background-color: rgba(0, 0, 0, .5);
    max-width: 400px;
    margin: 0px auto 100px auto;
    padding: 50px 0;
    height: auto;
    border-radius: 15px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
    .icon {
      font-size: 21px;
    }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const NameContainer = styled.div`
text-align: left;
width: 100%;
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
`

export const EmailContainer = styled.div`
text-align: left;
width: 100%;
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
    
    margin-left: 10px;

`;