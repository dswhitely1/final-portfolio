import React from 'react';
import { H1, H3 } from '../../styles/typography';
import { Container, Header as HeaderTitle, SubHeader } from './header.styles';

function Header() {
    return (
        <Container>
            <HeaderTitle>
                <H1>Donald Whitely</H1>
            </HeaderTitle>
            <SubHeader>
                <H3>Full Stack Web Developer</H3>
            </SubHeader>
        </Container>
    )
}

export default Header;
