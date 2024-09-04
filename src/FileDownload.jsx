import React, { useContext, useState } from 'react';
import axios from 'axios';
import { BarcodeComponent } from "./Barcode.jsx";
import TokenContext from "./context/TokenProvider.jsx";

const FileDownload = ({ fileName }) => {
    const link = `https://secure-island-46662-cd8fbd3886e4.herokuapp.com/download/${fileName}`;
    const linkLocal = `http://localhost:3000/download/${fileName}`;

    const { token } = useContext(TokenContext);
    const handleDownload = () => {
        axios({
            url: link, // Cambia esta URL si es necesario
            method: 'GET',
            responseType: 'blob', // Importante para manejar la respuesta como un archivo
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName); // El archivo se descargará con el nombre original
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch((error) => {
                console.error('Error al descargar el archivo:', error);
            });
    };

    return (
        <>

            {token && (
                <div>
                    <p>Token del archivo: {token}</p>
                    <BarcodeComponent />
                </div>
            )}
            <button onClick={handleDownload}>
                Descargar Archivo
            </button>
        </>
    );
};

export default FileDownload;
