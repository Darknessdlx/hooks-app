import {MyTitle} from "@/06-memos/ui/MyTitle.tsx";
import {useCallback, useState} from "react";
import {MySubTitle} from "@/06-memos/ui/MySubTitle.tsx";

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola')
    const [subTitle, setSubTitle] = useState('Mundo')

    const handleMyAPICall = useCallback (() => {
        console.log('Call API funcion ', subTitle);
    }, [subTitle]);
 
    return (
        <div className={'bg-gradient flex flex-col gap-4'}>
            <h1 className={'text-2xl font-thin text-white'}>MemoApp</h1>

            <MyTitle title={title}/>
            <MySubTitle
                subtitle={subTitle}
                callMyAPI={handleMyAPICall}
            />

            <button
                className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}
                onClick={() => setTitle('Hello, ' + new Date().getTime())}
            >
                Cambiar titulo
            </button>

            <button
                className={'bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'}
                // onClick={() => setSubTitle('World, ' + new Date().getTime())}
                onClick={() => setSubTitle('World')}
            >
                Cambiar subtitulo
            </button>
        </div>
    );
};
