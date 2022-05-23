import styled from 'styled-components';

export const Home = styled.div``;

export const Main = styled.main`
    padding: 90px 10px 20px 10px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    background: #fafafa;

    h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 25px;
        color: #000000;
    }

    .recipes {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

    @media (min-width: 400px) {
        .recipes {
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
`;
