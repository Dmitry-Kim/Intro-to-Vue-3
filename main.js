const app = Vue.createApp({
    data() {
        return {
         product: "Socks",
         description: "something asdadasd",
         image: './assets/images/socks_green.jpg',
         url: 'https://www.vuemastery.com/', 
         inventory: 2,
         onSale: false,
         details: ['50% cotton', '30% whool', '20% polyester'],
         variants: [
             {id: 2234, color: 'green'},
             {id: 2235, color: 'blue'},
         ],
         sizes: [24, 25, 26, 27, 28],
    }
    }
    })