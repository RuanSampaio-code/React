import {ButtonContainer} from './style'

const button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick= {onClick}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default button;
  