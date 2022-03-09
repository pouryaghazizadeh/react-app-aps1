import React, { useState } from "react";
// import "./style.css"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
const Map = () => {
  const [content, setContent] = useState("");
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const rounded = (num) => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };
  return (
    <div>
      <ComposableMap
        width={1700}
        // height={1700}
        data-tip=""
        projectionConfig={{ scale: 200 }}
        // style={{ background: "black" }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setContent(`${NAME} — ${rounded(POP_EST)}`);
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
                      // fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
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
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Map;
