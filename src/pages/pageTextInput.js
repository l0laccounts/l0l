import React from 'react'
import { TextInput } from "../components/TextInput";
import './page.css'

export const pageTextInput = () => {
    return (
        <div className='page'>
            <div>
                <TextInput/>
            </div>
        </div>
    )
}