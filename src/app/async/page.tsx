'use client';

import React from 'react'
import { useRouter } from 'next/router';

function Page() {
    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const url = "http://localhost:3000/api/analytics"
        const response = await fetch(url, { method: 'POST'})
        console.log(e)
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