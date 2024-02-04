import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Toolbar, Box } from '@mui/material';

const drawerWidth = 240;
import '../../App.css'

const ClippedDrawer = ({ open, onClose }) => {
    return (
        <Drawer
            variant="permanent"
            className='paper'
        >
            <Toolbar />
            <Box >
                <List>
                    {['Home', 'Environment', 'Motor', 'Rocket', 'Results'].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
        // <Drawer open={open} onClose={onClose}>
        //     <List>
        //         <ListItem button component={Link} to="/">
        //             <ListItemText primary="Home" />
        //         </ListItem>
        //         <ListItem button component={Link} to="/environment">
        //             <ListItemText primary="Environment" />
        //         </ListItem>
        //     </List>
        // </Drawer>
    );
}

export { ClippedDrawer };
