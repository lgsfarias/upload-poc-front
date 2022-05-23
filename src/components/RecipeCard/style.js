import styled from 'styled-components';

export const RecipeCard = styled.div`
    position: relative;
    /* width: 320px; */
    width: calc(100vw - 20px);
    max-width: 380px;
    height: 140px;
    border-radius: 10px;
    background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 64.58%,
            #000000 100%
        ),
        url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    h2 {
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }
`;
