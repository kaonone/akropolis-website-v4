type Color = string;

interface GradientPoint {
  offset: string;
  color: Color;
}

interface Gradient {
  points: GradientPoint[];
  linear(sideOrCorner?: string): string;
}

export function makeGradient(points: Array<GradientPoint | Color>): Gradient {
  return {
    points: points.map(toGradientPoint),
    linear: (sideOrCorner) => getLinearGradient(points, sideOrCorner),
  };
}

function getLinearGradient(points: Array<GradientPoint | Color>, sideOrCorner: string = 'to bottom') {
  return `linear-gradient(${sideOrCorner}, ${points
    .map((point, index) => {
      const { color, offset } = toGradientPoint(point, index, points);
      return [color, offset].filter(Boolean).join(' ');
    })
    .join(', ')})`;
}

function toGradientPoint(
  point: GradientPoint | Color,
  index: number,
  points: Array<GradientPoint | Color>,
): GradientPoint {
  const multiplier = 100 / (points.length - 1);
  const offset = `${Math.round(index * multiplier * 100) / 100}%`;
  return typeof point === 'string' ? { color: point, offset } : point;
}
