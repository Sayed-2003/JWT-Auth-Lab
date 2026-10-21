import { useState } from "react"
import { createNewEntry } from "../services/entryService"
import { useNavigate } from "react-router";

function CreateEntry() {
    const [formData, setFormData] = useState({
        title: '',
        entryBody: '',
        isPublic: false
    })


    const navigate = useNavigate()

function handleChange(event) {
  const { name, type, value, checked } = event.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
}


    async function handleSubmit(event) {
        event.preventDefault()

        const response = await createNewEntry(formData)
        navigate('/public-entires')
    }

    return (
        <>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title: </label>
                <input type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    value={formData.title}
                />

                <label htmlFor="entryBody"> Entry Body: </label>
                <input type="text"
                    name="entryBody"
                    id="entryBody"
                    onChange={handleChange}
                    value={formData.entryBody}
                />


                <label htmlFor="isPublic"> isPublic: </label>
                <input type="checkbox"
                    name="isPublic"
                    id="isPublic"
                    onChange={handleChange}
                    checked={formData.isPublic} 
                />

                <br />

                <button> Create Entry </button>
            </form>
        </>
    )
}

export default CreateEntry