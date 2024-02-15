"use client";

import {useState, useEffect} from 'react';

interface Props {
    data: number;
}

const Test = () => {

    const [data, setData] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await getStaticProps();
            setData(result);
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);

    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data}</p>
        </main>
        );
};

export default Test;

export async function getStaticProps() {
const delayInSeconds = 2;
const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
);

    return data as number;
    // revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */,
}