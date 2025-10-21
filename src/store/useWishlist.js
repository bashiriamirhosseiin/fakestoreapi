import {create} from 'zustand'

const useWishlist = create((set) => {
    const prevWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    return {
        wishlist: prevWishlist,
        add: (id) => {
            set((state) => {
                return { wishlist: [...state.wishlist, id]};
            })
        },
        remove: (id) => {
            set((state) => {
                const newWishlist = state.wishlist.filter(itemId => itemId !== id);
                return { wishlist: newWishlist };
            });
        },
        clear: () => {
            set(() => {
                return { wishlist: [] };
            });
        }
    }
})

export default useWishlist;