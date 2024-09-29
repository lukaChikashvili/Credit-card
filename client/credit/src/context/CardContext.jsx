import { createContext, useState } from "react";


export const CardContext = createContext();


export const CardProvider = ({ children }) => {

    // show mmodal
    const [modal, setModal] = useState(false);

    return (<CardContext.Provider value={{ modal, setModal }}>
         { children }
    </CardContext.Provider>)
}


