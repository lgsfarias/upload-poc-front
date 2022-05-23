import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    margin-top: 90px;
    gap: 10px;

    div {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .remove-icon {
            position: absolute;
            right: 10px;
            cursor: pointer;
        }
    }

    .add-button {
        align-self: flex-end;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        background-color: #f49237;
        color: #fff;
        font-size: 15px;
        padding: 5px;
        font-weight: bold;
        cursor: pointer;

        &:hover,
        &:focus {
            opacity: 0.9;
        }
    }

    input[type='file'] {
        display: none;
    }

    label {
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    padding: 0 40px 0 16px;
    font-size: 20px;
    line-height: 23px;
    color: '#000';
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 5px;
    background-color: #f49237;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 36px;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
`;

export const ImageLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ImageLabelText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #f49237;
    cursor: pointer;
`;

export const FileLabel = styled.label`
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    border-radius: 5px;
    padding: 0 16px;
    font-size: 20px;
    line-height: 23px;
    background-color: ${(props) => props.color};
    color: '#000';
    border: 1px solid #ccc;
    cursor: pointer;
`;
