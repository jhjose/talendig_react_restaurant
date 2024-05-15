import React from 'react';
import axios from 'axios';

import CocacolaImg from '../img/products/cocacola-1lt.PNG'
import EnsaladaCoditosImg from '../img/products/ensalada-coditos.jpg'
import EnsaladaPapasImg from '../img/products/ensalada-papas.jpg'
import EnsaladaVerdeImg from '../img/products/ensalada-verde.webp'
import FileteResImg from '../img/products/filete-res.jpg'
import HeladoCocoImg from '../img/products/helado-coco.jpg'
import HeladoFresaImg from '../img/products/helado-de-fresa.PNG'
import HeladoGuineoImg from '../img/products/helado-de-guineo.PNG'
import JugoCerezaImg from '../img/products/jugo-de-cerezas.jpg'
import JugoGuayabaImg from '../img/products/jugo-de-guayaba.PNG'
import JugoLimonImg from '../img/products/jugo-de-limon.jpg'
import JugoNaranjaImg from '../img/products/jugo-de-naranja.PNG'
import MofongoImg from '../img/products/mofongo.PNG'
import MondongoImg from '../img/products/mondongo.jpg'
import PanMantequillaImg from '../img/products/pan-mantequilla.jpg'
import PastelitosImg from '../img/products/pastelitos-quesos.PNG'
import PolloHorneadoImg from '../img/products/pollo-horneado.PNG'
import SalcochoImg from '../img/products/salcocho.png'
import SopaPescadoImg from '../img/products/sopa-de-pescado.jpg'
import SpriteImg from '../img/products/sprite-1lt.PNG'

export default class ProductsLast extends React.Component {

    constructor(props){
        super(props);
        this.getLast = this.getLast.bind(this);

        this.state = {
            products: []
        }
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
            console.log('res', res)

            if(res.status === 200){
                this.setState({
                    products: this.state.products.concat(res.data.products)
                })
            }

        }).catch(err => {
            console.log('err', err);
            alert(err.message);
        });

    }

    render(){
        return (
            <div className={'d-flex flex-row flex-wrap justify-content-center'}>
                {
                    this.state.products && this.state.products.map((product, index) => {
                        <div>
                            <img src={product.image_route + '/' + product.image_name} alt="" />
                        </div>
                    })
                }
            </div>
        )
    }
}