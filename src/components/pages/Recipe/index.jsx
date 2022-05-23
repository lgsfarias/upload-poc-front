import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header';
import api from '../../../services/api';
import * as S from './style';

const Recipe = () => {
    const { _id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        api.get(`/recipes/${_id}`)
            .then((response) => {
                setRecipe(response.data);
            })
            .catch((error) => {
                alert(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {recipe && (
                <S.Main>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image} alt={recipe.title} />
                    <h2>{recipe.description}</h2>
                    <h3>Ingredientes:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Preparo:</h3>
                    <ol>
                        {recipe.preparation.map((step, index) => (
                            <li key={step}>
                                {index + 1} - {step}
                            </li>
                        ))}
                    </ol>
                </S.Main>
            )}
        </>
    );
};

export default Recipe;
