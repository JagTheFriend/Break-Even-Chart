export function getXAxis(totalUnitsSold: number): number {
  //@ts-ignore
  var isThereZero = totalUnitsSold.toString().match(/(0+)/);
  var unitsSold = 0;
  if (isThereZero && isThereZero[0].length !== 1) {
    const allZero = new Array(isThereZero[0].length).fill("0").join("");
    unitsSold = parseInt(totalUnitsSold.toString().replace(allZero, "0"));
  }
  return Math.ceil(unitsSold / 5) + 1;
}

export function createLabels(totalUnitsSold: number): number[] {
  const labels: number[] = [];
  for (var i = 0; i < getXAxis(totalUnitsSold); i++) {
    labels.push(5_000 * i);
  }
  return labels;
}

export function getCostData(
  totalCost: number,
  totalUnitsSold: number,
  fixedCost: number,
  labels: number[]
): number[] {
  // Find gradient
  const gradient = totalCost / totalUnitsSold;
  const data: number[] = [fixedCost];
  for (var i = 1; i < getXAxis(totalUnitsSold); i++) {
    data.push(gradient * (labels[1] * i) + fixedCost);
  }
  return data;
}

export function getRevData(
  totalRevenue: number,
  totalUnitsSold: number,
  labels: number[]
): number[] {
  // Find gradient
  const gradient = totalRevenue / totalUnitsSold;
  const data: number[] = [];
  for (var i = 0; i < getXAxis(totalUnitsSold); i++) {
    data.push(gradient * (labels[1] * i));
  }
  return data;
}
