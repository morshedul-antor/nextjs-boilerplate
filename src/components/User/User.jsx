export default async function User() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json()

    const data = await getData()
    console.log(data)

    return (
        <div>
            <h1>Users</h1>
            <ul>{data && data.map((item, i) => <li key={i}>{item.name}</li>)}</ul>
        </div>
    )
}

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}
