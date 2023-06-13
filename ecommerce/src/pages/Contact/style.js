import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100vh;
  //background-color: 'white';
`;

export const BoxContainer = styled.div`
    background-color: rgba(0, 0, 0, .3);
    max-height:700px;
    max-width: 400px;
    margin: 0px auto 0px auto;
    padding: 40px 50px;
    border-radius: 20px;
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
margin-right: 110px;
text-align: left;
width: 100%;
    input {
    height: 25px;
    width: 400px;
    position: relative;
      ::placeholder {
        position: absolute;
        top: 0;
        padding: 7px 0 0;
      }
    }
    
`

export const EmailContainer = styled.div`
margin-right: 110px;
text-align: left;
width: 100%;
    input {
    height: 25px;
    width: 400px;
    position: relative;
      ::placeholder {
        position: absolute;
        top: 0;
        padding: 7px 0 0;
      }
    }

`;
export const MessageContainer = styled.div`
    margin-right: 110px;
    text-align: left;
    width: 100%;
    vertical-align: top-bottom;
        input {        
        height: 200px;
        width: 400px;
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
    border-radius: 70px;

`;