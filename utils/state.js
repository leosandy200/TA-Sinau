import Context from "@mui/base/TabsUnstyled/TabsContext";
import { createContext, useContext, useState } from "react";

export default {
    _context: createContext(),
    getContext: function () {
        return useContext(this._context)
    },
    currentProvider: function (params) {
        const [current, setCurrent] = useState(null);
        return <Context.Provider value={[current, setCurrent]}></Context.Provider>  
    }
}