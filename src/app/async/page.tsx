'use client';

import React from 'react'
import { useRouter } from 'next/router';
import { ClickButton } from '@/components/ClickButton';

function Page() {
    const [loading, setLoading] = React.useState(false);

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const url = "http://localhost:3001/api/analytics"
        const response = await fetch(url, { method: 'POST'})
        console.log(response)
    }

    return (
        <div>
        <h1 className='text-xl'>Async Page</h1>
        <ClickButton loading={loading} onClick={onClick} />
        </div>
    )
}

export default Page