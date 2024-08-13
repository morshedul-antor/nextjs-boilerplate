'use client'
import { useEffect, useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
            const data = await response.json()

            console.log(data)
            setTodos(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <div>
            <h1>Todos</h1>
            {isLoading ? <p>Loading...</p> : <ul>{todos && todos.map((item, i) => <li key={i}>{item.title}</li>)}</ul>}
        </div>
    )
}
