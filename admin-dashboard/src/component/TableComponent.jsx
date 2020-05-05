import React from 'react'
import PropTypes from 'prop-types'

import {Grid,
        Paper, 
        Tabs, 
        Tab,
        Box,
        Typography,
        List,
        ListItem,
        ListItemIcon, 
        Checkbox, 
        ListItemText, 
        IconButton,
        Divider,Tooltip,CardHeader, Table, TableHead, TableRow,TableCell, TableBody} from '@material-ui/core'

import BugReportIcon from '@material-ui/icons/BugReport';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Styles from './Styles';

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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function allProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function createData(id,name,salary,country){
    return{id,name,salary,country}
}
const rows=[
    createData(101,'Ritvik Sharma','$ 79973.00','Japan'),
    createData(101,'Ritvik Sharma','$ 79973.00','Japan'),
    createData(101,'Ritvik Sharma','$ 79973.00','Japan'),
    createData(101,'Ritvik Sharma','$ 79973.00','Japan'),
    createData(101,'Ritvik Sharma','$ 79973.00','Japan'),
]
export default function TableComponent(){
    const [value, setValue] = React.useState(0);
    const classes=Styles()
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <Grid container spacing={5}>
            <Grid item xs={12} md={6} sm={12}>
                <Paper>
                    <Grid container>
                        <Grid item xs={11}>
                            <Tabs value={value} onChange={handleChange} className={classes.tabbar}
                            classes={{
                                indicator:classes.indicator
                            }}>
                        {[{name:'Bugs',icon:<BugReportIcon/>},
                        {name:'Websites',icon:<AllInclusiveIcon/>},
                        {name:'Server',icon:<WbCloudyIcon/>}].map((val,index)=>{
                            return(
                                <Tab key={index} label={
                                    <React.Fragment>
                                        <Grid container spacing={1} className={classes.tablabel}>
                                            <Grid item>
                                            {val.icon}
                                            </Grid>
                                            <Grid item>
                                                <Typography>{val.name}</Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment> 
                             } {...allProps(index)}/>
                            )
                        })}  
                        </Tabs>
                        </Grid>
                        <Grid item>
                            {[0,1,2].map(index=>
                            <TabPanel value={value} index={index} className={classes.tabpanel}>
                                <List>
                                    {[...Array(4-index)].map((val,index) => {
                                    return(
                                    <div>
                                    <ListItem key={index} dense button className={classes.tabpanelitem}>
                                        <ListItemIcon>
                                            <Checkbox edge="start"/>
                                        </ListItemIcon>
                                        <ListItemText className={classes.listitemtext} primary=" Reload server with Batch"/>
                                            <ListItemIcon edge="end">
                                            <IconButton edge="end">
                                                <Tooltip title="Edit" arrow placement="top">
                                                    <EditIcon/>
                                                </Tooltip>
                                            </IconButton>
                                            </ListItemIcon>
                                            <ListItemIcon>
                                            <IconButton edge="end">
                                                <Tooltip title="Delete" arrow placement="top">
                                                    <DeleteIcon/>
                                                </Tooltip>
                                            </IconButton>
                                            </ListItemIcon>
                                    </ListItem>
                                    <Divider/>
                                    </div>)})}
                                </List>
                            </TabPanel>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
                <Paper>
                    <Grid container>
                        <Grid item xs={11}>
                            <CardHeader
                            title="Employee States"
                            subheader="New Employee join in recent day"
                            className={classes.cardheader}
                            />
                        </Grid>
                        <Grid item className={classes.table}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell> ID</TableCell>
                                        <TableCell> Name</TableCell>
                                        <TableCell> Salary</TableCell>
                                        <TableCell> Country</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rows.map((row,index)=>{
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell align="right">{row.id}</TableCell>
                                                    <TableCell align="right">{row.name}</TableCell>
                                                    <TableCell align="right">{row.salary}</TableCell>
                                                    <TableCell align="right">{row.country}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}