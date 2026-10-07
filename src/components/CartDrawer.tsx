import { useState } from 'react'
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, remove, increment, decrement, total, clear } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-white flex flex-col h-full shadow-2xl animate-slide-in-right">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="font-semibold text-ink">Giỏ hàng ({items.length})</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-md hover:bg-slate-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-500">
              <ShoppingCart className="w-12 h-12 opacity-30" />
              <p className="text-sm">Giỏ hàng trống</p>
            </div>
          ) : (
            items.map(({ product: p, qty }) => (
              <div key={p.id} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-ink line-clamp-2 mb-1">{p.name}</p>
                  <p className="text-xs text-muted mb-2">{p.brand}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => decrement(p.id)} className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{qty}</span>
                      <button onClick={() => increment(p.id)} className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-accent">
                        {(p.price * qty).toLocaleString('vi-VN')}₫
                      </span>
                      <button onClick={() => remove(p.id)} className="p-1 text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div className="px-4 py-4 border-t border-slate-200 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">Tạm tính</span>
              <span className="font-bold text-lg text-ink">{total.toLocaleString('vi-VN')}₫</span>
            </div>
            <a
              href={`https://zalo.me/0909123456?text=Tôi muốn đặt hàng: ${items.map(i => `${i.product.name} x${i.qty}`).join(', ')}`}
              target="_blank" rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 h-11 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              Đặt hàng qua Zalo
            </a>
            <button onClick={clear} className="w-full text-xs text-muted hover:text-ink transition-colors py-1">
              Xóa giỏ hàng
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
