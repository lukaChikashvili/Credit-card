import { createContext, useState } from "react";
import red from '../assets/red.jpg'


export const CardContext = createContext();


export const CardProvider = ({ children }) => {

    // show mmodal
    const [modal, setModal] = useState(false);
    // preset
    const [preset, setPreset] = useState('warehouse');

    // backgrounds
    const [design, setDesign] = useState(red);

    // card designs
    const [backModal, setBackModal] = useState(false);

    return (<CardContext.Provider value={{ modal, setModal, preset, 
        setPreset, backModal, setBackModal , design, setDesign
    }}>
         { children }
    </CardContext.Provider>)
}


