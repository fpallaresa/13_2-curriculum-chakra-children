import React from "react";
import "./Knowledge.css";
import ImageCard from "../ImageCard/ImageCard";

const Knowledge = () => {

    return (
        <>
            <h3 className="cards__title">Estos son algunos de mis conocimientos:</h3>
            <div className="cards">
                        
                <ImageCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" title="React">
                    <h2 className="card__title">React</h2>
                    <p className="card__text">React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
                    <a className="card__link" href="https://es.react.dev/" target="_blank" rel="noreferrer">https://es.react.dev/</a>
                </ImageCard>
                <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png" title="NodeJS">
                    <h2 className="card__title">NodeJS</h2>
                    <p className="card__text">Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
                    <a className="card__link" href="https://nodejs.org/" target="_blank" rel="noreferrer">https://nodejs.org/</a>
                </ImageCard>
                <ImageCard imageUrl="https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/HTML55.png" title="HTML5">
                    <h2 className="card__title">HTML5</h2>
                    <p className="card__text">HTML5 es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 específica dos variantes de sintaxis para HTML.</p>
                    <a className="card__link" href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank" rel="noreferrer">https://developer.mozilla.org/</a>
                </ImageCard>
                <ImageCard imageUrl="https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/CSS3.png" title="CSS3">
                    <h2 className="card__title">CSS3</h2>
                    <p className="card__text">CSS3 es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.</p>
                    <a className="card__link" href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">https://developer.mozilla.org/</a>
                </ImageCard>
            </div>
        </>
    );
}

export default Knowledge;