import { useState } from 'react';

const IngredientsList = ({ ingredients, selectedIngredients, onToggle }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MOBILE_LIMIT = 10;

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6 ">
                {ingredients.map((ing, index) => {
                    const isHiddenOnMobile = index >= MOBILE_LIMIT && !isExpanded;

                    return (
                        <button
                            key={index}
                            onClick={() => {
                                onToggle(ing)

                            }}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors 
                                ${selectedIngredients.includes(ing)
                                    ? 'bg-brand-cyan text-white'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                } 
                                ${isHiddenOnMobile ? 'hidden md:block' : ''}
                            `}
                        >
                            +{ing}
                        </button>
                    );
                })}
            </div>

            {ingredients.length > MOBILE_LIMIT && (
                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded)

                    }}
                    className="md:hidden text-brand-cyan font-semibold text-sm hover:underline mb-8"
                >
                    {isExpanded ? 'Show Less' : `Show More (${ingredients.length - MOBILE_LIMIT}+)`}
                </button>
            )}
        </div>
    );
};

export default IngredientsList;
