import React from 'react';
import Nav from '../../components/Nav';
import '../../css/form.css';
import {getData, postData} from '../../functions/request';
import axios from 'axios';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(true);
        this.getCountries = this.getCountries.bind(true);
    }

    componentDidMount() {
        this.getCountries();
    }

    submit(event){
        event.preventDefault();

        const username = event.target.elements[0].value;
        const email = event.target.elements[1].value;
        const password = event.target.elements[2].value;
        const country = event.target.elements[3].value;

        const url = `${process.env.REACT_APP_HOST_BACKEND}/users/create`;

        const data = {
            username: username,
            email: email,
            password: password,
            country: country
        }

        return axios(url, {
            method: "POST",
            data: data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => {
            alert(res.data.message);

            if(res.status === 200){
                if(!res.data.user_exists){
                    window.location.href = '/login';
                    //window.history.push('/login');
                }
            }
            

        }).catch(err => {
            console.log('err', err);
        });

    }

    getCountries(){
        let country_select = document.getElementById('country');

        country_select.innerHTML = '';

        const response = axios('https://restcountries.com/v3.1/all', {
            method: "GET",
        });

        response.then(res => {
            if(res.status === 200){
                res.data.forEach(element => {
                    country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
                })
            }
        });
    }

    render(){
        return <div className="w-100 d-flex flex-row flex-wrap justify-content-center">
            <Nav />
            <div className="w-100 d-flex flex-row justify-content-center mt-5">

                <form onSubmit={this.submit} id="form-sign-in-user" action="" method="post" className="w-50 pb-5" style={{maxWidth: 500}}>
                    <div className={'w-100 mt-3'}>
                        <h1 className={'w-100 text-center'}>
                            Crear nueva cuenta
                        </h1>
                    </div>
                    <div className="m-3 mr-5 d-flex flex-column w-100 pr-3 pl-4">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Write the username"
                               className="form-control w-100 mt-2" required />
                    </div>
                    <div className="m-3 mr-5 d-flex flex-column w-100 pr-3 pl-4">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Write the email"
                               className="form-control w-100 mt-2" maxLength="150" required />
                    </div>
                    <div className="m-3 mr-5 d-flex flex-column w-100 pr-3 pl-4">
                        <label htmlFor="password">Contrase&ntilde;a:</label>
                        <input type="password" id="password" name="password" placeholder="Write your password"
                               className="form-control w-100 mt-2" minLength="8" required />
                    </div>
                    <div className="m-3 mr-5 d-flex flex-column w-100 pr-3 pl-4">
                        <label htmlFor="country" className={'mt-2'}>Pa&iacute;s:</label>
                        <select name="country" id="country" className="form-select" />
                    </div>

                    <div className="text-center">
                        <button type="submit">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    }
}