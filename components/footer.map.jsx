import { styled } from "@linaria/react";
import { useEffect, useRef } from "react";
import { theme } from "../styles/theme";
import { Loader } from "@googlemaps/js-api-loader";
//#region styles
const div = {};
div.map = styled.div`
  width: 100%;
  height: ${theme.spacing.g11};
`;
//#endregion
const upper = 47.53581;
const lower = 47.129382;
const left = -122.778034;
const right = -122.343393;
const mapColor = "rgba(255, 255, 255, 0.3)";

const Map = () => {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      if (googlemap.current !== null) {
        map = new google.maps.Map(googlemap.current, {
          mapId: process.env.NEXT_PUBLIC_MAPID,
          center: { lat: 47.330003, lng: -122.577394 },
          zoom: 10.2,
          disableDefaultUI: true,
        });
      }
    });
  }, [googlemap]);
  return <div.map id="map" ref={googlemap} />;
};

export default Map;
