const goods = {
    1: {
        id: 1,
        name: 'Кроссовки Asics',
        description: 'Для бега',
        sizes: '43',
        price: 5000,
        available: true,
    },
    2: {
        id: 2,
        name: 'Кроссовки Puma',
        description: 'Спортивные',
        sizes: '41',
        price: 4700,
        available: true,
    },
    3: {
        id: 3,
        name: 'Футболка P&B',
        description: 'С принтом Вазовски',
        sizes: 'M',
        price: 1500,
        available: true,
    },
    4: {
        id: 4,
        name: 'Футболка H&M',
        description: 'Белая',
        sizes: 'L',
        price: 1300,
        available: true,
    },
    5: {
        id: 5,
        name: 'Джоггеры P&B',
        description: 'Чёрные',
        sizes: '48',
        price: 2490,
        available: true,
    },
};

const goodsIndex = [goods[1], goods[2], goods[3], goods[4], goods[5]]

const basket = [
    {
        goodID: 2,
        amount: 2,
    },
    {
        goodID: 5,
        amount: 1,    
    },
];

console.log(basket)

function getGoodsInBascket(goodID, amount) {
   const product = {
    goodID: goodID,
    amount: amount
   }
   return basket.push(product)
};

getGoodsInBascket(1, 1)
getGoodsInBascket(5, 2)
getGoodsInBascket(3, 1)
console.log(basket)

function delGoodsInBasket(index) {
    return basket.splice(index, 1)
};

delGoodsInBasket(0)
console.log(basket)

function delBasket() {
    return basket.splice(0)
};

function totalAmountSumm() {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let i = 0; i < basket.length; i++) {
        totalSumm += goods[basket[i].goodID].price
        totalAmount += basket[i].amount
    }
    const total = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }
    return console.log(total)
};

totalAmountSumm()
delBasket()
console.log(basket)