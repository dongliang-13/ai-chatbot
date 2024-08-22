import { Box, Container } from '@mui/material';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import { useState } from 'react';
import axios from 'axios';

export default function ChatPage() {
    const [chatHistory, setChatHistory] = useState([]);
    const [currentChat, setCurrentChat] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatUrl = import.meta.env.VITE_CHAT_URL;

    const retrieveAi = async () => {
        const chat = chatHistory.map((val, index) => ({
            role: index % 2 === 0 ? 'user' : 'model',
            parts: [{ text: val+"" }],
        }));
    
        setChatHistory(prev => [...prev, currentChat]);
        setCurrentChat("");
        setIsLoading(true);
    
        try {
            const response = await axios.post(chatUrl, {
                history: chat,
                request: currentChat,
            });
            setChatHistory(prev => [...prev, response.data.response]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        } finally {
            setIsLoading(false);
        }
    };    

    const onSubmit = async () => {
        await retrieveAi();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, paddingBottom: "20px" }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        overflowY: 'auto',
                        padding: 2,
                        gap: '30px',
                    }}
                >
                    <ChatHistory chat={chatHistory} />
                    {isLoading && <div>Loading...</div>}
                </Box>
                <ChatInput 
                    currentChat={currentChat} 
                    setCurrentChat={setCurrentChat} 
                    onSubmit={onSubmit} 
                    isLoading={isLoading}
                />
            </Container>
        </Box>
    );
}
