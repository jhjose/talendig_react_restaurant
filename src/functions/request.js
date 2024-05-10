import axios from 'axios';

async function getData(url = ''){
    const response = await axios(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });

    return response.json();
}

async function getView(url = ''){
    const response = await axios(url, {
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Content-Type": "text/html; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
    });

    return response.text();
}

async function postData(url = '', data = {}){

    const response = await axios(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });

    return response.json();
}

export {getData, getView, postData}