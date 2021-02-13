import React from 'react';
import Logo from '../icons/logo.svg';

import Header from '../components/header';
import { Link } from 'react-router-dom';

function HeaderContainer() {
    return (
        <Header>
            <Link to="/">
                <Header.Group>
                    <Header.Logo src={Logo} alt="Logo" />
                    <Header.Title>Mahanoro station</Header.Title>
                </Header.Group>
            </Link>
            <Link to="/account">
                <Header.SubTitle>My account</Header.SubTitle>
            </Link>
        </Header>
    )
}

export default HeaderContainer
