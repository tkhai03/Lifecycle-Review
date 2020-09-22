import React, {useState, useEffect} from 'react'

export default function Hooks(props){
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect 1', count)
        setCount(1)
    }, [])

    useEffect(() => {
        console.log('useEffect 2', count)
    }, [count, props.number])

    console.log('hooks', count)
    return(
        <div>
            Hooks
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => props.biggify()}>biggify</button>
        </div>
    )
}