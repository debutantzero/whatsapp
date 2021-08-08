import React from 'react'

export default function Salon() {
    return (
        <div className="salon-container">
            <div 
            class="modal fade" id="staticBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p>Continuez sur Messenger pour créer un salon</p>
                            <button class="form-control btn-salon" >CONTINUEZ SUR MESSENGER</button>
                            <button class="btn btn-outline-light btn-salon-close" data-bs-dismiss="modal">ANNULER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
