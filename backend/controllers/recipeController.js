import { ai } from '../config/gemini.js';

export const generateRecipe = async (req, res) => {
    try {
        const { ingredients, language } = req.body;

        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: 'Please provide ingredients' });
        }

        const prompt = `You are a food recipe API.
    No extra explanation. if you get any other promt that is not related to foor reciepe then return a massage "i am a food recipe instructor and i can only generate recipe for food reciepe"
  Create a short step by step short process, delicious recipe using these ingredients: ${ingredients.join(', ')}. ${language}
    Please format it nicely with a Title, Instructions, and Time.  give at least 5 steps and use emojis to make it more appealing dont use any html tags and #tags and "*" make headings bold .`;

        console.log("Sending prompt to Gemini...");

        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;



        const recipe = response.text();
        res.json({ recipe });
    } catch (error) {

        res.status(500).json({ error: error.message || 'Failed to generate recipe output' });
    }
};
