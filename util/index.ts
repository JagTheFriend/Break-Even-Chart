export function getXAxis(totalUnitsSold: number): number {
  //@ts-ignore
  var isThereZero = totalUnitsSold.toString().match(/(0+)/);
  var unitsSold = 0;
  if (isThereZero && isThereZero[0].length !== 1) {
    const allZero = new Array(isThereZero[0].length).fill("0").join("");
    var unitsSold_ = totalUnitsSold.toString().replace(allZero, "");
    if (unitsSold_.length === 1) {
      unitsSold = parseInt(`${unitsSold_}0`);
    } else {
      unitsSold = parseInt(unitsSold_);
    }
  }
  return Math.ceil(unitsSold / 5) + 1;
}

export function roundUpNumber(num: string): number {
  const first2Numbers = num.slice(0, 2);
  return parseFloat(
    num.replace(first2Numbers, `${first2Numbers[0]}.${first2Numbers[1]}`)
  );
}

export function labelIncrement(totalUnitsSold: string): number {
  return (
    parseFloat(
      Math.ceil(roundUpNumber(totalUnitsSold)) +
        "0".repeat(totalUnitsSold.length - 1)
    ) / 5
  );
}

export function createLabels(totalUnitsSold: number): number[] {
  const labels: number[] = [];
  for (var i = 0; i < getXAxis(totalUnitsSold); i++) {
    labels.push(labelIncrement(totalUnitsSold.toString()) * i);
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
