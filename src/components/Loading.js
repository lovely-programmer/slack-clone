import React from 'react'
import {Circle} from 'better-react-spinkit'

function Loading() {
    return (
        <div style={{display:"grid", placeItems:"center", height:"100vh"}}>
            <Circle color="#3f0f40" size={60} />
        </div>
    )
}

export default Loading
