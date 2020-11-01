//Como ele vai passar as informação pro reducer
export const setStore = (data) => ({
  type: "SET_STORE",
  data
})

export const setFavorites = (data) => ({
  type: "SET_FAVORITES",
  data
})

export const setCart = (data) => ({
  type: "SET_CART",
  data
})
