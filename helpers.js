export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert string to Date object

  // Format date as 'Month Day, Year'
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
export const formatDate1 = (unixTimestamp) => {
  // Convert Unix timestamp to milliseconds
  let timestamp = unixTimestamp * 1000;

  // Create a Date object
  let date = new Date(timestamp);

  // Format the date
  let options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
