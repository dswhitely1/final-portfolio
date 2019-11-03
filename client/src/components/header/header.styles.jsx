import styled, {keyframes} from 'styled-components';
import {bounceInLeft, bounceInRight} from 'react-animations';
import picture from '../../assests/kevin.jpg'

const bounceLeftAnimation = keyframes`${bounceInLeft}`;
const bounceRightAnimation = keyframes`${bounceInRight}`;

export const Container = styled.header`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    background: linear-gradient(90deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1)), url(${picture});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: #f4f7f5;
`;

export const Header = styled.div`
    animation: 3s ${bounceLeftAnimation}
    margin-bottom: 1rem;
`;

export const SubHeader = styled.div`
    animation: 3s ${bounceRightAnimation}
`;