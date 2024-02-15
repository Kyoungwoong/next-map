'use client'
import React, {useState, useEffect} from 'react'


const ClientSideRendering = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        const delayInSeconds = 2;
        new Promise<number>((resolve) => 
            setTimeout( () => resolve(Math.random()), delayInSeconds * 1000)
            ).then((result) => setData(result));
    }, []);

  return (
    <main>
        <h1>ClientSideRendering Page</h1>
        <p>값: {data}</p>
    </main>
  )
}

export default ClientSideRendering
