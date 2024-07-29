import React from "react";

const MeasureComponent: React.FC = (): JSX.Element => {
  const [width, setWidth] = React.useState<number>(0);

  const divRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (divRef.current) {
      // Measure the width of the div
      const measuredWidth = divRef.current.getBoundingClientRect().width;
      console.log({ measuredWidth });
      setWidth(measuredWidth);
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <React.Fragment>
      <div
        ref={divRef}
        style={{
          width: "50%", // Example width
          backgroundColor: "lightblue",
          padding: "20px",
          textAlign: "center",
        }}
      >
        This div's width is: {width}px
      </div>
    </React.Fragment>
  );
};

export default MeasureComponent;
