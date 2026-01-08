import { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import IngredientsList from './components/IngredientsList';
import RecipeDisplay from './components/RecipeDisplay';
import Footer from './components/Footer';
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
  const recipeRef = useRef(null);

  const toggleIngredient = useCallback((ing) => {
    setSelectedIngredients(prevSelected => {
      const isSelected = prevSelected.includes(ing);
      if (isSelected) {
        return prevSelected.filter(item => item !== ing);
      } else {
        const newSelection = [...prevSelected, ing];
        // Replicating original behavior: set inputValue to the array
        // This will implicitly convert the array to a string for the input field
        setInputValue(newSelection);
        return newSelection;
      }
    });
  }, []); // setInputValue is a stable setter, so no need to include it in dependencies

  const generateRecipe = useCallback(async () => {
    if (selectedIngredients.length === 0 && !inputValue) {
      setRecipe("⚠️ Please enter ingredients or select some.");
      return;
    }
    setLoading(true);
    setRecipe('');

    // Scroll to the recipe section immediately when search starts
    setTimeout(() => {
      recipeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    try {
      const ingredientsToSent = inputValue
        ? [...selectedIngredients, inputValue]
        : selectedIngredients;

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/generate-recipe`,
        {
          ingredients: ingredientsToSent,
          language: language // ✅ SEND LANGUAGE
        }
      );
      setRecipe(response.data.recipe);
      // window.scrollTo({ bottom: document.body.scrollHeight, behavior: 'smooth' });
    } catch (error) {
      console.error("Full Error Object:", error);

      let errorMsg = "Something went wrong";

      if (error.response) {
        // Server responded with a status code other than 2xx
        errorMsg = error.response.data?.error || `Server Error: ${error.response.status} `;
      } else if (error.request) {
        // Request was made but no response received
        errorMsg = "Network Error: Could not connect to backend. Check if server is running.";
      } else {
        // Something else caused the error
        errorMsg = error.message;
      }

      if (errorMsg.includes("quota") || errorMsg.includes("429")) {
        setRecipe("⚠️ API Quota exceeded! Please wait a minute and try again.");
      } else {
        setRecipe(`Error: ${errorMsg} `);
      }
    } finally {
      setLoading(false);
    }
  }, [selectedIngredients, inputValue, language]); // Dependencies for generateRecipe

  const emptyRecipe = useCallback(() => {
    setRecipe('');
    setInputValue('');
    setSelectedIngredients([]);
    setLoading(false);
  }, []); // All setters are stable, so no dependencies needed

  return (
    <>
      <div className="min-h-screen bg-white font-poppins px-4 py-8  max-w-7xl mx-auto flex flex-col items-center">
        <Navbar />
        <Header />

        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={generateRecipe}
          language={language}          // ✅ PASS DOWN
          setLanguage={setLanguage}    // ✅ PASS DOWN
          emptyRecipe={emptyRecipe}
        />

        <IngredientsList
          ingredients={INGREDIENTS}
          selectedIngredients={selectedIngredients}
          onToggle={toggleIngredient}
          inputvalue={setInputValue}
        />

        <div ref={recipeRef} className="w-full">
          <RecipeDisplay recipe={recipe} loading={loading} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
