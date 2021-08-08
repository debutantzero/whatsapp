import React, { useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import userAvatarFilled from '@iconify-icons/carbon/user-avatar-filled';
import baselineLoop from '@iconify-icons/ic/baseline-loop';
import threeDotsVertical from '@iconify-icons/bi/three-dots-vertical';
import messageTextOutline from '@iconify-icons/mdi/message-text-outline';
import search20Filled from '@iconify-icons/fluent/search-20-filled';
import NouvelleDiscussion from './windows/nouvelle.discussion';
import CreerGroupe from './windows/Creer.groupe';
import Listes from './windows/Listes';
import Profil from './windows/Profil';
import Catalogue from './windows/MessageImportant';
import Parametre from './windows/Parametre';




export default function Left() {
    const [render, setRender]= useState(false)
    return (
        <div onClick={render ? () =>setRender(false): null}>
            <div className="header">
            <div className="header-left">
                <Icon icon={userAvatarFilled} color="#b1b3b5" width="41" height="51"  />
            </div>
            <div className="header-right">
                <div className="header-icon">
                <Icon icon={baselineLoop} color="#b1b3b5" width="25" height="51" />
                </div>
                <div className="header-icon">
                <button class="edit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                
                <Icon icon={messageTextOutline} color="#b1b3b5" width="25" height="51" />
                </button>
                </div>
                <div className="header-icon">
                <button class="edit" onClick={()=>setRender(!render)} >
                <Icon icon={threeDotsVertical} color="#b1b3b5" width="25" height="51" />
                </button>
                </div>
                </div>

            </div>
                <div className="input-container">
                <div className="left-input-div"> 

                    <Icon icon={search20Filled} width="20" height="51" color="#b1b3b5"/>
                    <input type="text" className="left-input" placeholder="Rechercher ou démarrer une nouvelle discussion"/>
                </div>
                </div>
                

            <Parametre/>
            <Listes render={render}/>
            <CreerGroupe/>
            <NouvelleDiscussion/>
            <Profil/>
            <Catalogue/>
            
        </div>
    )
}
