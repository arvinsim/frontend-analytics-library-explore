'use client';

import React from 'react'

function Page() {

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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