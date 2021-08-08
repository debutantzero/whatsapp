import React from 'react'
import { useState } from 'react'

export default function Listes({render}) {
    
    return (
        <div>{render &&
            <div className="list" >
                <ul >
                    <li><button class="list-item edit" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Nouveau groupe</button></li>
                    <li><button class="list-item edit" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Créer un salon</button></li>
                    <li><button class="list-item edit" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingProfil" aria-controls="offcanvasScrollingProfil">Profil</button></li>
                    <li><button class="list-item edit" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingCatalogue" aria-controls="offcanvasScrollingCatalogue">Messages importants</button></li>
                    <li><button class="list-item edit" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingParametre" aria-controls="offcanvasScrollingParametre">Paramètres</button></li>
                    <li><button class="list-item edit" type="button">Deconnexion</button></li>
                
                </ul>
            </div>
            }
        </div>
    )
}
