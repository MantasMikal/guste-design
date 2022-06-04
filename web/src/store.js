import create from 'zustand'
import { persist } from 'zustand/middleware'
import createContext from 'zustand/context'

const { Provider, useStore } = createContext()

const findItemById = (itemToFind, items) => {
  if (!items || !itemToFind) return -1
  let index = -1
  items.forEach((item, i) => {
    if (item.id === itemToFind || item.id === itemToFind.id) {
      index = i
    }
  })
  return index
}

export const createStore = () =>
  create(
    persist(
      (set, get) => ({
        favorites: [],
        toggleFavorite: (favorite) =>
          set(({ favorites }) => {
            const existId = findItemById(favorite, favorites)
            if (existId > -1) {
              return {
                favorites: favorites.filter((item) => item.id !== favorite.id)
              }
            }
            return {
              favorites: [favorite, ...favorites]
            }
          }),
        doesExist: (id) => {
          const index = findItemById(id, get().favorites)
          return index > -1
        },
        removeAll: () => set({ favorites: new Set() })
      }),
      {
        name: 'APP', // unique name
        getStorage: () => sessionStorage // (optional) by default the 'localStorage' is used
      }
    )
  )

export { Provider, useStore }
