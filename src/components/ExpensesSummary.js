import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <p>Viewing {expensesCount} {expenseWord} totaling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: selectedExpenses.length,
        expensesTotal: expensesTotal(selectedExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);