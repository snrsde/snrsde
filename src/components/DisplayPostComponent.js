import React, { Component } from 'react'
import BaseComponent from './BaseComponent'
import Typography from '@material-ui/core/Typography';
import DetailPost from './DetailPost'

export default class DisplayPostComponent extends Component {
    constructor(props) {
        super(props);

        var empty ={
            id: props.id,
            posts : []
        };
        this.state = {
            data: empty,
            id: props.match.params.id
        };
    }

    componentDidMount() {
        this.getData()
    }

     getData=()=>{
         const { id } = this.state;
        fetch('./resources/post/'+id+'.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        ).then(function(response){
            console.log(response)
            return response.json();
          })
          .then(data => this.setState({ data }));
      }

    render() {
        const { data } = this.state;
        return (
            <BaseComponent>
                <Typography paragraph><DetailPost data={data} /></Typography>
            </BaseComponent>
        )
    }
}
