import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: url("https://assets-metrostyle.abs-cbn.com/prod/metro.style/media/assets-v2/12_december/31/william-ti-toy-room_desktop.jpg?ext=.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  padding-top: 100px; 
`;


export const BoxContainer = styled.div`
    background-color: rgba(255, 255, 255, .6);
    max-height:700px;
    max-width: 400px;
    margin: 0px auto 0px auto;
    padding: 40px 50px;
    border-radius: 20px;
`;
export const TitleContainer = styled.div`
  color:black;
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
color:black;
margin-right: 110px;
text-align: left;
width: 100%;
    textarea {
    height: 25px;
    width: 400px;
    position: relative;
    background-color:#fff;
    color:black;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    }
    
`

export const EmailContainer = styled.div`
color:black;
margin-right: 110px;
text-align: left;
width: 100%;
    textarea {
    height: 25px;
    width: 400px;
    position: relative;
    background-color:#fff;
    color:black;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    }

`;
export const MessageContainer = styled.div`
    margin-right: 110px;
    text-align: left;
    width: 100%;
    vertical-align: top-bottom;
    color:black;
    
        textarea {        
        height: 200px;
        width: 400px;
        background-color:#fff;
        color:black;
        font-family: 'Roboto', sans-serif;
        border-radius: 5px;
      
        }
        
`;

export const SendMsgBt = styled.button`
    margin: auto;
    margin-top: 0px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 70px;
    background-color: rgba(0, 0, 0, 1);
    color: aliceblue;

`;