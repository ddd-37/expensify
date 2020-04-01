import selectExpenses from "../../redux/selectors/expenses";
import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Cat food",
    note: "",
    amount: 195,
    createdAt: 
  },
  {
    id: "2",
    description: "Human food",
    note: "",
    amount: 1295,
    createdAt: 1000
  },
  {
    id: "3",
    description: "Rent",
    note: "",
    amount: 11195,
    createdAt: -1000
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "o",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
});
