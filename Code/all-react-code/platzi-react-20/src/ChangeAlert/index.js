import React from 'react'
import { WithStorageListener } from './WithStorageListener';

function ChangeAlert({ show, toggleShow })  {
    if (show) {
        return (
            <div>
                <p> Cambios cool</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a caergar la informacion</button>
            </div>
        ); 
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
