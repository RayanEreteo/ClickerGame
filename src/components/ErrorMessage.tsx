import React from 'react'

interface props {
    message: string
}

const ErrorMessage: React.FC<props> = ( {message} ) => {
    return (
        <div className='error-message-container'>
            <p id='error-message'>{message}</p>
        </div>
    )
}

export default ErrorMessage