import {useCounter} from "@/Hooks/useCounter.tsx";
import {useMemo} from "react";

const heavyStuff = ( iterationNumber: number) => {
    console.time('Heavy_stuff_started');

    for (let i = 0; i < iterationNumber; i++) {
        console.log('Heavy stuff');
    }

    console.timeEnd('Heavy_stuff_started');

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
    const {counter, increment,} = useCounter(40_000);

    const myHeavyStuffValue = useMemo( () => heavyStuff(counter), [counter]);

    return (
        <div className={'bg-gradient flex flex-col gap-4'}>
            <h1 className={'text-2xl font-bold'}>Memo - useMemo - {myHeavyStuffValue} </h1>
            <hr/>

            <h4>Counter: {counter}</h4>
            <h4>Counter: {counter}</h4>

            <button
                className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}
                onClick={increment}
            >
                Incrementar + 1
            </button>

        </div>
    );
};
