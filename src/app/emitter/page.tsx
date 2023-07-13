'use client';

import React from 'react'
import { EventEmitter } from 'events';
import { ClickButton } from '@/components/ClickButton';

class TestAnalytics extends EventEmitter {
    constructor() {
        super();
    }
}

const analytics = new TestAnalytics();

function Page() {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        analytics.on('onClick', async () => {
            const url = "http://localhost:3001/api/analytics"
            const response = await fetch(url, { method: 'POST'})
            console.log(response)
        })
    })

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setLoading(true)
        analytics.emit('onClick');
        setLoading(false)
    }

    return (
        <div>
        <h1 className='text-xl'>Emitter Page</h1>
            <ClickButton loading={loading} onClick={onClick} />
        </div>
    )
}

export default Page