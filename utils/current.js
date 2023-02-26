import { createContext, useContext, useState } from "react";

const context = createContext();
export function getContext() {
    return useContext(context)
}
export function CurrentProvider({ children }) {
    const [current, setCurrent] = useState(null);
    return <context.Provider value={[current, setCurrent]}>{children}</context.Provider>
}