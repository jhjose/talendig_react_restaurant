import React from 'react';
import axios from 'axios';

export default class ProductsLast extends React.Component {

    constructor(props){
        super(props);
        this.getLast = this.getLast.bind(this);
    }

    componentDidMount(){
        this.getLast();
    }

    getLast(){
        const url = `${process.env.REACT_APP_HOST_BACKEND}/products/last`;

        return axios(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => {
            //alert(res.data.message);
/*
            if(res.status === 200){
                if(res.data.authChecked){
                    window.localStorage.setItem('user_auth', res.data.user.id);
                    window.sessionStorage.setItem('user_auth', res.data.user.id);

                    setCookie('user_auth', res.data.user.id, 0.5);

                    window.location.href = '/';
                }
            }
            */

        }).catch(err => {
            console.log('err', err);
            alert(err.message);
        });

    }

    render(){
        return (
            <div className={'d-flex flex-row flex-wrap justify-content-center'}>

            </div>
        )
    }
}