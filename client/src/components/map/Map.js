import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const Map = () => {
  const [content, setContent] = useState("");
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 100 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setContent(`${NAME}`);
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              ></Geography>;
            })
          }
        </Geographies>

        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={2} fill="#F53" />
        </Marker>
        <Marker coordinates={[52.006, 34.7128]}>
          <circle r={2} fill="#F53" />
        </Marker>
        <Marker coordinates={[9.006, 55.7128]}>
          <circle r={2} fill="#F53" />
        </Marker>
        <Marker coordinates={[0.006, 51.7128]}>
          <circle r={2} fill="#F53" />
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default Map;
