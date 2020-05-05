import React from 'react'
import clsx from 'clsx';
import {IconButton,Toolbar,Typography,TextField,createMuiTheme,ThemeProvider,Fab,
    Badge,MenuItem,MenuList, Paper,ClickAwayListener, Popper, Grow} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';

import styles from './Styles'

const theme =createMuiTheme({
    palette:{
        primary: {
            main:'#7e33b8'
        }
    },
});


function MenuComponent(props){
    let classes=styles()
    return(
        <Popper open={props.open} 
            anchorEl={props.anchorEl}
            anchororigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
            transformorigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }} transition  placement="bottom-end">
        {({TransitionProps,placement})=>(
            <Grow {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}>
                <Paper>
                    <ClickAwayListener onClickAway={props.handleClose}>
                    <MenuList role="menu">
                        {props.menus.map((val=>{
                            return(
                             <MenuItem key={val} className={classes.menuitem}> {val} </MenuItem>
                            )
                        }))}
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Grow> )}
        </Popper>
    )
}

export default function NavBar(props){
    const [open,setOpen]=React.useState(false)
    const [anchorEl,setanchorEl]=React.useState(null)
    let classes=styles()
    const handleToggle=(event)=>{
        setanchorEl(event.currentTarget)
        setOpen((open)=>!open)
    }
    const handleClose=()=>{
        setOpen(false)
        setanchorEl(null)
    }
    return(
        <div className={clsx(classes.nav,{
            [classes.navShift]:props.openDrawer})}>
            <Toolbar>
                <IconButton onClick={props.handleClick}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.header} >
                    Dashboard
                </Typography>
                <div className={classes.search}>
                    <div>
                    <ThemeProvider theme={theme}>
                        <TextField placeholder="Search"/>
                    </ThemeProvider>
                </div>
                <div>
                    <Fab size="small" className={classes.searchicon}>
                        <SearchIcon />
                    </Fab>
                </div>
                <IconButton>
                    <DashboardIcon className={classes.dashboardicon}/>
                </IconButton>
                <IconButton onClick={handleToggle}>
                    <Badge badgeContent={5} color="secondary">
                        <NotificationsActiveIcon className={classes.dashboardicon}/>
                    </Badge>
                </IconButton>
                <MenuComponent handleClose={handleClose} open={open} anchorEl={anchorEl} menus={['Profile','Settings','Log Out']}/>
                <div>
                <IconButton onClick={handleToggle}>
                    <PersonIcon className={classes.dashboardicon}/>
                </IconButton>
                <MenuComponent handleClose={handleClose} open={open} anchorEl={anchorEl} menus={['Profile','Settings','Log Out']}/>
                </div>
                </div>
            </Toolbar>
        </div>
    )
}