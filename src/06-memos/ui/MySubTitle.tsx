import {memo} from "react";

interface MySubTitleProps {
    subtitle: string;

    callMyAPI: () => void;
}

export const MySubTitle = memo(({subtitle, callMyAPI}: MySubTitleProps) => {
    console.log('My subtitle re-renderizado');

    return (
        <>
            <h6 className={'text-2xl font-bold'}>
                {subtitle}
            </h6>

            <button
                className={'bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'}
                onClick={callMyAPI}
            >Llamar a funcion</button>
        </>
    );
});
