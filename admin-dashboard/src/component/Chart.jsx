import React from 'react'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'
import Styles from './Styles'

function ChartPaper(){
    const classes=Styles()
    return(
        <Grid item xs={12} sm={12} md={4} className={classes.mainchartcontent}>
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.chart}> 
                
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.chartSubtitle}>
                            <Typography className={classes.chartSubtitleText}> Email Subscription </Typography>
                            <p>Last Campaign Performance</p>
                            <Divider/>
                            <p>Campaign send 2 days ago</p>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default function Chart(){
    return(
        <Grid container spacing={3}>
            <ChartPaper/>
            <ChartPaper/>
            <ChartPaper/>
        </Grid>
    )
}