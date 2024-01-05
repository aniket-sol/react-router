/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/aniket-sol')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='flex flex-col items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <div className='m-4 flex flex-col items-center'>
            <img className='mb-2' src={data.avatar_url} alt="Git picture" width="200px" />
            <p>Username: {data.login}</p>
        </div>
        <div className='m-4'>
            Github followers: {data.followers}
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/aniket-sol");
    return response.json();
}
