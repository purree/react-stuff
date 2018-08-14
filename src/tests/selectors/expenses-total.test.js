import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return the total of all expenses', () => {
    expect(selectExpensesTotal(expenses)).toBeGreaterThan(0); 
});

test('should return the total of one expense', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should return the total of one expense', () => {
    expect(selectExpensesTotal([expenses[0], expenses[1]])).toBe(expenses[0].amount + expenses[1].amount);
});

test('should return 0 with no expenses', () => {
    expect(selectExpensesTotal([])).toBe(0);
});