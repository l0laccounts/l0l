import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'


export const Navigation = () => (
    <div className="container-nav">
        <div>lol</div>
        <ul className="container-ul">
            <li>
                <NavLink to='/pageRandom'>
                    Random Surprise
                </NavLink>
            </li>
            <li>
                <NavLink to='/pageLinkGenerator'>
                    Internet Upload
                </NavLink>
            </li>
            <li>
                <NavLink to='/pageImageUpload'>
                    Image Upload
                </NavLink>
            </li>
            <li>
                <NavLink to='/pageInput'>
                    Input
                </NavLink>
            </li>
        </ul>
    </div>
)



