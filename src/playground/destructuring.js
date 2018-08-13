const person = {
    name: 'Gustav',
    age: 24,
    location: {
        city: 'Stockholm',
        temp: '27˚'
    }
};

const { city, temp: hotness } = person.location;
if (city) console.log(`Temprature in ${city} is ${hotness}`);

const book = {
    title: 'Bible',
    author: 'Jesus',
    publisher: {
        name: 'kyrkan'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

const adress = ['1299 8 Juniper Steet', 'Philly', 'Pennsylvania', '19147'];
const [street, cities, state, zip] = adress;


console.log(`You are in ${street}, ${zip}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [ coffeeType, ,price] = item;
console.log(`${coffeeType} costs ${price}`);