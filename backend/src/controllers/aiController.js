import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const getAiResponse = async (req, res) => {
    try {
        if (!req.query.request && !req.body.request) {
            return res.status(400).json({
                response: "Please attach a request for the AI"
            });
        }
        const prompt = req.query.request || req.body.request;
        
        let history = req.query.history || req.body.history || [];
        const chat = model.startChat({
            history: history
        });
        const result = await chat.sendMessage(prompt);
        const text = result.response.text();

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

const test = async(req, res) =>{
    res.send({
        data: "test is done"
    })
}

export { getAiResponse, test };
