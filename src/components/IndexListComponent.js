import React, { Component } from 'react'
import BaseComponent from './BaseComponent'
import Typography from '@material-ui/core/Typography';
import MiniPost from './MiniPost'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class IndexListComponent extends Component {
    constructor(props) {
        super(props);

        var empty ={
            id: props.id,
            posts : []
        };
        this.state = {
            data: empty,
            sortBy: "none",
            id: props.id,
            title: props.title
        };
    }

    componentDidMount() {
        this.getData()
    }
    Updating() {
        this.getData()
    }

     getData=()=>{
         const { id } = this.state;
        fetch('./resources/indexes/'+id+'.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        ).then(function(response){
            return response.json();
          })
          .then(data => {this.setState({ data })});
      }


    render() {
        const { data } = this.state;
        
        const handleChange = (event) => {
            handlesort(event.target.value);
            this.setState({ sortBy : event.target.value});
            handlesort();
          };
        
          const handlesort = (sortBy) => {
            let d = this.state.data.posts;
            
            if(sortBy === 'earliest') {
                d.sort((a,b)=> b.date.localeCompare(a.date));
            }
            else if(sortBy === 'lvlBeg') {
                d.sort((a,b)=> a.level - b.level);
            }
            else if(sortBy === 'lvlExp') {
                d.sort((a,b)=> b.level - a.level);
            }
            var tmp ={
                id: this.state.id,
                posts : d
            };
            this.setState({data : tmp});
        }

        return (
            <BaseComponent >
                <div style={{marginBottom: '15px', color : 'white'}} >
                    <Typography paragraph>
                        <h1>{this.state.title}</h1>
                    </Typography>
                    Sort By : <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.sortBy}
                    onChange={handleChange}
                    style={{marginBottom: '15px',backgroundColor: '#5d737e', color : 'white'}}
                    >
                    <MenuItem value='none'>None</MenuItem>
                    <MenuItem value='earliest'>Latest</MenuItem>
                    <MenuItem value='lvlExp'>Level Expert</MenuItem>
                    <MenuItem value='lvlBeg'>Level Beginner</MenuItem>
                    </Select>
                </div>
                {data.posts.map((value, index) => {
                    return <Typography key={index} paragraph><MiniPost key={index} data={value} /></Typography>
                })}
            
            </BaseComponent>
        )
    }
}
