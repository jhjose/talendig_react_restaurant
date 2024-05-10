import React from 'react';
import Logo from '../img/logo.svg';
import {getData, postData, getView} from '../functions/request.js';
import axios from 'axios';

export default class LogoIcon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            age: 75,
            civil_status: 'Merried',
        }
    }
/*
    static getDerivedStateFromProps(props, state){

    }

    componentDidMount(){

        console.log('this.state.age', this.state.age)

        this.setState({
            age: 45,
            civil_status: 'Singer'
        });

        this.fetchData();

    }

    componentDidUpdate(prevProps){
        if(this.props.userID != prevProps.userID){
            this.fetchData(this.props.userID);
        }
    }
*/
    render(){
        return <div className={'m-3'}>
            <img src={Logo} alt={this.props.alt} />
        </div>
    }
}