import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './components/pages/CreateRecipe';
import Home from './components/pages/Home';
import Recipe from './components/pages/Recipe';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receitas/:_id" element={<Recipe />} />
            <Route path="/criar-receita" element={<CreateRecipe />} />
        </Routes>
    );
}

export default App;
