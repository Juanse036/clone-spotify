import {create} from "zustand"

export const usePlayerStore = create((set) => ({
    isPlayins:false,
    currentMusic: { 
        playlist: null,
        song: null,
        songs:[],
        id:''
    },
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic})
}))