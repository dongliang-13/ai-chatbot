import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header(){
    const [ drawer, setDrawer ] = useState(false);
    const drawerContent = ["one","two","three"];

    return (
    <Box>
        <AppBar position='static' sx={{backgroundColor:"white", color:"black"}}>
            <Toolbar>
                <IconButton onClick={()=>setDrawer(true)}>
                    <MenuIcon sx={{color: 'black'}}/>
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft:'20px' }}>
                    Chat AI
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer open={drawer} onClose={()=>setDrawer(false)} anchor={'left'}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {drawerContent.map((text, index) => (
                        <ListItemButton key={index}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    </Box>
    );
}