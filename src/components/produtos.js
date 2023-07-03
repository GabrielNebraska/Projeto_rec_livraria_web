import { ref } from 'vue'


export const produtos = ref([
    {
        id: 1,
        nome: 'Capão pecado',
        quant: 1,
        preco: 50.00,
        img: 'https://m.media-amazon.com/images/P/B08MDG34DQ.01._SCLZZZZZZZ_SX500_.jpg',
        precoTotal() { return this.preco * this.quant} ,
        categoria: livro,

    },
    {
        id: 1,
        nome: 'Manual prático do ódio',
        quant: 1,
        preco: 50.00,
        img: 'https://m.media-amazon.com/images/I/41iZTGs5OpL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        precoTotal() { return this.preco * this.quant} ,
        categoria: livro,

    },
    {
        id: 1,
        nome: 'Ninguém é inocente em SP',
        quant: 1,
        preco: 50.00,
        img: 'https://m.media-amazon.com/images/P/B08NFC7WHK.01._SCLZZZZZZZ_SX500_.jpg',
        precoTotal() { return this.preco * this.quant} ,
        categoria: livro,

    },
    {
        id: 1,
        nome: 'Os ricos também morrem',
        quant: 1,
        preco: 50.00,
        img: 'https://m.media-amazon.com/images/I/71HSk47eEQL._AC_UF1000,1000_QL80_.jpg',
        precoTotal() { return this.preco * this.quant} ,
        categoria: livro,

    },
    
])