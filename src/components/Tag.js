import axios from "axios"
import { useEffect, useState } from "react"
import useGif from "../hooks/useGif"
const gifApi = process.env.REACT_APP_GIPHY_API_KEY
function Tag() {


    const [tag, setTag] = useState('car')

    const {gif,isLoading, fetchData} = useGif(tag)

    function generateRandom() {
        fetchData()
    }

    function chnageHandler(event){
       let tagName= event.target.value
       setTag(tagName)
        }

    return (
        <div className="w-7/12 bg-blue-400 p-5 mx-auto mt-5 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-[22px] font-bold mb-3">A Random GIF</h1>
            {isLoading? (<p className="spinner"/>):(<img src={gif} alt="Random GIF" className="rounded-lg"/>)}
            <input placeholder="Search Gif" className="w-5/12 p-2 rounded-lg mt-5" onChange={chnageHandler}>
            
            </input>
            <button onClick={generateRandom} className="w-5/12 bg-white p-3 text-center mx-auto rounded-xl mt-3">Generate</button>
        </div>
        
    </div>
    )
}

export default Tag