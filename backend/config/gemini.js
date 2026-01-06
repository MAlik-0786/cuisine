import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

// Create AI client with the API key from .env
export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
