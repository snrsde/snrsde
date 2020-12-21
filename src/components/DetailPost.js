import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Parser from 'html-react-parser';
import Divider from '@material-ui/core/Divider';
import YoutubeComp from './YoutubeComp';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
        // backgroundColor: '#DCDCDC',
        // color: "#8EE4AF" 

    },
    media: {
      height: 140,
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: '#5d737e',
      textAlign: 'center',
      color: "white",
    }
  
  });

class DetailPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        };
    }

    render() {
        const { classes , data} = this.props;
        
        return (
            <Card className={classes.root} elevation={20}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <Typography gutterBottom>
                   Level: {data.level}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Parser(""+data.description)}
                </Typography>
                <Divider />
                { data.vidDesc != null &&
                  <YoutubeComp videoId={data.videoId} vidDesc={data.vidDesc}/>
                }
                <Typography variant="body1" component="p">
                  {Parser(""+data.body)}
                </Typography>
                { data.pdfLink != null &&
                  <object width="100%" height="800" 
                    data={data.pdfLink+"#view=FitH"} 
                    type="application/pdf">  
                    <p>Your web browser doesn't have a PDF plugin.<br/>
                    <a href={data.pdfLink}>
                    <br/>
                      Download the pdf<br/>
                    </a>
                    or Please visit using a desktop browser.
                      </p>
                  </object>
                }
                { data.endText != null &&
                  <Typography variant="body1" component="p">
                    {Parser(""+data.endText)}
                  </Typography>
                }
                <Paper className={classes.paper}>
                  <div style={{ color:'white', fontSize:'20px'}}>
                    <p>
                      Want to suggest improvements? Suggest some content please write to us at <b><em style={{color:"black"}}>snrsofteng@gmail.com</em></b>
                      <br/>
                      You can send your donations at <b><em style={{color:"black"}}>snrsofteng@gmail.com</em></b>
                      <br/>
                      Patreon :<a style={{textDecoration :'none', color: 'black'}} href="https://www.patreon.com/snreng"><b><em > https://www.patreon.com/snreng</em></b></a>
                    </p>
                  </div>
                </Paper>
              </CardContent>
          </Card>
        )
    }
}
export default withStyles(useStyles)(DetailPost)
