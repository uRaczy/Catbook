import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import './search-box.style.css'

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        }
    }
    
    render() {
        return (
            <div className='Search-box'>
                <TextField id='outlined-basic' label='Search' variant='outlined' />
            </div>
        );
    }
}

export default SearchBox;