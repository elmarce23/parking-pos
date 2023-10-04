import {DiCodeigniter} from 'react-icons/di'

export const Posts = () =>{
    return <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    } }>
        <DiCodeigniter/>
         Consultar API
    </button>
}