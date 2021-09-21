import React, {useRef, useEffect} from "react";

type OrientationObject = {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
};
type Props = {
  orientation: OrientationObject | null;
};

const normalizeOrientationValues = (orieValue: number, typeOfValue: string): number => {
  let a: number;
  let b: number;
  switch (typeOfValue) {
    case "alpha":
      a = 255 / 360;
      b = 255 - a * 360;
      break;
    case "beta":
      a = 255 / 360;
      b = 255 - a * 180;
      break;
    default:
      a = 255 / 180;
      b = 255 - a * 90;
      break;
  }
  return a * orieValue + b;
};

const orientationToRGBA = ({alpha, beta, gamma}: OrientationObject): string => {
  return `rgba(${normalizeOrientationValues(
    alpha ? alpha : 0,
    "alpha"
  )},${normalizeOrientationValues(beta ? beta : 0, "beta")},${normalizeOrientationValues(
    gamma ? gamma : 0,
    "gamma"
  )},1)`;
};

const Canvas = ({orientation}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      if (orientation) {
        context.fillStyle = orientationToRGBA(orientation);
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }
    }
  }, [orientation]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
