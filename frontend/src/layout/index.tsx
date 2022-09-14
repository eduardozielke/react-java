import Header from './Header';
import MyDrawer from './Drawer';
import React from 'react';
import { Box } from '@mui/system';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <MyDrawer />
            <Box>
                {children}
            </Box>
        </>
    )
}

export default Layout;
