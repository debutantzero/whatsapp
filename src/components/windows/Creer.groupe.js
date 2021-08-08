import React from 'react'

export default function CreerGroupe() {
    return (
        <div>
            <div className="">
                <div class="offcanvas offcanvas-end left-right" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <div className="offcanvas-header">
                    <button type="button" class="edit text-reset " >
                    <i class="fas fa-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    <span className="mx-4 home-span">Ajouter des participants au groupe </span>
                    </button>
                    </div>
                    </div>
                    <div class="offcanvas-body mt-2">
                        <input className="gr-input " type="text" placeholder="Saisissez le nom du contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
