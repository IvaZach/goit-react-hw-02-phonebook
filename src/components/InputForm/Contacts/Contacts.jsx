import React, { Component } from 'react';

export class Contacts extends Component {
    render(){ 
        console.log('7', this.props.name)
        return <li> {this.props.name}</li>}};
