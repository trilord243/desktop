
import Barcode from 'react-barcode';
import {useContext} from "react";
import TokenContext from "./context/TokenProvider.jsx";
import QRCode from "react-qr-code";

export const BarcodeComponent = () => {
    const {token} = useContext(TokenContext);
    return (
        <>

            <QRCode value={token} />
    </>

    )
}