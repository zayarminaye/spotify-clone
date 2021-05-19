import React, { createContext, useContext, useReducer } from 'react';

// preparing the data layer for what is about to come
export const DataLayerContext = createContext();


export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {/* children is for what is wrapped inside <App/> component in the index.js */}
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);