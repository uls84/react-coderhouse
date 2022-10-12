import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer, reducerPersist } from './Reducer'

//
// NO PERSISTION
//
const initialState = {
   
};
const StateContext = createContext(initialState);

const noPersist = (reduce) => {
  return (state, action) => {
    const newState = reduce(state, action);
    return newState;
  }
}

const Context = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(noPersist(reducer), initialState)}>
      {children}
    </StateContext.Provider>
  )
}
Context.defaultProps = {
  children: null
}
Context.propTypes = {
  children: PropTypes.element
}

const useStore = () => useContext(StateContext);

//
// PERSISTION
//
const initialStatePersist = {
  'carritoProductos': ['prueba']
};
const StateContextPersist = createContext(initialStatePersist);

const persist = (reduce) => {
  return (state, action) => {
    const newState = reduce(state, action);
    localStorage.setItem('react-store', JSON.stringify(newState));
    return newState;
  }
}

const ContextPersist = ({ children }) => {
  const cache = localStorage.getItem('react-store');
  const initialState = cache ? JSON.parse(cache) : initialStatePersist;
  return (
    <StateContextPersist.Provider value={useReducer(persist(reducerPersist), initialState)}>
      {children}
    </StateContextPersist.Provider>
  )
}
ContextPersist.defaultProps = {
  children: null
}
ContextPersist.propTypes = {
  children: PropTypes.element
}

const useStorePersist = () => useContext(StateContextPersist);

export {
  Context, useStore,
  ContextPersist, useStorePersist
}
