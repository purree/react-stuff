import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setTagFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };
    handleDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onOrderChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if ((e.target.value === 'amount')) {
            this.props.sortByAmount();
        }
    }
    onTagChange = (e) => {
        if (e.target.value === this.props.filters.tag) {
            this.props.setTagFilter();
        } else {
            this.props.setTagFilter(e.target.value);
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            placeholder="Search expenses"
                            className="text-input"
                            value={this.props.filters.text}
                            type="text"
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onOrderChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.tag}
                            onChange={this.onTagChange}
                        >
                            <option value="BLUE">Blue</option>
                            <option value="RED">Red</option>
                            <option value="GREEN">Green</option>
                            <option value="YELLOW">Yellow</option>
                            <option value="ORANGE">Orange</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={'1'}
                            endDate={this.props.filters.endDate}
                            endDateId={'2'}
                            onDatesChange={this.handleDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => (false)}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setTagFilter: (tag) => dispatch(setTagFilter(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);