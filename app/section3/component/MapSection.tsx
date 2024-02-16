'use client'

import {useEffect, useMemo} from 'react';
import Map from './Map';
import type {NaverMap} from "../../types/map";
import type {Store, Coordinates} from "../../types/store";
import useMap from "../../hooks/useMap";
import useStores from "../../hooks/useStores";
import Markers from "./Markers";
import useCurrentStore from "../../hooks/useCurrentState";
import { useRouter, usePathname } from 'next/navigation';

const MapSection = () => {

  const router = useRouter();
  /*
   * next js 13버전 이후 사라진 router.asPath
   * 아래 기능 안되는듯
   */
  // const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);
  // console.log(usePathname());
  // const initialZoom = useMemo( () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM), [query]);
  // const initialCenter = useMemo<Coordinates>(
  //   () =>
  //     query.get('lat') && query.get('lng')
  //       ? [Number(query.get('lat')), Number(query.get('lng'))]
  //       : INITIAL_CENTER,
  //   [query]
  // );

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
