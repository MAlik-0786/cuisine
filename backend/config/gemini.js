import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

// Create AI client with the API key from .env
export const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
