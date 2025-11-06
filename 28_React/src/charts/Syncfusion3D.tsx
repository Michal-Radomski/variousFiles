import React from "react";
import {
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  ColumnSeries3D,
  Category3D,
  Legend3D,
  Tooltip3D,
  DataLabel3D,
  Inject,
} from "@syncfusion/ej2-react-charts";

const data = [
  { x: "Nio", y: 31041 },
  { x: "Neta", y: 22449 },
  { x: "BMW", y: 18733 },
];

const Syncfusion3D = (): JSX.Element => {
  return (
    <React.Fragment>
      <Chart3DComponent
        id="charts"
        title="Top Selling Electric Cars in China"
        style={{ height: "400px", width: "600px" }}
        primaryXAxis={{ valueType: "Category", title: "Brand" }}
        primaryYAxis={{ title: "Sales" }}
        enableRotation={true}
        rotation={7}
        tilt={10}
        depth={100}
      >
        <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D]} />
        <Chart3DSeriesCollectionDirective>
          <Chart3DSeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            type="Column"
            name="Sales"
            dataLabel={{ visible: true }}
          />
        </Chart3DSeriesCollectionDirective>
      </Chart3DComponent>
    </React.Fragment>
  );
};

export default Syncfusion3D;
