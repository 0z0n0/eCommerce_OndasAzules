const products = [
    //Consulta: No puedo mostrar las imagenes almacenadas de forma local
    // en el render,¿Cómo se hace?
    { 
        id: '1', 
        name: 'Alisha', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante1.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '2', 
        name: 'Kalinda', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante2.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '3', 
        name: 'Darsha', 
        price: 1500, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante3.jpg', 
        stock: 10, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '4', 
        name: 'Indira', 
        price: 1300, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante4.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '5', 
        name: 'Trisha', 
        price: 1000, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante5.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    },
    { 
        id: '6',  
        name: 'Kilanda', 
        price: 1100, 
        category: 'colgantes', 
        img:'../../assets/img/colgantes/colgante6.jpg', 
        stock: 25, 
        description:'Mandala colgante, hecha en vidrio'
    }
    
]


export const getProducts = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const query= id ? products.find(producto=> producto.id === id): products;
            resolve(query);
        }, 2000)
    })
}