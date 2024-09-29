import { createContext, useState } from "react";


export const CardContext = createContext();


export const CardProvider = ({ children }) => {

    // show mmodal
    const [modal, setModal] = useState(false);
    // preset
    const [preset, setPreset] = useState('night');

    return (<CardContext.Provider value={{ modal, setModal, preset, setPreset }}>
         { children }
    </CardContext.Provider>)
}


