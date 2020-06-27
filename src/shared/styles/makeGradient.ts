type Color = string;

interface GradientPoint {
  offset?: string;
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
    .map((point) => {
      const { color, offset } = toGradientPoint(point);
      return [color, offset].filter(Boolean).join(' ');
    })
    .join(', ')})`;
}

function toGradientPoint(point: GradientPoint | Color): GradientPoint {
  return typeof point === 'string' ? { color: point, offset: undefined } : point;
}
