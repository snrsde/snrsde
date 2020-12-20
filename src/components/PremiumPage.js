import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseComponent from './BaseComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3f4041',
    flexGrow: 1,
    minheight: '100vh',
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
    color: "white",
  }
}));
function PremiumPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <BaseComponent >
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div>
            <h1 style={{fontSize:'70px', color:'white'}}>Premium Services</h1>
            <h1 style={{ color:'white'}}>Want help with Interviews at high end Tech companies?</h1>
            <h1 style={{ color:'white'}}>Dont worry, charges are just to compensate for the time I spend. Nothing Extra</h1>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div style={{ color:'white', fontSize:'20px'}}>
            <p>
            <Paper className={classes.paper}>
              <div>
              Practice in Mock Interviews FAANG Style with me (on New questions). Get a complete assessement report afterwards<br/>
              </div>
            </Paper>
            
              <div className={classes.sect}>
              Get more questions with some advanced concepts.
              </div>
            
            <Paper className={classes.paper}>
              <div>
               Become a Patreon get subscription to SDE Reads list. Our list of selected reading articles covering advanced concepts.
              </div>
            </Paper>
            
            <div className={classes.sect}>
              Consultations/Improvements about your System Designs for your startup/office project
              </div>

            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div style={{ color:'white', fontSize:'20px'}}>
              <p>
                If you'd like to get in touch please feel free to drop us a mail at <em style={{color:"black"}}>srnsofteng@gmail.com</em>
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
      
    
    </BaseComponent>
    </div>
  )
}

export default PremiumPage
