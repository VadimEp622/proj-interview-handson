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
        // console.log('values', values)
        const formValues = { ...values }
        if (formValues.campaignBudget < 1000) formValues.campaignBudget = ''
        console.log('formValues', formValues)
        setForm(values)
    }

    return (
        <FormUserInfo handleOnSubmit={handleOnSubmit} form={form} />
    )
}