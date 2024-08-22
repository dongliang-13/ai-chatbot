import { TextField } from '@mui/material'; 

export default function ChatInput({ currentChat, setCurrentChat, onSubmit, isLoading }){

    const handleKeyDown = (e) =>{
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                return;
            } else {
              e.preventDefault();
              onSubmit(); 
            }
        }
    }

    return (
        <TextField
          label="Message AI"
          value={currentChat}
          onChange={(e)=>setCurrentChat(e.target.value)}
          onKeyDown={handleKeyDown}
          multiline
          fullWidth
          maxRows={4}
          sx={{
            ".css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
                borderRadius: "30px"
            }
          }}
          disabled={isLoading}
          
        />
    )
}