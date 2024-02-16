'use client'

import {useEffect} from 'react';
import Map from './Map';
import type {NaverMap} from "../../types/map";
import type {Store, Coordinates} from "../../types/store";
import useMap from "../../hooks/useMap";
import useStores from "../../hooks/useStores";
import Markers from "./Markers";

const MapSection = () => {
  
  const {initializeMap} = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      {/* <Map onLoad={() => {console.log('load!');}}/> */}
      <Map onLoad={onLoadMap} />

      <Markers />
    </>
  );
};
export default MapSection;
