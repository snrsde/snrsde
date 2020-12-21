import React from 'react'
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Parser from 'html-react-parser';

function YoutubeComp(props) {
    const { videoId , vidDesc } = props;
    const opts = {
        height: '390',
        width: '100%',
        // maxWidth: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return (
        <div>
            <Typography variant="body1" component="p">
                  {Parser(""+vidDesc)}
            </Typography>
            <div style={{maxWidth: '630px', margin: 'auto'}}>
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
    )
}

export default YoutubeComp
