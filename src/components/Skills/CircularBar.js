import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { animated, useSpring } from 'react-spring'

const CircularBar = ({ value, text, color }) => {

    return (
        <>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#DA7C25', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#B023E1', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgressbar
                value={value}
                text={text}
                styles={{
                    path: {
                        stroke: 'url(#gradient1)',
                        strokeLinecap: 'round',
                    },
                    text: {
                        fill: '#fff',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                    },
                    trail: {
                        stroke: '#d6d6d6',
                    },
                }}
            />
        </>
    )
}

export default CircularBar