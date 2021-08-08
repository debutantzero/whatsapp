import React from 'react'
import Left from './Left'
import RenderDefault from './RenderDefault'
import Salon from './windows/Salon'


export default function Home() {
    return (
        <div>
            <div className="home-render">

                <div className="home-left-render">
                    <Left />
                </div>

                <div className="home-right-render">
                    <Salon />
                    <RenderDefault />
                </div>

            </div>
        </div>
    )
}
