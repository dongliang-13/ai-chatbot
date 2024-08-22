import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Header />
      <Box 
        sx={{ 
          flex: 1,
          overflowY: 'auto',
          display: "flex",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
