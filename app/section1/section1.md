[next.js 13에서 app routing 방식에서의 차이점](https://stackoverflow.com/questions/76267351/how-to-fetch-data-server-side-in-the-latest-next-js-tried-getstaticprops-but-it/76766776#76766776) 

| Before Next.js 13              | After Next.js 13                      |
|--------------------------------|----------------------------------------|
| `getStaticProps()`             | Use fetch with Cached Data             |
| `getServerSideProps()`         | Use fetch with Dynamic Data            |
| `getStaticProps()` with revalidate | Fetching with Revalidating Data     |



### example

``` javascript
export async function(){
   const data = await getData()
   return (<ClientComponent data />)
}
```