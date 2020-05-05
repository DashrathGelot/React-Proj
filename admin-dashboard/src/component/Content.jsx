import React from 'react';

import { Grid,Paper, Divider,Typography} from '@material-ui/core';

import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ErrorIcon from '@material-ui/icons/Error';

import Styles from './Styles';


function PaperComponent(){
    const classes=Styles()
    return(
            <Grid item xs={12} sm={6} md={3} className={classes.mainPaper}>
                <Paper>
                    <Grid container spacing={3}>
                        <Grid item xs={7}> 
                            <div className={classes.upperPaper}>
                                <FilterNoneIcon className={classes.contentIcon}/>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div className={classes.contentHead}>Used Space</div>
                            <div className={classes.contentData}>25/90 <small>GB</small></div>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container spacing={3} className={classes.contentAction}>
                        <Grid item>
                            <ErrorIcon/>
                        </Grid>
                        <Grid item>
                            <Typography>Get More Space</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
    )
}
export default function Content(){
    const classes=Styles()
    return(
        <div>
            <Grid container spacing={3} className={classes.contentone}>
                <PaperComponent/>
                <PaperComponent/>
                <PaperComponent/>
                <PaperComponent/>
            </Grid>
        </div>
    )
}