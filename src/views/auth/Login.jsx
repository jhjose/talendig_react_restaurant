import React from 'react';
import Nav from '../../components/Nav';
import '../../css/form.css';
import {getData, postData} from '../../functions/request';
import axios from 'axios';
import { getCookie, setCookie } from '../../functions/cookies';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(true);
    }

    componentDidMount(){
        console.log("getCookie('user_auth')", getCookie('user_auth'))

        if(getCookie('user_auth') !== ''){
            window.location.href = '/';
        }
    }

    submit(event){
        event.preventDefault();

        const email = event.target.elements[0].value;
        const password = event.target.elements[1].value;

        const url = `${process.env.REACT_APP_HOST_BACKEND}/users/login`;

        const data = {
            email: email,
            password: password,
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
                if(res.data.authChecked){
                    window.localStorage.setItem('user_auth', res.data.user.id);
                    window.sessionStorage.setItem('user_auth', res.data.user.id);

                    setCookie('user_auth', res.data.user.id, 0.5);

                    window.location.href = '/';
                }
            }
            

        }).catch(err => {
            console.log('err', err);
            alert(err.message);
        });

    }

    render(){
        return <div style={{display: getCookie('user_auth') === '' ? 'flex' : 'none'}} className="w-100 flex-row flex-wrap justify-content-center">
            <Nav />
            <div className="w-100 d-flex flex-row justify-content-center mt-5">

                <form onSubmit={this.submit} id="form-sign-in-user" action="" method="post" className="w-50 pb-5" style={{maxWidth: 500}}>
                    <div className={'w-100 mt-3'}>
                        <h1 className={'w-100 text-center'}>
                            Ingresa tus credenciales
                        </h1>
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

                    <div className="text-center">
                        <button type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    }
}