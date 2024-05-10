import React from 'react';
import '../css/carrousel.css';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import Carrousel1 from '../img/corrousel/carrousel_1.png'
import Carrousel2 from '../img/corrousel/carrousel_2.png'
import Carrousel3 from '../img/corrousel/carrousel_3.png'
import Carrousel4 from '../img/corrousel/carrousel_4.png'

export default class Carrousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.moveCarousel = this.moveCarousel.bind(this);
    }

    componentDidMount() {
        const elem = document.getElementById('itemCarrousel-1');
        elem.style.borderRadius = '50px';
        elem.style.color = '#bd4141 !important';

        console.log('elem.style.color', elem.style.color)
    }

    moveCarousel(direction, id) {
        const items = document.querySelectorAll('.itemCarrousel');
        let elem;
        const items_circles = document.getElementsByClassName('item-circle');

        for(let i = 1; i <= items_circles.length; i++){
            if(items_circles[i]){
                items_circles[i].style.color = 'grey';
            }
        }

        console.log('id', id)

        switch (id){
            case 'itemCarrousel-1':
                elem = document.getElementById('itemCarrousel-1');
                elem.style.borderRadius = '50px';
                elem.style.color = '#bd4141';
                break;
            case 'itemCarrousel-2':
                elem = document.getElementById('itemCarrousel-2');
                elem.style.borderRadius = '50px';
                elem.style.color = '#bd4141';
                break;
            case 'itemCarrousel-3':
                elem = document.getElementById('itemCarrousel-3');
                elem.style.borderRadius = '50px';
                elem.style.color = '#bd4141';
                break;
            case 'itemCarrousel-4':
                elem = document.getElementById('itemCarrousel-4');
                elem.style.borderRadius = '50px';
                elem.style.color = '#bd4141';
                break;
        }

        items.forEach(item => {
            item.classList.add(direction === 'left' ? 'animate-left' : 'animate-right');
        });

        setTimeout(() => {
            items.forEach(item => {
                item.classList.remove('animate-left', 'animate-right');
            });
        }, 1000);

    }

    render() {
        return <div className={"carrousel-primary-container w-100"}>
            <div className="carrousel">
                <div className="conteCarrousel square">
                    <div className="itemCarrousel" id="itemCarrousel-1">
                        {/*<div className="wh100 p-2">A</div>*/}
                        <div className="itemCarrouselArrows">
                            <a href="#itemCarrousel-4" onClick={()=>{this.moveCarousel('left', 'itemCarrousel-4')}}>
                                <KeyboardArrowLeftTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                            <div>
                                <img src={Carrousel1} alt="" className='carrousel_img w-100'/>
                            </div>
                            <a href="#itemCarrousel-2" onClick={()=>{this.moveCarousel('right', 'itemCarrousel-2')}} >
                                <ChevronRightTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-2">
                        <div className="itemCarrouselArrows">
                            <a href="#itemCarrousel-2" onClick={()=>{this.moveCarousel('left', 'itemCarrousel-2')}}>
                                <KeyboardArrowLeftTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                            <div>
                                <img src={Carrousel2} alt="" className='carrousel_img w-100'/>
                            </div>
                            <a href="#itemCarrousel-3" onClick={()=>{this.moveCarousel('right', 'itemCarrousel-3')}}>
                                <ChevronRightTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-3">
                        <div className="itemCarrouselArrows">
                            <a href="#itemCarrousel-3" onClick={()=>{this.moveCarousel('left', 'itemCarrousel-3')}}>
                                <KeyboardArrowLeftTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                            <div>
                                <img src={Carrousel3} alt="" className='carrousel_img w-100'/>
                            </div>
                            <a href="#itemCarrousel-4" onClick={()=>{this.moveCarousel('right', 'itemCarrousel-4')}}>
                                <ChevronRightTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                        </div>
                    </div>
                    <div className="itemCarrousel" id="itemCarrousel-4">
                        <div className="itemCarrouselArrows">
                            <a href="#itemCarrousel-3" onClick={()=>{this.moveCarousel('left', 'itemCarrousel-3')}}>
                                <KeyboardArrowLeftTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                            <div>
                                <img src={Carrousel4} alt="" className='carrousel_img w-100'/>
                            </div>
                            <a href="#itemCarrousel-1" onClick={()=>{this.moveCarousel('right', 'itemCarrousel-1')}}>
                                <ChevronRightTwoToneIcon className={'text-white'} style={{fontSize: 40}} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="conteCarrouselController">
                    <a id={'itemCarrousel-1'} href="#itemCarrousel-1" className={'item-circle'}>•</a>
                    <a id={'itemCarrousel-2'} href="#itemCarrousel-2" className={'item-circle'}>•</a>
                    <a id={'itemCarrousel-3'} href="#itemCarrousel-3" className={'item-circle'}>•</a>
                    <a id={'itemCarrousel-4'} href="#itemCarrousel-4" className={'item-circle'}>•</a>
                </div>
            </div>
        </div>
    }
}