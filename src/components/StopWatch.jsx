import React, { useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

function StopWatch() {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();
    const lapResetBtn = useRef(null);
    const startStopBtn = useRef(null);
    const handler = (e) => {
        if (e.code === 'KeyL') {
            lapResetBtn.current.click();
            // isRunning === true ? 랩 : reset
        } else if (e.code === 'KeyS') {
            startStopBtn.current.click();
            // startStopBtn
            // isRunning === true ? 랩 : reset
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handler);
        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, []);

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    label={isRunning ? '랩' : '리셋'}
                    code="L"
                    color="bg-gray-600"
                    onClickHandler={isRunning ? createLap : reset}
                    ref={lapResetBtn}
                />
                <Button
                    label={isRunning ? '중단' : '시작'}
                    code="S"
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    onClickHandler={isRunning ? pause : start}
                    ref={startStopBtn}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
}

export default StopWatch;
