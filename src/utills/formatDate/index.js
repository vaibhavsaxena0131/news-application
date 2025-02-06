function formatDate(dateString, returnOutput, monthType) {
  const date = new Date(dateString);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();
  const shortYear = year.toString().slice(-2);

  let month;
  if (monthType === "short" || monthType === "long") {
    month = date.toLocaleString("default", { month: monthType });
  } else {
    month = ("0" + (date.getMonth() + 1)).slice(-2);
  }

  const dateObj = {
    mm: month,
    dd: day,
    yyyy: year,
    yy: shortYear,
  };

  let newDate = "";
  let tempStr = "";

  for (let i = 0; i < returnOutput.length; i++) {
    if (/[a-zA-Z]/.test(returnOutput[i])) {
      tempStr += returnOutput[i];
    } else {
      if (tempStr) {
        newDate += dateObj[tempStr] || tempStr;
        tempStr = "";
      }
      newDate += returnOutput[i];
    }
  }

  if (tempStr) {
    newDate += dateObj[tempStr] || tempStr;
  }

  return newDate;
}

export default formatDate;
