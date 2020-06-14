interface GradientPoint {
  offset?: string;
  color: string;
}

interface Gradient {
  points: GradientPoint[];
  linear(sideOrCorner?: string): string;
}

export function makeGradient(points: GradientPoint[]): Gradient {
  return {
    points,
    linear: (sideOrCorner) => getLinearGradient(points, sideOrCorner),
  };
}

function getLinearGradient(points: GradientPoint[], sideOrCorner: string = 'to bottom') {
  return `linear-gradient(${sideOrCorner}, ${points
    .map(({ color, offset }) => [color, offset].filter(Boolean).join(' '))
    .join(', ')})`;
}
