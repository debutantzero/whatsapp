import React from 'react'

export default function Parametre() {
    return (
        <div>
              <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrollingParametre" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <div class="offcanvas-header">
                        <button type="button" class="edit text-reset " >
                            <i class="fas fa-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                            <span className="mx-4 home-span">Paramètres</span>
                        </button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div className="mt-4 xx">
                    <i className="fas fa-user-circle"> <span className="mx-4">Nom</span></i>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li>
                                <i className="fas fa-bell"> <span className="mx-4">Notifications</span></i>
                            </li>
                            <li>
                                <i className="fas fa-cog"> <span className="mx-4">Thème</span></i>
                            </li>
                            <li>
                                <i className="far fa-image"> <span className="mx-4">Fond d'ecran de la discussion</span></i>
                            </li>
                            <li>
                                <i className="fas fa-archive"> <span className="mx-4">Discuccions archivées</span></i>
                            </li>
                            <li>
                                <i className="fas fa-ban"> <span className="mx-4">Contacts bloqués</span></i>
                            </li>
                            <li>
                                <i className="fas fa-arrows-alt"> <span className="mx-4">Raccourcis clavier</span></i>
                            </li>
                            <li>
                                <i className="far fa-question-circle"> <span className="mx-4">Aide</span></i>
                            </li>
                        </ul>
                        <p className="pt-4 px-3 info-p">

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
