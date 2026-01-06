import { ai } from '../config/gemini.js';

export const generateRecipe = async (req, res) => {
    try {
        const { ingredients, language } = req.body;

        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: 'Please provide ingredients' });
        }

        const prompt = `Create a short step by step short process, delicious recipe using these ingredients: ${ingredients.join(', ')}. ${language}
    Please format it nicely with a Title, Instructions, and Time.  give at least 5 steps and use emojis to make it more appealing dont use any html tags and #tags and "*" make headings bold .`;

        // Using the new @google/genai syntax requested by user
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });



        // The text is a property in the new SDK
        const recipe = response.text;

        res.json({ recipe });
    } catch (error) {

        res.status(500).json({ error: error.message || 'Failed to generate recipe output' });
    }
};
