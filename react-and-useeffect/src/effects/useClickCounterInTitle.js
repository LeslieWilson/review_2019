import { useEffect, useState } from 'react'

const useClickCounterInTitle = () =>{
    const[clickCount, setClickCount] = useState(-1)
    useEffect(()=>{
        console.log("setting titlee")
        document.title = `${clickCount + 1} click(s)`
    }, [clickCount])
    return [clickCount, setClickCount]
}

export default useClickCounterInTitle
