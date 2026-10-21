import { getAllMyEntries } from "../services/entryService"
import {useState,useEffect} from "react"

function MyEntries() {
    const [entries,setEntries] = useState([])

    async function getEntries() {
        const response = await getAllMyEntries()
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
            <p>EntryBody: {oneEntry.entryBody} </p>
        </div>)}
    </>
  )
}

export default MyEntries