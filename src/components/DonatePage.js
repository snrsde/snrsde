import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseComponent from './BaseComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3f4041',
    flexGrow: 1,
    height: '100vh',
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
function DonatePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <BaseComponent >
    <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div>
            <h1 style={{fontSize:'60px', color:'white'}}>Donate & Support Us</h1>
            <h1 style={{ color:'white'}}>This initiative requires your support!</h1>
            <h1 style={{ fontSize:'20px', color:'white'}}>If you like our work please support by becoming a pateron or one time donations</h1>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div style={{ color:'white', fontSize:'20px'}}>
            <p>
                It takes a lot of hours for me to find and create some of the best questions and articles<br/>
                You can become a <a style={{textDecoration :'none'}} href="https://www.patreon.com/snreng"><b><em style={{ color:"yellow"}}>pateron </em></b></a>with anything you like.<br/>
                Even donations in form of <b><em style={{color:"yellow"}}>google play/Amazon gift cards</em></b> are also highly appreciated.<br/>
                Help me in keeping this initiative afloat. If you like our work please support us.<br/>
                
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div style={{ color:'white', fontSize:'20px'}}>
              <p>
                You can send your donations at <b><em style={{color:"black"}}>snrsofteng@gmail.com</em></b>
                <br/>
                Patreon :<a style={{textDecoration :'none', color: 'black'}} href="https://www.patreon.com/snreng"><b><em > https://www.patreon.com/snreng</em></b></a>
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
      
    
    </BaseComponent>
    </div>
  )
}

export default DonatePage
