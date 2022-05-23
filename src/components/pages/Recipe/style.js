import styled from 'styled-components';

export const Main = styled.div`
    padding: 100px 10px 0 10px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    background: #fafafa;
    font-family: 'Roboto';

    img {
        width: 100%;

        @media (min-width: 400px) {
            width: 400px;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 25px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    ul,
    ol {
        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }
`;
