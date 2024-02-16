import Image from 'next/image'
import {Fragment} from 'react'
import Header from './section2/component/Header';
import MapSection from './section3/component/MapSection'
import {Store, Coordinates} from "./types/store";
import Mock from "./section3/component/Mock";

export default async function Home() {

  const storesData: any[] = (await import('../public/stores.json')).default;

  // storesData에서 각 store 데이터의 coordinates 속성을 [Lat, Lng] 형태로 변환하여 새로운 배열로 만듦
  const stores: Store[] = storesData.map((store) => ({
    ...store,
    coordinates: [store.coordinates[0], store.coordinates[1]] as Coordinates
  }));

  return (
      <Fragment>
        
        <Mock stores={stores} />

        <Header/>

        <main style={{width:'80%', height: '100%', margin: '20vh 0 0 8vw' }}>

          <MapSection/>
        </main>
      </Fragment>

  )
}
