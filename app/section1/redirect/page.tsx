"use client"
import React, {useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const Links = () => {
    const router = useRouter();
    /*
     * 미리 파일을 읽어오기
     * pre fetch를 하려면 이처럼 개발자가 직접 작성해야하기에 Link 태그를 쓰는 것이 권장됨.
     */
    useEffect(() => {
        router.prefetch('/section1')
    }, [router])

  return (
    <div>
      <h1>Links</h1>
      {/* <Link href="/section1" style={{color: 'red'}}>/section1</Link> */}
      <button onClick={() => {
            router.push('/section1'); 
        }}>
            /section1
      </button>
    </div>
  )
}

export default Links
