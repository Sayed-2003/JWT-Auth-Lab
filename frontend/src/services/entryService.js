import api from "./api";

// create entry
async function createNewEntry(entryBody) {
    const response = await api.post('/entries', entryBody)
    return response.data
}

// all entry
async function getAllPublicEntries() {
    const response = await api.get('/entries')
    return response.data
}

// my entries
async function getAllMyEntries() {
    const response = await api.get('/entries/my-entries')
     return response.data
}

// update entry

// delete entry


export{createNewEntry,getAllPublicEntries,getAllMyEntries}