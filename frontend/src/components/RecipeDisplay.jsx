const RecipeDisplay = ({ recipe, loading }) => {
    if (loading) {
        return (
            <div className="text-center mt-10">
                <p className="text-brand-cyan font-semibold animate-pulse text-lg">Gemini is cooking your recipe...</p>
            </div>
        );
    }

    if (!recipe) return null;

    return (
        <div className="mt-10 p-6 md:p-8 rounded-3xl bg-gray-50 border border-dashed border-gray-300 max-w-3xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-brand-brown mb-4 border-b pb-2 border-gray-200">Your Recipe</h2>
            <div className="whitespace-pre-wrap text-gray-700  font-poppins">
                {recipe}
            </div>
        </div>
    );
};

export default RecipeDisplay;
