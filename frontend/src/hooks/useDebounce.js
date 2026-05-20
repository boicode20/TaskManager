import { useEffect, useState } from "react";


export const useDebounce = (value, delay) => {
    const [debounceSearch,setDebounceSearch] = useState(value)
   
   
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setDebounceSearch(value)
        },delay)

        return () => clearTimeout(timeout)

    },[value,delay])
    return debounceSearch
}