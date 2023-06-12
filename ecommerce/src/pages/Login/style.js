import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: url("https://i.etsystatic.com/15771164/r/il/a5a362/2203536272/il_fullxfull.2203536272_fwpd.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position-y: center;
  `;

export const BoxContainer = styled.div`
    background-color: rgba(0, 0, 0, .5);
    max-width: 400px;
    margin: 0px auto 100px auto;
    padding: 100px 0;
    height: auto ;
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
    text-align:left;
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

export const SenhaContainer = styled.div`
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
    //margin-bottom: ;
    margin-left: 10px;

`;