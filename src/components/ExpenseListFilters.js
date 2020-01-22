import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../redux/actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    console.log(
      "TCL: ExpenseListFilters -> onDatesChange -> startDate",
      startDate
    );
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState({
      calendarFocused
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === "date" && this.props.dispatch(sortByDate());
            e.target.value === "amount" && this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={"startDatePicker"}
          endDate={this.props.filters.endDate}
          endDateId={"endDatePicker"}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToPros = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToPros)(ExpenseListFilters);
