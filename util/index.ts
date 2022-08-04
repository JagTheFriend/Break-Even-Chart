export function createLabels(): number[] {
  const labels: number[] = [];
  for (var i = 0; i < 9; i++) {
    labels.push(5_000 * i);
  }
  return labels;
}

export function getCostData(
  totalCost: number,
  totalUnitsSold: number,
  fixedCost: number
): number[] {
  // Find gradient
  const gradient = totalCost / totalUnitsSold;
  const data: number[] = [fixedCost];
  for (var i = 1; i < 9; i++) {
    data.push(gradient * (5_000 * i) + fixedCost);
  }
  return data;
}

export function getRevData(
  totalRevenue: number,
  totalUnitsSold: number
): number[] {
  // Find gradient
  const gradient = totalRevenue / totalUnitsSold;
  const data: number[] = [];
  for (var i = 0; i < 9; i++) {
    data.push(gradient * (5_000 * i));
  }
  return data;
}
