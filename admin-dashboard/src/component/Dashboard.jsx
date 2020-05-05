import React from 'react';
import clsx from 'clsx';

import styles from './Styles'
import NavBar from './NavBar';
import DrawerComponent from './DrawerComponent';
import Content from './Content';
import Chart from './Chart';
import TableComponent from './TableComponent';

export default function Dashboard(){
    const [openDrawer,setOpenDrawer]=React.useState(false)
    const handleClick=()=>{
        setOpenDrawer((openDrawer)=>!openDrawer)
    }
    const classes=styles()
    return(
        <div className={classes.root}>
            <NavBar handleClick={handleClick} openDrawer={openDrawer}/>
            <DrawerComponent open={openDrawer} handleClick={handleClick}/>
            <main className={clsx(classes.content,{
                [classes.contentShift]:openDrawer })}>
                    <Content/>
                    <Chart/>
                    <TableComponent/>
            </main>
        </div>
    )
}