import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super();

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: false
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }));
        } else {
            this.setState(() => ({ error: false }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">Please fill in the description and amount</p>}
                    <input
                        className="text-input"
                        value={this.state.description}
                        type="text"
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        type="text"
                        placeholder="Amount"
                    />
                    <SingleDatePicker
                        id={'10'}
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        type="text"
                        placeholder="Add a note for this expense!">
                    </textarea>
                    <div>
                        <button className="button">Submit</button>
                    </div>
                </form>
        )
    }
}