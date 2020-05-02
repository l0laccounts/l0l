import React, { useState } from 'react'
import './input.css'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event=> setValue(event.target.value)
        },
        clear: () => setValue(defaultValue),
        value: () => value
    }
}

export const Input = () => {
    const input = useInputValue('hello')

    return (
        <form>
            <input {...input.bind}
            />
            <button type="submit">submit</button>
        </form>
    )

}