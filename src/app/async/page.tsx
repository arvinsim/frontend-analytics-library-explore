'use client';

import React from 'react'

const url = 'http://localhost:3001/api/analytics'

function Page() {
    const onClick = async (e) => {
        const response = await fetch(url, { method: 'POST'})
        console.log(response)
    }

    return (
        <div>
        <h1>Async Page</h1>
        <div>
            <button onClick={onClick} className='rounded-full bg-cyan-500 text-white'>Click here to send click event!</button>
        </div>
        </div>
    )
}

export default Page