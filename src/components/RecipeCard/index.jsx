import { useNavigate } from 'react-router-dom';

import * as S from './style';

const RecipeCard = ({ image, title, _id }) => {
    const navigate = useNavigate();
    return (
        <S.RecipeCard
            image={image}
            onClick={() => navigate(`/receitas/${_id}`)}
        >
            <h2>{title}</h2>
        </S.RecipeCard>
    );
};

export default RecipeCard;
