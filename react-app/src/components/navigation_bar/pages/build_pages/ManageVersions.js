import * as React from 'react'; 
import PropTypes from 'prop-types';

import { BrowserRouter, Switch,Link, Route, NavLink, HashRouter } from "react-router-dom";
import Content from './../Content';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ManageVersions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HashRouter>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 , background: "#56a8c2"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit">
          <Tab label="Versions" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      </Box>
      
      <TabPanel value={value} index={0}>
        <Content></Content>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
    </Box>
    </HashRouter>
    
  );
}
