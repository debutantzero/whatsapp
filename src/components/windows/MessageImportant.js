import React from 'react'

export default function Catalogue() {
    return (
        <div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrollingCatalogue" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <div class="offcanvas-header">
                        <button type="button" class="edit text-reset " >
                            <i class="fas fa-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                            <span className="mx-4 home-span">Messages importants</span>
                        </button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div className="mt-4">
                        <p className="center">Pas de message important</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
