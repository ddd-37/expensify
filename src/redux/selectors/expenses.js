// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      // If start date is not a number, we don't need to care about the startDate
      // OR the created date occured after the startDate we're looking for
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;

      // If start date is not a number, we don't need to care about the startDate
      // OR the created date occured before the startDate we're looking for
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }

      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
