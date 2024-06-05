
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconeHeader from "../IconesHeader";
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconeHeader />
        </HeaderContainer>
    );
};

export default Header;