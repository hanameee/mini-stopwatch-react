import React, { memo } from 'react';
import formatTime from '../util/formatTime';

function Laps({ laps }) {
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
    const maxIdx = lapTimeArr.indexOf(Math.max(...lapTimeArr));
    const minIdx = lapTimeArr.indexOf(Math.min(...lapTimeArr));

    const minMaxStyle = (idx) => {
        if (laps.length < 2) return;
        if (idx === maxIdx) return 'text-red-600';
        if (idx === minIdx) return 'text-green-600';
    };
    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps.map((lap, idx) => (
                    <li
                        key={lap[0]}
                        className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                            idx
                        )}`}
                    >
                        <span>{lap[0]}</span>
                        <span>{formatTime(lap[1])}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default memo(Laps);
