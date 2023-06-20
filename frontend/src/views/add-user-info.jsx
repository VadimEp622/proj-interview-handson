import { useEffect, useState } from "react"
import { FormUserInfo } from "../cmps/form-user-info"


export function AddUserInfo() {
    const [form, setForm] = useState(null)

    useEffect(() => {
        if (form) {
            // addForm()
        }
    }, [form])

    function handleOnSubmit(values) {
        console.log('values', values)
        setForm(values)
    }

    return (
        <FormUserInfo handleOnSubmit={handleOnSubmit} />
    )
}