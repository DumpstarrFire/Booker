import { createContext, useContext } from 'react'

export interface Toast {
  id: number
  type: 'success' | 'error' | 'info'
  message: string
}

export interface ToastCtx {
  addToast: (type: Toast['type'], message: string) => void
}

export const ToastContext = createContext<ToastCtx>({ addToast: () => {} })
export const useToast = () => useContext(ToastContext)
