import { useEffect, useState } from "react";

export function useFetch(url, initialData) {
    
    const [data, setData] = useState(initialData)
    const [isFetching, setIsFetching] = useState(true);
    const [shouldRefetch, setShouldRefetch] = useState(false)


    useEffect(() => {
        (async () => {
            setIsFetching(true)

            const response = await fetch(url)
            const result = await response.json();

            setData(result);
            setIsFetching(false);
        })()
    }, [shouldRefetch])

    const refetch = () => {
        setShouldRefetch(state => !state)
    }


    return { data, isFetching, refetch };
}