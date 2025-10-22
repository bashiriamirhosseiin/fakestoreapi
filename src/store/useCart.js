import { create } from 'zustand'

const useCart = create((set)=>{
    const prevCart = JSON.parse(localStorage.getItem("cart")) || [];
    return {
        cart: prevCart,
        add: (id) => {
            set((state) => {
               return {cart: [...state.cart, {id: id, count: 1}]} 
            })
        },
        remove: (id) => {
            set((state) => {
                const newCart = state.cart.filter(item => item.id != id)
                return {cart: newCart}
            })
        },
        clear: () => {
            set(()=> {
                return {cart: []}
            })
            
        },
        increase: (id) => {
            set((state) => {
                const newCart = state.cart.map((item)=>{
                    return item.id == id ? {...item, count: item.count + 1} : item
                })
                return {cart: newCart}
            })
        },
        decrease: (id) => {
            set((state) => {
                const newCart = state.cart.map((item) => {
                    return item.id == id ? {...item, count: Math.max(1, item.count-1)} : item
                })
                return {cart: newCart}
            })
        }
    }
})

export default useCart