import React from 'react';
import "./results-window.css"

export default function Results_window(){
    return(
        <div>
            <div className="container-label">
                <div className='container-inline-flex'>
                    <div className="container-inline-flex container-math-label">
                        <p>Математика</p>
                    </div>
                    <div className="container-inline-flex container-parents-label">
                        <p>Қорытындысы</p>
                    </div>
                </div>
            </div>
            <div className="grey-br container-inline-block"></div>
            <div className="container-orange container-w-80 container-inline-flex">
            </div>

            <div className="container-math-window">
            </div>
        </div>
    )
}