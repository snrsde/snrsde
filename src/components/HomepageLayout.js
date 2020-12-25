import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseComponent from './BaseComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3f4041',
    flexGrow: 1,
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#5d737e',
    textAlign: 'center',
    color: "white",
  },
  sect: {
    padding: theme.spacing(2),
    backgroundColor: '#3f4041',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));
function HomepageLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <BaseComponent >
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div>
            <h1 style={{fontSize:'70px', color:'white'}}>Snr SDE</h1>
            <h1 style={{ color:'white'}}>A collection of resources for 5+ yr engineers to learn and prep</h1>
            <h1 style={{ fontSize:'20px', color:'white'}}>-From an anonymous FAANG eng to all</h1>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div style={{ color:'white', fontSize:'20px'}}>
            <p>
                Whether you are an avid learner or someone who is preparing for interviews at FAANG.<br/>
                Most posts will be focused in the sense of Interview prepration.<br/>
                All my post will be focused on posting only the best content I find in my learnings.<br/>
                If you want to contribute send me your writeup and i'll add to the collection.
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div style={{ color:'white', fontSize:'20px'}}>
              <p>
                If you like the content or this helped you prep for interviews. 
                  Please consider <a style={{color: "blue",
    textDecoration: "none"}} href="/#/donate">donating</a>, it takes a lot of effort to curate this content for you. I hope you enjoy learning.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
      
    
    </BaseComponent>
    </div>
  )
}

export default HomepageLayout
