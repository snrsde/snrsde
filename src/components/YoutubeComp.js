import React from 'react'
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Parser from 'html-react-parser';

function YoutubeComp(props) {
    const { videoId , vidDesc } = props;
    const opts = {
        height: '390',
        width: '640',
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
            <YouTube videoId={videoId} opts={opts} />
        </div>
    )
}

export default YoutubeComp
