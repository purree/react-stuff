import moment from 'moment';

export default [{
    id: '1',
    description: 'Banana',
    note: '',
    tag: 'BLUE',
    amount: 90,
    createdAt: 0
}, {
    id: '2',
    description: 'Apple',
    note: '',
    tag: 'GREEN',
    amount: 200,
    createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
    id: '3',
    description: 'Pear',
    note: '',
    tag: 'YELLOW',
    amount: 5000,
    createdAt: moment(0).add(5, 'days').valueOf()
}];
