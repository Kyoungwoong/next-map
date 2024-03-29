'use client'

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Coordinates } from '../../types/store';
import { NaverMap } from '../../types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
        center: new window.naver.maps.LatLng(...initialCenter),
        zoom: initialZoom,
        minZoom: 6,
        scaleControl: false,
        mapDataControl: false,
        logoControlOptions: {
            position: naver.maps.Position.BOTTOM_LEFT,
        },
    };
    //새로운 네이버 맵 인스턴스 생성 
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
        onLoad(map);
    }
};

//맵이 unmount되었을 때 맵 인스턴스 destory하기 
useEffect(() => {
    return () => {
        mapRef.current?.destroy();
    };
}, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
    </>
  );
};

export default Map;
