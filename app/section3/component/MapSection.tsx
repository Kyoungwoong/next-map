'use client'

import {useEffect} from 'react';
import Map from './Map';
import type {NaverMap} from "../../types/map";
import type {Store, Coordinates} from "../../types/store";
import useMap from "../../hooks/useMap";
import useStores from "../../hooks/useStores";
import Markers from "./Markers";
import useCurrentStore from "../../hooks/useCurrentState";

const MapSection = () => {

  const {clearCurrentStore} = useCurrentStore();
  
  const {initializeMap} = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
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
