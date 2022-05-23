import styled from 'styled-components';

export const Header = styled.header`
    z-index: 1;
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #f49237;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 37px;
        color: #ffffff;
    }

    .back-button {
        position: absolute;
        left: 10px;
        cursor: pointer;
    }
`;
