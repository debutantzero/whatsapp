import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import search20Filled from '@iconify-icons/fluent/search-20-filled';

export default function NouvelleDiscussion() {
    return (
        <div>
            <div className="">
               <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header ">
                    <div className="offcanvas-header">
                    <button type="button" class="edit text-reset " >
                    <i class="fas fa-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    <span className="mx-4 home-span">Nouvelle discussion</span>
                    </button>
                    </div>
                </div>
                <div class="offcanvas-body">
                <div className="input-container">
                <div className="left-input-div"> 
                        <Icon icon={search20Filled} width="20" height="51" color="#b1b3b5"/>
                        <input type="text" className="left-input" placeholder="Chercher des contacts"/>
                        </div>
                </div>
                <hr className="list-hr"></hr>
                <div>
                <button className="edit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="fas fa-users"></i>
                <span className="mx-2">Nouveau groupe</span>
                </button>
                    
                </div>
                </div>
                </div>
               </div>
        </div>
    )
}
