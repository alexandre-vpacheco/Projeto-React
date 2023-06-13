import { ContainerButton } from './style.js';

function Button(props) {

    return (
        <ContainerButton onClick={props.onClick} color={props.color} background={props.background} active={props.active}>
            {props.text}
        </ContainerButton>
    )
}

export default Button;