export const state = () => ({
  categories: [],
  goods: [],
  cart:  [],
  cartOpen: false,
  ordered: false,
  sortBy: 'price',
  loading: false
})

export const mutations =  {
  setGoods(state, goods) {
    state.goods = goods
  },
  setCart(state, cart) {
    state.cart = cart
    localStorage.setItem('posts', JSON.stringify(cart))
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  changeCategory(state, id) {
    state.activeCategory = id
  },
  addToCart(state, id) {
    state.goods.forEach(item => {
      if (item.id == id) {
        state.cart.push(item)
      }
    })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeFromCart(state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  clearCart(state) {
    state.cart = []
  },
  openCloseCart(state) {
    state.cartOpen = !state.cartOpen
  },
  order(state) {
    state.ordered = !state.ordered;
    state.cart = [];
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  sortByPrice(state, opt) {
    if (opt == 'цене') {
      state.cart = state.cart.sort((a,b) => {
      if (a.price > b.price) {return -1}
      if (a.price < b.price) {return 1}
      if (a.price == b.price){return 0}
    })
    }
  },
  changeSort(state, type) {
    if (type == 'цене') {
      state.sortBy = 'price'
    } else {
      state.sortBy = 'popular'
    }
  },
  loadingSwitcher(state) {
    state.loading = !state.loading
  }
}

export const actions = {
  async fetchGoods({commit, state}, id) {
    commit('loadingSwitcher')
    const resp = await fetch(`https://frontend-test.idaproject.com/api/product?category=${id}`)
    const goods = await resp.json()
    commit('setGoods', goods)
    commit('loadingSwitcher')
  },
  async fetchCategories({commit}) {
    const resp = await fetch('https://frontend-test.idaproject.com/api/product-category')
    const categories = await resp.json()
    commit('setCategories', categories)
  },
  async fetchCart({commit}) {
    const cart = await JSON.parse(localStorage.getItem('cart'))

    if (cart) {
      commit('setCart', cart)
    }
  },
  sendOrder({commit}) {
    commit('order');
    setTimeout(()=>{commit('order')}, 2000)
  },
}

export const getters = {
  getGoods: s => s.goods,
  getCart: s => s.cart,
  getCategories: s=> s.categories,
  getAmountOfProductsInCart: s => s.cart.length,
  getIdsInCart: s => {
    const ids = [];
    s.cart.forEach(item => {
      ids.push(item.id)
    })

    return ids
  },
  sortBy: s => s.sortBy,
  getItemsInCart: s => s.cart,
  isItCartOpen: s => s.cartOpen,
  isItOrdered: s => s.ordered,
  sortByPrice: s => {
    let goods = [...s.goods];

    return goods.sort((a,b) => {
      if (a.price > b.price) {return -1}
      if (a.price < b.price) {return 1}
      if (a.price == b.price){return 0}
    })
  },
  sortByPopular: s => {
    let goods = [...s.goods];

    return goods.sort((a,b) => {
      if (a.rating > b.rating) {return -1}
      if (a.rating < b.rating) {return 1}
      if (a.rating == b.rating){return 0}
    })
  },
  loading: s => s.loading
}