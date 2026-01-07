import { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import IngredientsList from './components/IngredientsList';
import RecipeDisplay from './components/RecipeDisplay';

const INGREDIENTS = [
  'sugar',
  'salt',
  'flour',
  'milk',
  'butter',
  'egg',
  'oil',
  'garlic',
  'onion',
  'tomato',
  'potato',
  'chili',
  'pepper',
  'ginger',
  'cheese',
  'cream',
  'rice',
  'pasta',
  'chicken',
  'paneer',
  'carrot',
  'spinach',
  'cumin',
  'coriander'
];


function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleIngredient = (ing) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
      setInputValue([...selectedIngredients, ing]);
    }
  };

  const generateRecipe = async () => {
    if (selectedIngredients.length === 0 && !inputValue) return;
    setLoading(true);
    setRecipe('');

    try {
      const ingredientsToSent = inputValue
        ? [...selectedIngredients, inputValue]
        : selectedIngredients;

      const response = await axios.post(
        'http://localhost:3000/api/generate-recipe',
        {
          ingredients: ingredientsToSent,
          language: language // ✅ SEND LANGUAGE
        }
      );

      setRecipe(response.data.recipe);
      window.scrollTo({ bottom: 0, behavior: 'smooth' });
    } catch (error) {

      const errorMsg =
        error.response?.data?.error ||
        "Error connecting to server. Please ensure backend is running.";

      if (errorMsg.includes("quota") || errorMsg.includes("429")) {
        // setRecipe("⚠️ API Quota exceeded! Please wait a minute and try again.");
        setRecipe("⚠️ there is limit ,your limit is over");
      } else {
        setRecipe(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-poppins px-4 py-8 max-w-6xl mx-auto flex flex-col items-center">
      <Navbar />
      <Header />

      <SearchBar
        value={inputValue}
        onChange={setInputValue}
        onSearch={generateRecipe}
        language={language}          // ✅ PASS DOWN
        setLanguage={setLanguage}    // ✅ PASS DOWN
      />

      <IngredientsList
        ingredients={INGREDIENTS}
        selectedIngredients={selectedIngredients}
        onToggle={toggleIngredient}
        inputvalue={setInputValue}
      />

      <RecipeDisplay recipe={recipe} loading={loading} />
    </div>
  );
}

export default App;
