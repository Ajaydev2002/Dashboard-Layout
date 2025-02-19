
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@mui/icons-material/Person";
import PagesIcon from "@mui/icons-material/Pages";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventIcon from "@mui/icons-material/Event";
import ContactsIcon from "@mui/icons-material/Contacts";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CategoryIcon from "@mui/icons-material/Category";
import InputIcon from "@mui/icons-material/Input";
import TableChartIcon from "@mui/icons-material/TableChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Typography from '@mui/material/Typography';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'MENU',
    },
    {
        segment: 'dashboard',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Dashboard</Typography>,
        icon: <DashboardIcon style={{ fontSize: 18, color: "grey" }}/>,
    },
    
    {
        kind: 'header',
        title: 'PAGES',
    },
    {
        segment: 'Authentication',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Authentication</Typography>,
        icon: <PersonIcon style={{ fontSize: 18, color: "grey" }} />,
        children: [
            {
                segment: 'sign in',
                title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '10px' }}>Sign in</Typography>,
            },
            {
                segment: 'sign up',
                title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '10px' }}>Sign up</Typography>,
            },
        ],
    },
    {
        segment: 'Pages',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Pages</Typography>,
        icon: <PagesIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'Widgets',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Widgets</Typography>,
        icon: <WidgetsIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        kind: 'header',
        title: 'APPS',
    },
    {
        segment: 'Calender',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Calender</Typography>,
        icon: <EventIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'API keys',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>API keys</Typography>,
        icon: <VpnKeyIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'Contact',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Contact</Typography>,
        icon: <ContactsIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'LeaderBoard',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>LeaderBoard</Typography>,
        icon: <LeaderboardIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        kind: 'header',
        title: 'COMPONENTS',
    },
    {
        segment: 'Overview',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Overview</Typography>,
        icon: <DashboardIcon style={{ fontSize: 18, color: "grey" }} />,
    },
    {
        segment: 'Components',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Components</Typography>,
        icon: <CategoryIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'Inputs',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Inputs</Typography>,
        icon: <InputIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'DataDisplay',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>DataDisplay</Typography>,
        icon: <TableChartIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'Feedback',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Feedback</Typography>,
        icon: <FeedbackIcon style={{ fontSize: 18, color: "grey" }} />
    },
    {
        segment: 'Surfaces',
        title: <Typography sx={{ color: 'grey', fontSize: '15px', marginLeft: '-10px' }}>Surfaces</Typography>,
        icon: <WebAssetIcon style={{ fontSize: 18, color: "grey" }} />
    },
];

export default NAVIGATION;
