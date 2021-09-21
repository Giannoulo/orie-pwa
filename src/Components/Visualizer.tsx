import React, {useEffect, useState} from "react";
import Canvas from "./Canvas";

type OrientationObject = {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
};

const Visualizer = (): JSX.Element => {
  const [orientation, setOrientation] = useState<OrientationObject | null>(null);

  const handleOrientation = (event: DeviceOrientationEvent): void => {
    setOrientation({
      absolute: event.absolute,
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div id="visualiser-div">
      <Canvas orientation={orientation} />
    </div>
  );
};

export default Visualizer;
