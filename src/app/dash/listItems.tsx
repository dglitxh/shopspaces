import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Orders from './Orders';

export const MainListItems  = (props: any) => {
   
  const {currView, setCurrView} = props

 return (
   <React.Fragment>
     <ListItemButton onClick={() => setCurrView(0)}>
       <ListItemIcon>
         <DashboardIcon />
       </ListItemIcon>
       <ListItemText primary="Dashboard" />
     </ListItemButton>
     <ListItemButton onClick={() => setCurrView(1)}>
       <ListItemIcon>
         <ShoppingCartIcon />
       </ListItemIcon>
       <ListItemText primary="Orders" />
     </ListItemButton>
     <ListItemButton onClick={() => setCurrView(2)}>
       <ListItemIcon>
         <PeopleIcon />
       </ListItemIcon>
       <ListItemText primary="Customers" />
     </ListItemButton>
     <ListItemButton onClick={() => setCurrView(3)}>
       <ListItemIcon>
         <BarChartIcon />
       </ListItemIcon>
       <ListItemText primary="Reports" />
     </ListItemButton>
     <ListItemButton onClick={() => setCurrView(4)}>
       <ListItemIcon>
         <LayersIcon />
       </ListItemIcon>
       <ListItemText primary="Integrations" />
     </ListItemButton>
   </React.Fragment>
 );
}


export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
