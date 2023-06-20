import { useEffect, useState } from "react"
import { FormUserInfo } from "../cmps/form-user-info"
import { infoService } from "../services/info.service"


export function AddUserInfo() {
    const [form, setForm] = useState(null)
    const [isSubmittedBefore, setIsSubmittedBefore] = useState(null)

    useEffect(() => {
        if (form) {
            const mailPrms = infoService.getByMail(form.eMail)
                .then(item => {
                    // console.log('item', item)
                    if (!item) infoService.save(form)
                    else {
                        console.log('Already Exists')
                        setIsSubmittedBefore(true)
                    }
                })

            // const info = infoService.save(form)
            // console.log('info', info)
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
        <section className="add-user-info">
            {
                !isSubmittedBefore &&
                <FormUserInfo handleOnSubmit={handleOnSubmit} form={form} />
            }
            {
                isSubmittedBefore &&
                <span>Already submitted for this email.</span>
            }
        </section>
    )
}