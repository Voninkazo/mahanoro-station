import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
font-weight: normal;
font-size: 36px;
line-height: 43px;
text-transform: uppercase;
color: #FFFFFF;
padding: 28px 44px;
background: #0F0E17;
cursor:pointer;
display: inline-block;
width: 413px;
`;

export const CarLogo = styled.img`
    width: 127px;
    height: 97px;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    gap: 56px;
    justify-content: center;
    align-items: center;
    padding-top: 127px;
    padding-bottom: 181px;
`;

export const ButtonContainer = styled.div`
display: grid;
grid-template-columns : repeat(auto-fill, minmax(430px, 1fr));
column-gap: 2rem;
row-gap: 1rem;
padding: 0;
text-align: start;
`;


export const Title = styled.h2`
font-weight: bold;
font-size: 64px;
line-height: 76px;
color: #000000;

`;
