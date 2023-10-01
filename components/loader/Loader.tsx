"use client"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";



const Loader = () =>{
    return (
        <>
            <ProgressBar
            height="4px"
            color="#FF0000"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </>
    )
}

export default Loader;