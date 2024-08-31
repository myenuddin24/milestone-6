// Module---31

//video------1,2


const data = [{id : 1, name:'abul', address: 'kochu khet'}];

console.log(data[0].address);


const products = {
    count: 50000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000}
        
    ]
}


console.log(products.data[1].price);




const user = {
    id: 50002,
    name: 'ujjol da',
    address: {
        city:'Chittagong',
        country: 'Bangladesh'
    }
}

console.log(user.address.street?.city);
//(.)dot chinnor age diye (?)ques cinno boshale ERROR ashbe na.



//video------3



// map
const numbers = [4, 5, 2, 8, 10];

// function doubleIt(num){
//     return num*3;
// }

// console.log(doubleIt(numbers))

// const double2 = x => x*2;

const result= numbers.map(n => n * 4 );

console.log(result)


// const doubled = [];
// for(const num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }

// console.log(doubled)



const friends = ['Tom', 'Jhon', 'Rokey', 'Moky']

const length = friends.map(num => num.length);
console.log(length)

const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter)





// video---4



// forEach
const numbers1 = [1, 2, 3, 4, 15];
const result1 = numbers1.forEach(n => n * 3);
console.log(result1);
// prottek element ke ney but kono return kore na.




// filter
const players = [72, 53, 62, 59, 90];
const selected = players.filter(player => player > 60);
console.log(selected);
const selected1 = players.filter(p => p % 2 == 1);
console.log(selected1);
// prottek element ke ney and function er kaj kore and sheshe aray return kore.




// find
const players1 = [72, 53, 62, 59, 90];

const selected2 = players1.find(pl => pl > 50 );
console.log(selected2)
// prottek element ke ney and function er kaj kore and function er shotter shate jotogula matching koruk na keno find shudu matching howa first element ke return kore.





// video---5



// reduce
const numbers2 = [1, 3, 6, 10, 15, 20];
const total = numbers2.reduce((previous, current) => previous+ current , 0);
console.log(total);
const sum = numbers2.reduce((p, c) => p * c , 0);
console.log(sum);





const products1 = [
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'dell', price: 45000},
    {id:3, name: 'hp', price: 40000},
    {id:4, name: 'mac', price: 150000},
]
// map
const names = products1.map(name => name.name)
console.log(names)
const prices = products1.map(p =>p.price)
console.log(prices)

// foreEach
products1.forEach(p => console.log(p.id))

// filter 
const expensive = products1.filter(p => p.price > 50000)
console.log(expensive)

// find
const affordable = products1.find(prodct => prodct.price < 50000)
console.log(affordable)

// reduce 
const total1 = products1.reduce((p, c) => p+c.price , 0)
console.log(total1)




// video---6




// Make a class 
// A class contains a proparty and a method.
class Teacher{
    constructor(name, subject){
        this.name = name ,
        this.subject = subject 
    }
    lecture(){
        console.log('Sir is teaching')
    }
}

const tapan = new Teacher('Tapan', 'Physics')
console.log(tapan)



// video---7




class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price ;
    }
    move(){
        console.log('gari cole na')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketprice){
        super(name, price);
        this.seat = seat ;
        this.ticketprice = ticketprice ;
    }
    
}


class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load ;
    }

}




// video---8



class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
    activity(){
        this.sleep()
    }
}

const kodom = new person('kodom ali', 18)
console.log(kodom)
kodom.sleep()
const badam = new person('Kacha badam', 21)
badam.activity()



const person1 = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'third'
}

console.log(person1.job)
// console.log(person1[job])----> Error ashbe.
console.log(person1['job'])
// uporer niyom a othoba nicher moto hote hobe
const propetion = 'job'
console.log(person1[propetion])

console.log(person1['3'])
console.log(person1[3])
const numb = '3'
console.log(person1[numb])
// console.log(person1.3)-----> Error ashbe.
