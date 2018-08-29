import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ?
            (
                <div className="list-item list-item--message">
                <p>{props.totalExpenses === 0 ? ('Add some Expenses!') : ('All expenses hiding behind filters') }</p>
                </div>
            ) : (
                props.expenses.map(
                    (expense) => (<ExpensesListItem key={expense.id} {...expense} />)
                )
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        totalExpenses: state.expenses.length,
    };
};

export default connect(mapStateToProps)(ExpensesList);