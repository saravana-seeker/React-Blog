import { useEffect,useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState();
    const [IsPending,setIsPending] =useState(false)
    const [error,setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        setIsPending(true)
        fetch(url , {signal:abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error("Unable to fetch the resource ")
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
            setIsPending(false)
            setError(null)
        }).catch((err) => {
            if(err.name === 'AbortError'){
                console.log("aborted")
            }
            else{
                setError(err.message)
                setIsPending(false)
            }
         
            // console.log(err.message)
        })
        return () => {console.log("fetch abort")}
    },[url])
    return {data,IsPending,error}
}

export default useFetch;