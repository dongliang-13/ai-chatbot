import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const getAiResponse = async (req, res) => {
    try {
        // Check if the request body contains the required 'request' property
        if (!req.query.request) {
            return res.status(400).json({
                response: "Please attach a request for the AI"
            });
        }
        
        const prompt = req.query.request;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({
            response: text
        });
    } catch (error) {
        console.error('Error fetching AI response:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
};

export { getAiResponse };
