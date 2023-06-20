import { Formik, Field, Form, useFormikContext } from "formik"

export function FormUserInfo({ handleOnSubmit, form }) {


    const initialValues = {
        firstName: "",
        lastName: "",
        eMail: "",
        website: "",
        linkedIn: "",
        yearsOfExperience: "",
        campaignBudget: 1000,
    }

    // const { values } = useFormikContext()
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
        >
            {({ values }) => (
                <Form>
                    <section className="form-user-info">
                        <h2>Fill the following form:</h2>
                        <section>
                            <label>First name:</label>
                            <Field type="text" name="firstName" />
                        </section>
                        <section>
                            <label>Last name:</label>
                            <Field type="text" name="lastName" />
                        </section>
                        <section>
                            <label>Email address:</label>
                            <Field type="email" name="eMail" />
                        </section>
                        <section>
                            <label>Website address:</label>
                            <Field type="text" name="website" />
                        </section>
                        <section>
                            <label>LinkedIn profile address (Optional):</label>
                            <Field type="text" name="linkedIn" />
                        </section>
                        <section>
                            <h4>Answer one of the following questions (optional):</h4>
                            <section>
                                How many years of experience do you
                                have with Facebook Marketing?
                                <Field as="select" name="yearsOfExperience" id="">
                                    <option value=""></option>
                                    <option value="noExperience">no experience</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="1-2">1-2 years</option>
                                    <option value="2+">2 or more years</option>
                                </Field>
                            </section>
                            <section>
                                <label>What was the
                                    biggest campaign budget you have managed in a single month?</label>
                                <Field
                                    type="range"
                                    name="campaignBudget"
                                    min={1000}
                                    max={500000}
                                    value={values.campaignBudget}
                                />
                                <span>{values.campaignBudget} $</span>
                            </section>
                        </section>
                        <button type="submit">Submit</button>
                    </section>
                </Form>
            )}
        </Formik >
    )
}