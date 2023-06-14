import styled from 'styled-components';

export const ContainerButton = styled.button`
    justify-content: center; 
    background-color: ${(props) => {return props.background}};
    color: ${(props) => {return props.color}};
    width: ${(props) => {return props.width}};
    font-weight: bold;
    transition: .3s;
    display: ${(props) => {
        let display = '';
        props.active ? display = 'flex' : display = 'none';
        return display;
    }};

    &:hover {
        background-color: ${(props) => {return props.color}};
        color: ${(props) => {return props.background}};
        border-color: ${(props) => {return props.background}};
    }
`;