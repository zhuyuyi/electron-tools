import { useEffect, useState, } from 'react'

export function useOnline() {

    const [online, setOnline] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            setOnline(c => {
                return !c
            })
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return online
}
