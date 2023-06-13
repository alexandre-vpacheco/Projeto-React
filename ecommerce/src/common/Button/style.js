import styled from 'styled-components';

export const ContainerButton = styled.button`
    background-color: ${(props) => {return props.background}};
    color: ${(props) => {return props.color}};
    width: 100px;
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