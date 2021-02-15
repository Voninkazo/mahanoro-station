import styled from 'styled-components';

export const Container = styled.div``;
export const Heading = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
gap:72px;
`;

export const Title = styled.h3`

`;

export const CarLogo = styled.img`

`;

export const Pane = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap:72px;
`;

export const Seats = styled.div`

`;

export const SeatsContainer = styled.ul`
display:grid;
grid-template-columns: repeat(4, 1fr);
gap:17px;

li:nth-of-type(1) {
    grid-column-start: 3;
    grid-column-row-stat:1;
}
li:nth-of-type(2) {
    grid-column-start: 4;
    grid-column-row-stat:1;
}
`;

export const SeatItem = styled.li``;

export const SeatIcon = styled.img``;

export const SubHeading = styled.h4`

`;

export const TripDetails = styled.div`

`;

export const DetailContainer = styled.ul`

`;

export const List= styled.li`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    gap: 55px;
`;

export const Key = styled.span`

`;

export const Value = styled.span`

`;

export const Price = styled.p`

`;

export const TotalAmount = styled.p`

`;

export const Button = styled.button`

`;