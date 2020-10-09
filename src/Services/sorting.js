// sorting arrays by task name
export function compareUpName(a, b) {
  const dataA = a.Task_Name.toUpperCase();
  const dataB = b.Task_Name.toUpperCase();

  let comparison = 0;
  if (dataA > dataB) {
    comparison = 1;
  } else if (dataA < dataB) {
    comparison = -1;
  }
  return comparison;
}
export function compareDownName(a, b) {
  const dataA = a.Task_Name.toUpperCase();
  const dataB = b.Task_Name.toUpperCase();

  let comparison = 0;
  if (dataA < dataB) {
    comparison = 1;
  } else if (dataA > dataB) {
    comparison = -1;
  }
  return comparison;
}
// sorting arrays by priority
export function compareUpPriority(a, b) {
    let dataA;
    let dataB;
  switch (a.Priority.toUpperCase()) {
    case "LOW":
      dataA = 1;
      break;
    case "MEDIUM":
        dataA = 2;
      break;
      case "HIGH":
        dataA = 3;
      break;
    default:
      break;
  }
  switch (b.Priority.toUpperCase()) {
    case "LOW":
      dataB = 1;
      break;
    case "MEDIUM":
        dataB = 2;
      break;
      case "HIGH":
        dataB = 3;
      break;
      default:
      break;
  }

  let comparison = 0;
  if (dataA > dataB) {
    comparison = 1;
  } else if (dataA < dataB) {
    comparison = -1;
  }
  return comparison;
}
///// drugie???
export function compareDownPriority(a, b) {
    let dataA;
    let dataB;
  switch (a.Priority.toUpperCase()) {
    case "LOW":
      dataA = 1;
      break;
    case "MEDIUM":
        dataA = 2;
      break;
      case "HIGH":
        dataA = 3;
      break;
      default:
      break;
  }
  switch (b.Priority.toUpperCase()) {
    case "LOW":
      dataB = 1;
      break;
    case "MEDIUM":
        dataB = 2;
      break;
      case "HIGH":
        dataB = 3;
      break;
      default:
      break;
  }

  let comparison = 0;
  if (dataA > dataB) {
    comparison = -1;
  } else if (dataA < dataB) {
    comparison = 1;
  }
  return comparison;
}




// sorting arrays by done status
export function compareUpStatus(a, b) {
  const dataA = a.Status;
  const dataB = b.Status;
  return (dataA === dataB)? 0 : dataA? 1 : -1;
}
export function compareDownStatus(a, b) {
  const dataA = a.Status;
  const dataB = b.Status;
  return (dataA === dataB)? 0 : dataA? -1 : 1;
}
