import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import QRCode from "react-qr-code";

export const IPconfig = () => {
    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const ip = await invoke('get_local_ip');
                setIp(ip);
            } catch (error) {
                console.error('Error fetching the IP address:', error);
            }
        };

        fetchIp();
    }, []);

    return (
        <div>
            <h1>IP Address</h1>
            <p>{ip ? `Your IP address is: ${ip}` : 'Fetching IP address...'}</p>

            <QRCode value={ip}/>
        </div>
    );
};