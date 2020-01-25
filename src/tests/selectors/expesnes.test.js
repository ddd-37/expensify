import selectExpenses from "../../redux/selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 12295,
    createdAt: -1002
  },
  {
    id: "3",
    description: "Car",
    note: "",
    amount: 3495,
    createdAt: 1202
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
