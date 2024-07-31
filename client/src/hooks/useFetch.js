import { useEffect, useState } from "react";

export function useFetch(url, initialData) {


    const [data, setData] = useState(initialData)
    const [isFetching, setIsFetching] = useState(true);


    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const result = await response.json();

            setData(result);
            setIsFetching(false); //sled mauntvane isFetching mi stava na false
        })()
    }, [])



    return { data, isFetching };
}