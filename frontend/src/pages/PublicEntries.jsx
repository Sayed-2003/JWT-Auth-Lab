import { getAllPublicEntries } from "../services/entryService"
import {useState,useEffect} from "react"

function PublicEntries() {
    const [entries,setEntries] = useState([])

    async function getEntries() {
        const response = await getAllPublicEntries()
        setEntries(response)
    }

    useEffect(()=>{
        getEntries()
    },[])

  return (
    <>
    <h1>ALL ENTRIES</h1>
        {entries.map((oneEntry)=>
        <div key={oneEntry._id}>
            <h1>title: {oneEntry.title} </h1>
        </div>)}
    </>
  )
}

export default PublicEntries