import React from "react";
import { RMap, ROSM, RLayerVector, RFeature, RStyle, RFeatureUIEvent, ROverlay } from "rlayers";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import "ol/ol.css";

import olIcon from "./assets/olIcon.svg";

const MapOlComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <RMap className="example-map" initial={{ center: fromLonLat([18.645278, 54.3475]), zoom: 11 }}>
        {/* Use an OpenStreetMap background */}
        <ROSM />

        {/* Create a single layer for holding vector features */}
        <RLayerVector zIndex={10}>
          {/* Create a style for rendering the features */}
          <RStyle.RStyle>
            {/* Icon style for the feature */}
            <RStyle.RIcon src={olIcon} anchor={[0.5, 0.5]} />
          </RStyle.RStyle>

          {/* Create a single feature in the vector layer */}
          <RFeature
            geometry={new Point(fromLonLat([18.645278, 54.3475])) as Point} // Coordinates for the feature
            onClick={(event: RFeatureUIEvent<Feature<Point>>) => {
              console.log("event:", event); //* Doesn't Work!!!
              event.map.getView().fit(event?.target?.getGeometry()!.getExtent(), {
                duration: 250,
                maxZoom: 15,
              });
            }}
          >
            <ROverlay className="example-overlay">
              Gdansk
              <br />
              <em>&#11017; click to zoom</em>
            </ROverlay>
          </RFeature>
        </RLayerVector>
      </RMap>
    </React.Fragment>
  );
};

export default MapOlComponent;
