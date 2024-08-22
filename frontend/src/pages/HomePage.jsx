import { Box, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flex:1}}>
        <Container sx={{flex: 1, textAlign:"center"}}>
            <Button variant="contained" component={Link} to="/chat">
                Click here to chat with ai
            </Button>
        </Container>
    </Box> 
    );
}