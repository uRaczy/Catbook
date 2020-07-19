import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import './search-box.style.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        };
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
        const filteredUsers = this.props.users.filter( element => {
            return element.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.props.onSearchChange(filteredUsers);
    }
    
    render() {
        return (
            <div className='Search-box'>
                <TextField id='outlined-basic' label='Search' variant='outlined' onChange={this.updateSearch} />
            </div>
        );
    }
}

export default SearchBox;