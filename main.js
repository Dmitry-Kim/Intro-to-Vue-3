const app = Vue.createApp({
    data() {
        return {
         cart: 0,
         product: "Socks",
         brand: "Vue Mastery",
         description: "something asdadasd",
         image: './assets/images/socks_green.jpg',
         url: 'https://www.vuemastery.com/', 
         inventory: 2,
         onSale: false,
         details: ['50% cotton', '30% whool', '20% polyester'],
         variants: [
             {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
             {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
         ],
         sizes: [24, 25, 26, 27, 28],
    }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        }
    },

    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart() {
            if(this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
                this.image = variantImage
        }
    }



    })