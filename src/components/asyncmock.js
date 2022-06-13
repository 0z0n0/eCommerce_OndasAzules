const products = [    
    { 
        id: '1m', 
        name: 'Alisha', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante7.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecho en vidrio'
    },
    { 
        id: '2m', 
        name: 'Kalinda', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante2.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '3m', 
        name: 'Darsha', 
        price: 1500, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante3.jpg', 
        stock: 10, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '4m', 
        name: 'Indira', 
        price: 1300, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante4.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '5m', 
        name: 'Trisha', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante5.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '6m', 
        name: 'Kilanda', 
        price: 1100, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante6.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '7pl', 
        name: 'Colorcat', 
        price: 1500, 
        category: 'PortaLlaves', 
        img:'../../assets/img/p llaves/pLlaves1.jpg', 
        stock: 25, 
        description:'Porta llave realizado en madera y vidrio con herrajes metalicos dorados. '
    },
    { 
        id: '8pl', 
        name: 'Captus', 
        price: 1500, 
        category: 'PortaLlaves', 
        img:'../../assets/img/p llaves/pLlaves3.jpg', 
        stock: 25, 
        description:'Porta llave realizado en madera y vidrio con herrajes metalicos dorados. '
    },
    { 
        id: '9pl', 
        name: 'Flowers', 
        price: 1500, 
        category: 'PortaLlaves', 
        img:'../../assets/img/p llaves/pLlaves4.jpg', 
        stock: 25, 
        description:'Porta llave realizado en madera y vidrio con herrajes metalicos dorados. '
    },
    { 
        id: '10pl', 
        name: 'Simpsons', 
        price: 1500, 
        category: 'PortaLlaves', 
        img:'../../assets/img/p llaves/pLlaves5.jpg', 
        stock: 25, 
        description:'Porta llave realizado en madera y vidrio con herrajes metalicos dorados. '
    },
    { 
        id: '11pl', 
        name: 'Mafalda', 
        price: 1500, 
        category: 'PortaLlaves', 
        img:'../../assets/img/p llaves/pLlaves6.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en madera y vidrio con herrajes metalicos dorados. '
    },
    { 
        id: '2ps', 
        name: 'Flores', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio2.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado vidrio. '
    },
    { 
        id: '3ps', 
        name: 'Mandala', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio3.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en madera y vidrio. '
    },
    { 
        id: '4ps', 
        name: 'Colorido', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio4.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en madera y vidrio. '
    },
    { 
        id: '5ps', 
        name: 'Flores', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio5.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en vidrio. '
    },
    { 
        id: '6ps', 
        name: 'Grid', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio6.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en vidrio. '
    },
    { 
        id: '7ps', 
        name: 'Boxs', 
        price: 1500, 
        category: 'PortaSahumerio', 
        img:'../../assets/img/p sahumerios/pSahumerio7.jpg', 
        stock: 25, 
        description:'Porta sahumerio realizado en madera y vidrio. '
    },
    { 
        id: '1pv', 
        name: 'San Andrea', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas1.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },
    { 
        id: '2pv', 
        name: 'Good Vibes', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas2.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },
    { 
        id: '3pv', 
        name: 'D10S', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas3.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },
    { 
        id: '4pv', 
        name: 'Maradona', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas4.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },
    { 
        id: '5pv', 
        name: 'Couple', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas5.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },
    { 
        id: '6pv', 
        name: 'Yoga', 
        price: 1500, 
        category: 'PortaVelas', 
        img:'../../assets/img/p velas/pVelas6.jpg', 
        stock: 25, 
        description:'Porta velas realizado en madera y vidrio. '
    },

]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}