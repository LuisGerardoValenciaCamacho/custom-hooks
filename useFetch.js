import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const resultado = await fetch(url, {
            method: "GET"
        });
        const data = await resultado.json();
        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()
    }, [url])


    return {
        ...state
    }
}
