import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import userAvatarFilled from '@iconify-icons/carbon/user-avatar-filled';
export default function Profil() {
    return (
        <div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrollingProfil" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <div class="offcanvas-header">
                        <button type="button" class="edit text-reset " >
                            <i class="fas fa-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                            <span className="mx-4 home-span">Profil</span>
                        </button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div className="img-profil mt-4">
                        <Icon icon={userAvatarFilled} color="#b1b3b5" width="251" height="251"  />
                    </div>
                    <div className="mt-4">
                        <p className="pt-4 px-3 info-p">Nom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
