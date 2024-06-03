import { H1WithHover, StyledButton, StyledButtonWithHover } from "./components/styled/Button";
import { H1 } from "./components/styled/H1";
import './Practice.css'
const Practice = () => {
    return (
        <div className='app'>
            <H1 color='green'>Styled Component</H1>
            <H1 color='white'>Styled Component</H1>
            <H1WithHover color='red'>Hover Styled Component</H1WithHover>
            <div className='btn-box'>
                <StyledButton>Live</StyledButton>
                <StyledButton variant='primary'>Github</StyledButton>
            </div>
            <StyledButtonWithHover >Hover me</StyledButtonWithHover>
        </div>
    );
};

export default Practice;