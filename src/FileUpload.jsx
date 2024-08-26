import React, {useContext, useState} from 'react';
import axios from 'axios';
import TokenContext from "./context/TokenProvider.jsx";
import { BarcodeComponent} from "./Barcode.jsx";
import {redirect, useNavigate, useParams} from "react-router-dom";

const FileUpload = () => {
    const { token, setToken } = useContext(TokenContext);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [uploadPath, setUploadPath] = useState(''); // Nuevo estado para la carpeta de destino
    let {name}=useParams()
    const navigate = useNavigate()

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onPathChange = (event) => {
        setUploadPath(event.target.value); // Actualiza el estado con la carpeta de destino
    };

    const onFileUpload = async () => {
        if (!file) {
            setMessage('Por favor, selecciona un archivo primero.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploadPath', uploadPath); // Agregar la carpeta de destino a FormData


        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setMessage('Archivo subido con éxito');
            setToken(response.data.fileName); // Guardar el nombre del archivo devuelto por el servidor
            navigate('/download/' + name, { replace: true });
        } catch (error) {
            console.error('Error subiendo el archivo', error);
            setMessage('Error subiendo el archivo');
        }
    };

    return (
        <div>

            <input
                type="text"
                placeholder="Carpeta de destino"
                value={uploadPath}
                onChange={onPathChange}
            />
            <input type="file" onChange={onFileChange} />
            <button className='bg-indigo-500 p-3 rounded-2xl hover:bg-indigo-700' onClick={onFileUpload}>Subir</button>
            {message && <p>{message}</p>}

        </div>
    );
};

export default FileUpload;
