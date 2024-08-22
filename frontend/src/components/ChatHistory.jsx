import { Typography, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatHistory({ chat = [] }) {
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat]);

    return (
        <Box sx={{ padding: 2, height: '100%', overflowY: 'auto' }}>
            {chat.map((val, index) => {
                const isOdd = index % 2 !== 0;
                return (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            padding: '0 20px',
                            margin: '0 0 10px 0',
                            justifyContent: isOdd ? 'flex-start' : 'flex-end',
                        }}
                    >
                        <Typography
                            sx={{
                                padding: '0 20px',
                                borderRadius: '20px',
                                maxWidth: '60%',
                                backgroundColor: isOdd ? 'lightgrey' : 'grey',
                                color: isOdd ? 'black' : 'white',
                            }}
                        >
                            <ReactMarkdown remarkPlugins={[remarkGfm]} children={val} />
                        </Typography>
                    </Box>
                );
            })}
            <div ref={endOfMessagesRef} />
        </Box>
    );
}

export default ChatHistory;
