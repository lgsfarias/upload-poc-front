import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import Header from '../../Header';

import api from '../../../services/api';

import * as S from './style';

const CreateRecipe = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [preparation, setPreparation] = useState(['']);
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image) {
            alert('Por favor, escolha uma imagem!');
            return;
        }

        const data = new FormData();

        data.append('title', title);
        data.append('description', description);
        data.append('ingredients', JSON.stringify(ingredients));
        data.append('preparation', JSON.stringify(preparation));
        data.append('file', image);

        api.post('http://localhost:5000/recipes', data)
            .then(() => {
                alert('Receita criada com sucesso!');
                navigate('/');
            })
            .catch(() => {
                alert('Erro ao criar receita!');
            });
    };

    return (
        <>
            <Header />
            <S.Form onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <S.Input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <S.Input
                            type="text"
                            placeholder={`Ingrediente e quantidade`}
                            value={ingredient}
                            onChange={(e) =>
                                setIngredients(
                                    ingredients.map((ingredient, i) =>
                                        index === i
                                            ? e.target.value
                                            : ingredient
                                    )
                                )
                            }
                            required
                        />
                        {index !== 0 && (
                            <AiOutlineClose
                                size={25}
                                className={'remove-icon'}
                                onClick={() =>
                                    setIngredients(
                                        ingredients.filter(
                                            (ingredient, i) => index !== i
                                        )
                                    )
                                }
                            />
                        )}
                    </div>
                ))}
                <p
                    className="add-button"
                    onClick={() => {
                        setIngredients([...ingredients, '']);
                    }}
                >
                    Adicionar Ingrediente
                </p>
                {preparation.map((step, index) => (
                    <div key={index}>
                        <S.Input
                            type="text"
                            placeholder={`Passo - ${index + 1}`}
                            value={step}
                            onChange={(e) =>
                                setPreparation(
                                    preparation.map((step, i) =>
                                        index === i ? e.target.value : step
                                    )
                                )
                            }
                            required
                        />
                        {index !== 0 && (
                            <AiOutlineClose
                                size={25}
                                className={'remove-icon'}
                                onClick={() => {
                                    setPreparation(
                                        preparation.filter(
                                            (_, i) => index !== i
                                        )
                                    );
                                }}
                            />
                        )}
                    </div>
                ))}

                <p
                    className="add-button"
                    onClick={() => setPreparation([...preparation, ''])}
                >
                    Adicionar Passo
                </p>
                <S.FileLabel
                    htmlFor="file"
                    color={image ? 'rgba(0, 255, 115,0.4)' : ''}
                >
                    {image ? 'Imagem Selecionada' : 'Adicionar Imagem'}
                </S.FileLabel>
                <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <S.Button type="submit">Criar Receita</S.Button>
            </S.Form>
        </>
    );
};

export default CreateRecipe;
