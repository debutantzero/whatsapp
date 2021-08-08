import React from 'react'
import img from '../images/icons.jpg'
import { Icon, InlineIcon } from '@iconify/react';
import desktopDevice from '@iconify-icons/akar-icons/desktop-device';

export default function RenderDefault() {
    return (
        <div>
            <div className="rigth-container">
                <div className="img">
                    <img className="" src={img} />
                </div>
                <div className="text-1">
                    <h1 className="text-h1">Gardez votre téléphone connecté</h1>
                    <p className="text-p">WhatsApp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation de données, connectez votre téléphone à un réseau Wi-Fi.</p>
                </div>
                <hr className="hr"></hr>
                <div className="text-2">
                    <Icon icon={desktopDevice} width="20"/>
                    <p className="text-2-p">WhatsApp est disponible pour Windows. <span className="text-2-span">Obtenez l'application ici</span></p>
                </div>
            </div>
            
        </div>
    )
}
