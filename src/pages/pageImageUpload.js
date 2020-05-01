import React from 'react'
import {ImgUpload} from "../components/ImgUpload";
import './page.css'

export const pageImageUpload = () => {
    return (
        <div className='page'>
            <div>
                <ImgUpload/>
            </div>
        </div>
    )
}