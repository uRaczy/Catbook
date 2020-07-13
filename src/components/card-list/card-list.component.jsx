import React, { Component } from 'react';

import './card-list.css';

import Card from '../card/card.component'

export class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    fetchProfiles = async () => {
        try {
            const fetchedJson = await fetch('https://jsonplaceholder.typicode.com/users');
            const profiles = await fetchedJson.json();
            this.setState({ users: profiles });
        } catch (error) {
            console.log('Failed to fetch');
        }
        // const fetchedProfiles = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        // this.setState({users: fetchedProfiles});
    }

    // Decide wheter to fetch avatars beforehand based on array of profiles or to do it while mounting card components (worth to try the first one and while waiting display some avatar for all of the users f.e. download this human minature from https://robohash.org/default?set=set5);


    // Check how to async await function to fetch this or just simply do it with .then
    componentDidMount() {
        this.fetchProfiles();
    }

    render() {
            return(
                <div className='cardList'>
                        {this.state.users.map(element => 
                        <Card key={element.id} id={element.id} name={element.name} email={element.email} />    
                        )}          
                </div>
            )
    }
}

export default CardList;