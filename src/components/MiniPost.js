import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Parser from 'html-react-parser';


const useStyles = theme => ({
    root: {
        // backgroundColor: '#DCDCDC',
        // color: "#8EE4AF" 
    },
    media: {
      height: 140,
    },
    link:{
      color: "black",
      textDecoration: "none"
    }
  });

class MiniPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        };
    }
  
    render() {
        const { classes, data } = this.props;
        const readLink = "/snrsde/#/post/"+data.id;
        return (
            <Card className={classes.root} elevation={20}>
            <a className={classes.link} href={readLink}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <Typography gutterBottom>
                   Date: {data.date}
                </Typography>
                <Typography gutterBottom>
                   Level: {data.level}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Parser(""+data.description)}
                </Typography>
              </CardContent>
            </CardActionArea>
            </a>
          </Card>
        )
    }
}
export default withStyles(useStyles)(MiniPost)
