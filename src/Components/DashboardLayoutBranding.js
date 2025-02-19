import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Header from './Header';
import NAVIGATION from './Navigation';
import { Box, IconButton, InputBase, Toolbar, Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WidgetPopper from './Widgets';
import ShoppingPopper from './ShoppingCart';
import NotificationPopper from './Notification';
import ProfilePopper from './Profile';
import { Dashboard } from '@mui/icons-material';

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});


function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>We can add dashboard content here{pathname}</Typography>
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {

    const router = useDemoRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/logo-dark.00f35cb27393e7e7b073.png" alt="MUI logo" style={{ width: '100px', alignItems: 'center', marginLeft: "30px", }} />,
                title: (
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '100px' }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', width: '30%' }}>
                            <IconButton sx={{ marginRight: 1 }}>
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                placeholder="Search for hybrix"
                                sx={{ width: '100%', padding: '5px 10px' }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '560px' }}>

                            <IconButton sx={{ marginRight: 1, zIndex: 100 }}>
                                < WidgetPopper />
                            </IconButton>

                            <IconButton sx={{ marginRight: 1 }}>
                                <ShoppingPopper />
                            </IconButton>

                            <IconButton sx={{ marginRight: 1, marginRight: 2 }}>
                                <NotificationPopper />
                            </IconButton>

                            <ProfilePopper />
    
                        </Box>
                    </Toolbar>
                ),
            }}
            router={router}
            theme={demoTheme}
        >
            <DashboardLayout header={<Header />}>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutBranding.propTypes = {

    window: PropTypes.func,
};

export default DashboardLayoutBranding;
