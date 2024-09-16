export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert string to Date object

  // Format date as 'Month Day, Year'
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
