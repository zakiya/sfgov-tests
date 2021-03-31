let titleText = (originOrDestination, letter) => {
  let slug1 = originOrDestination;

  if (originOrDestination === "O") {
    slug1 = "origin";
  } else if (originOrDestination === "D") {
    slug1 = "destination";
  }

  return slug1 + letter;
};
export default titleText;
