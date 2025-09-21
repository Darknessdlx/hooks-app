import {useEffect, useState} from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countDown, setCountDown] = useState(5);

// Coundown Effect
    useEffect(() => {
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [countDown]);

//Changue light color Effect
    useEffect(() => {
        if (countDown > 0) return;
        setCountDown(5);
        if (light === 'red') {
            setLight('green');
            return
        } else if (light === 'yellow') {
            setLight('red');
            return
        } else if (light === 'green') {
            setLight('yellow');
            return
        }
    }, [countDown, light]);

    return {
        countDown,
        light,
        colors,

        // Compute
        percentage: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    }


}