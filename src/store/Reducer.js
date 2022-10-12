export const reducer = (state, action) => {
    switch (action.type) {
      //case 'carrito':
        //return { ...state, carrito: action.payload }
      default:
        return state
    }
  }

export const reducerPersist = (state, action) => {
    switch (action.type) {
      case 'setCarritoProductos':
        return { ...state, carritoProductos: action.payload }
      default:
        return state
    }
  }
  