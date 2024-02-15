import Image from 'next/image'
import {Fragment} from 'react'
import Header from './section2/component/Header';
import MapSection from './section3/component/MapSection'

export default function Home() {
  return (
      <Fragment>
        
        <Header/>
        
        <main style={{width:'80%', height: '100%', margin: '20vh 0 0 8vw' }}>

          <MapSection/>
        </main>
      </Fragment>

  )
}
