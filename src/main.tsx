import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Toaster} from "sonner";

// import {HooksApp} from "./HooksApp.tsx";
// import {TrafficLight} from "./01-useState/TrafficLight.tsx";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect.tsx";
// import {TrafficLightWithHook} from "./02-useEffect/TrafficLightWithHook.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
// import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
// import {ScrambleWords} from "@/05-useReducer/ScrambleWords.tsx";
// import {MemoHook} from "@/06-memos/MemoHook.tsx";
// import {MemoCounter} from "@/06-memos/MemoCounter.tsx";
// import {InstagromApp} from "@/07-useOptimistic/InstagromApp.tsx";
// import {ClientInformation} from "@/08-use-suspense/ClientInformation.tsx";
// import {getUserAction} from "@/08-use-suspense/api/get-user.action.ts";
import {ProfessionalApp} from "@/09-useContext/ProfessionalApp.tsx";


import './index.css'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster richColors={true } position={'top-right'}/>
        {/*<HooksApp/>*/}
        {/*<TrafficLight/>*/}
        {/*<TrafficLightWithEffect/>*/}
        {/*<TrafficLightWithHook/>*/}
        {/*<PokemonPage/>*/}
        {/*<FocusScreen/>*/}
        {/*<TasksApp/>*/}
        {/*<ScrambleWords/>*/}
        {/*<MemoHook/>*/}
        {/*<MemoCounter/>*/}
        {/*<InstagromApp/>*/}
        {/*<Suspense*/}
        {/*    fallback={*/}
        {/*        <div className={'bg-gradient flex flex-col'}>*/}
        {/*            <h1 className={'text-2xl'}>Cargando...</h1>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <ClientInformation getUser={getUserAction(1000)}/>*/}
        {/*</Suspense>*/}

        <ProfessionalApp/>
    </StrictMode>,
)
