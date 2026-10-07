import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react'
import type { Product } from '../data/mockData'

export interface CartItem { product: Product; qty: number }

interface State { items: CartItem[] }
type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; id: string }
  | { type: 'INCREMENT'; id: string }
  | { type: 'DECREMENT'; id: string }
  | { type: 'CLEAR' }
  | { type: 'LOAD'; items: CartItem[] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOAD': return { items: action.items }
    case 'ADD': {
      const exists = state.items.find(i => i.product.id === action.product.id)
      if (exists) return { items: state.items.map(i => i.product.id === action.product.id ? { ...i, qty: i.qty + 1 } : i) }
      return { items: [...state.items, { product: action.product, qty: 1 }] }
    }
    case 'REMOVE': return { items: state.items.filter(i => i.product.id !== action.id) }
    case 'INCREMENT': return { items: state.items.map(i => i.product.id === action.id ? { ...i, qty: i.qty + 1 } : i) }
    case 'DECREMENT': return { items: state.items.map(i => i.product.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i) }
    case 'CLEAR': return { items: [] }
    default: return state
  }
}

interface CartCtx {
  items: CartItem[]
  add: (p: Product) => void
  remove: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clear: () => void
  total: number
  count: number
}

const Ctx = createContext<CartCtx | null>(null)
const KEY = 'dn247_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved) dispatch({ type: 'LOAD', items: JSON.parse(saved) })
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state.items))
  }, [state.items])

  const total = state.items.reduce((s, i) => s + i.product.price * i.qty, 0)
  const count = state.items.reduce((s, i) => s + i.qty, 0)

  return (
    <Ctx.Provider value={{
      items: state.items,
      add: p => dispatch({ type: 'ADD', product: p }),
      remove: id => dispatch({ type: 'REMOVE', id }),
      increment: id => dispatch({ type: 'INCREMENT', id }),
      decrement: id => dispatch({ type: 'DECREMENT', id }),
      clear: () => dispatch({ type: 'CLEAR' }),
      total, count,
    }}>
      {children}
    </Ctx.Provider>
  )
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
