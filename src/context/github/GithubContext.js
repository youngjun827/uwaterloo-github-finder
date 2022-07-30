import React, {createContext, useReducer} from "react";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubContextProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext