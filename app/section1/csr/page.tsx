import React from 'react'
import ClientSideRendering from './ClientSideRendering';
import dynamic from 'next/dynamic';
// import NoSSR from './NoSSR';

const NoSSR = dynamic( () => import("./NoSSR"), {
    ssr: false,
})

const CSRTest = () => {
  return (
      <div>
        <ClientSideRendering/>
        <NoSSR/>
    </div>
  )
}

export default CSRTest
