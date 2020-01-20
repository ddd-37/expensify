import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../redux/actions/filters";

const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToPros = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToPros)(ExpenseListFilters);
