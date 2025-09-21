import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import {HooksApp} from "./HooksApp.tsx";
// import {TrafficLight} from "./01-useState/TrafficLight.tsx";
// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLightWithEffect.tsx";
import {TrafficLightWithHook} from "./02-useEffect/TrafficLightWithHook.tsx";


import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*<HooksApp/>*/}
      {/*<TrafficLight/>*/}
      {/*<TrafficLightWithEffect/>*/}
      <TrafficLightWithHook/>
  </StrictMode>,
)
