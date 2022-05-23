import { useState, useEffect } from 'react';

import Header from '../../Header';
import * as S from './style';
import RecipeCard from '../../RecipeCard';
import CreateRecipeButton from '../../CreateRecipeButton';

import api from '../../../services/api';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        api.get('/recipes').then((response) => {
            setRecipes(response.data);
        });
    }, []);

    return (
        <>
            <Header />
            <S.Main>
                <CreateRecipeButton />
                <h1>Todas as Receitas</h1>
                <div className="recipes">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe._id} {...recipe} />
                    ))}
                </div>
            </S.Main>
        </>
    );
};

export default Home;
