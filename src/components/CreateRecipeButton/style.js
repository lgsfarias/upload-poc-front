import styled from 'styled-components';

export const Box = styled.div`
    width: calc(100vw - 20px);
    height: 181px;
    padding: 30px;
    background: #fafafa;
    border: 1px dashed #d5d5d5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 25px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #b9b9b9;
    }
`;

export const Button = styled.button`
    width: 151px;
    height: 40px;
    background: #fafafa;
    border: 1px dashed #ec362d;
    border-radius: 50px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 21px;
    color: #ec362d;
    cursor: pointer;
`;
