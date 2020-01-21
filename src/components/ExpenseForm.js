import React, { Component } from "react";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    amount: "",
    note: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({
      note
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
    console.log("TCL: ExpenseForm -> amount", amount);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for you expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
