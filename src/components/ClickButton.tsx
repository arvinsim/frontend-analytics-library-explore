import React from 'react'

type ClickButtonProps = {
    loading?: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function ClickButton(props: ClickButtonProps) {
    return <div>
        <button onClick={props.onClick} className='rounded-full bg-cyan-500 text-white'>
            {props.loading ? 'Loading...' : 'Click here to send click event!'}
        </button>
    </div>
}

export { ClickButton }