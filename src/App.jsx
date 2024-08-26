import  {useContext} from 'react';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {action as registerAction }     from "./Views/RegisterName.jsx";
import Layout from "./layouts/Layout.jsx";
import RegisterName from "./Views/RegisterName.jsx";
import TokenContext from "./context/TokenProvider.jsx";
import {IPconfig} from "./Views/IPconfig.jsx";

const App = () => {
    const {token} = useContext(TokenContext);


    const routerBrowser= createBrowserRouter(
        [
            {path: '/', element: <RegisterName/> ,

                action: registerAction


            },
            {element:<Layout/>, children:[
                    {path: 'upload/:name', element: <FileUpload/>},
                    {path: 'download/:name', element: <FileDownload fileName={token} />},
                    {path: 'ip/:name', element: <IPconfig />}

                ] }



        ])


    return (
        <>
            <RouterProvider router={routerBrowser}/>
        </>


        /*<div>
            <h1 className='text-red-700'>Subir Archivo Excel</h1>
            <FileUpload />
            <h2>Descargar Archivo</h2>
            <FileDownload fileName={fileName} />
        </div>*/
    );
};

export default App;
