import { useNavigate } from 'react-router-dom';

import * as S from './style';

const CreateRecipeButton = () => {
    const navigate = useNavigate();
    return (
        <S.Box>
            <h2>Tem uma receita legal pra compartilhar?</h2>
            <S.Button onClick={() => navigate('/criar-receita')}>
                Criar Receita
            </S.Button>
        </S.Box>
    );
};

export default CreateRecipeButton;
