import moment from 'moment';

export default (expenses, { text, sortBy, tag, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const tagMatch = tag ? expense.tag === tag : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch && tagMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}
