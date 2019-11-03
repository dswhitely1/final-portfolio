import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavBar, Title, MenuItems } from './navigation.styles';
import { H6 } from '../../styles/typography';
import './navigation.scss';

function Navigation() {
    return (
        <NavBar>
            <Title>
                <H6>Digital Solutions By Don</H6>
            </Title>
            <MenuItems>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </MenuItems>
        </NavBar>
    )
}

export default Navigation;