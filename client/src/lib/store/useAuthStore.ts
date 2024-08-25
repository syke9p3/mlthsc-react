import { create } from 'zustand'
import { User } from '../types/types'


type AuthState = {
    user: User | null
    login: (user: User) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (user: User) => set({ user: user }),
    logout: () => set({ user: null })
}))