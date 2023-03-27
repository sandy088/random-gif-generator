import axios from "axios"
import { useEffect, useState } from "react"
import useGif from "../hooks/useGif.js"



const gifApi = process.env.REACT_APP_GIPHY_API_KEY
function Random() {
   
    const {gif,isLoading, fetchData} = useGif()

    function generateRandom() {
        fetchData()
    }

    return(
        <div className="w-7/12 bg-green-300 p-5 mx-auto mt-5 rounded-xl">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-[22px] font-bold mb-3">A Random GIF</h1>
                {isLoading? (<p className="spinner"/>):(<img src={gif} alt="Random GIF" className="rounded-lg"/>)}
                <button onClick={generateRandom} className="w-5/12 bg-white p-3 text-center mx-auto rounded-xl mt-3">Generate</button>
            </div>
            
        </div>
    )
}

export default Random