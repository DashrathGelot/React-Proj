import React from 'react'

import {Drawer, Divider,List,ListItem,ListItemIcon,ListItemText, Typography,Grid,IconButton,
        useTheme,} from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Styles from './Styles'

export default function DrawerComponent(props){
    const classes=Styles()
    const theme=useTheme()
    return(
        <Drawer variant="persistent" anchor='left' open={props.open} className={classes.drawer} classes={{paper:classes.drawer}}>
            <div className={classes.drawerHeader}>
                <Grid container spacing={2}>
                    <Grid item>
                        <DashboardIcon/>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Admin Dashboard
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton size="small" onClick={props.handleClick}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
                <Divider/>
            <div className={classes.drawerList}>
            <List>
                        {[{icon:<DashboardIcon/>,text:"Dashboard"},
                        {icon:<PersonIcon/>,text:"User Profile"},
                        {icon:<AssignmentIcon/>,text:"Table List"},
                        {icon:<DashboardIcon/>,text:"Dashboard"},
                        {icon:<PersonIcon/>,text:"User Profile"},
                        {icon:<AssignmentIcon/>,text:"Table List"}]
                        .map((val,index)=>{
                            return(
                                <ListItem key={index} button className={classes.drawerListItem}>
                                    <ListItemIcon>{val.icon}</ListItemIcon>
                                    <ListItemText>{val.text}</ListItemText>
                                </ListItem>
                            )})}
                </List>
            </div>
        </Drawer>
    )
}