import { Formik, Field, Form } from "formik"

export function FormUserInfo() {

    return (
        <Formik
            initialValues={{ name: "", email: "" }}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <Field name="name" type="text" />
                <Field name="email" type="email" />


                <section className="form-user-info">
                    <h2>Fill the following form:</h2>
                    <section>
                        <label>First name:</label>
                        <input type="text" />
                    </section>
                    <section>
                        <label>Last name:</label>
                        <input type="text" />
                    </section>
                    <section>
                        <label>Email address:</label>
                        <input type="text" />
                    </section>
                    <section>
                        <label>Website address:</label>
                        <input type="text" />
                    </section>
                    <section>
                        <label>LinkedIn profile address (Optional):</label>
                        <input type="text" />
                    </section>
                    <section>
                        <h4>Answer one of the following questions (optional):</h4>
                        <section>
                            How many years of experience do you
                            have with Facebook Marketing?
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">no experience</option>
                                <option value="">0-1 years</option>
                                <option value="">1-2 years</option>
                                <option value="">2 or more years</option>
                                {/* <option value=""></option> */}
                            </select>
                        </section>
                        <section>
                            <label>What was the
                                biggest campaign budget you have managed in a single month?</label>
                            <input type="range" min={1000} max={500000} />
                        </section>
                    </section>
                    <button type="submit">Submit</button>
                </section>
            </Form>
        </Formik >
    )
}