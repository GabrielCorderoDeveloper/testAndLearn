import {registrarImagen} from "./lazy.js"

const minimun = 1;
const maximun = 122;
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;


const createImageNode = () => {
    const container = document.createElement('div');

    const imagen = document.createElement('img');
    imagen.style = 'width: 320px;'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('app');

const addButton = document.querySelector('.generate');
const cleanButton = document.querySelector('.clean');

//Event listeners
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registrarImagen(newImage);
};

addButton.addEventListener('click', addImage)
