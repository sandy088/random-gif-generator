import axios from "axios"
import { useEffect, useState } from "react"
const gifApi = process.env.REACT_APP_GIPHY_API_KEY



const useGif = (tag) => {
    const [gif, SetGif] = useState('')
    const [isLoading, setLoading] = useState(true)


   
    

    async function fetchData(){
        setLoading(true)
        
        let output = await axios.get(tag? (`https://api.giphy.com/v1/gifs/random?api_key=${gifApi}&tag=${tag}`):`https://api.giphy.com/v1/gifs/random?api_key=${gifApi}`)
        let data = output.data.data.images.downsized_medium.url
        SetGif(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])


        return {gif,isLoading,fetchData}
};

export default useGif;
