let titleText = (originOrDestination, letter) => {
  let slug1 = originOrDestination;

  if (originOrDestination === "O") {
    slug1 = "Origin ";
  } else if (originOrDestination === "D") {
    slug1 = "Destination ";
  }

  return slug1 + letter;
};
export default titleText;
