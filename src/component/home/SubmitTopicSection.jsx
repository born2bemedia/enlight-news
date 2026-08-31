"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ArrowButton from "../ui/ArrowButton";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),
  newsTopic: Yup.string().required("This field is required."),
  sources: Yup.string().required("This field is required."),
});

async function handleSubmit(values, { setSubmitting, resetForm, setStatus }) {
  try {
    const response = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      resetForm();
      setStatus({
        success: true,
        message: "Thanks! We received your topic and will look into it.",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    console.error(error);
    setStatus({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  } finally {
    setSubmitting(false);
  }
}

function SubmitTopicSection() {
  return (
    <section className="submit-topic">
      <span className="submit-topic__glow submit-topic__glow--a" aria-hidden />
      <span className="submit-topic__glow submit-topic__glow--b" aria-hidden />

      <div className="submit-topic__inner">
        <div className="submit-topic__intro">
          <h2 className="submit-topic__title">Submit News Topic</h2>
          <p className="submit-topic__copy">
            Have a piece of news you think we should cover?{" "}
            <strong>Submit it here!</strong>
          </p>
        </div>

        <div className="submit-topic__card">
          <Formik
            initialValues={{
              name: "",
              email: "",
              newsTopic: "",
              sources: "",
              additionalComments: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, isSubmitting, status }) => (
              <Form className="topic-form">
                <div className="topic-form__row">
                  <div className="underline-field underline-field--light">
                    <Field
                      name="name"
                      placeholder="Name:"
                      className={touched.name && errors.name ? "is-invalid" : ""}
                    />
                    <ErrorMessage name="name" component="span" />
                  </div>
                  <div className="underline-field underline-field--light">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email:"
                      className={
                        touched.email && errors.email ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage name="email" component="span" />
                  </div>
                </div>

                <div className="topic-form__row">
                  <div className="underline-field underline-field--light">
                    <Field
                      name="newsTopic"
                      placeholder="News topic:"
                      className={
                        touched.newsTopic && errors.newsTopic ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage name="newsTopic" component="span" />
                  </div>
                  <div className="underline-field underline-field--light">
                    <Field
                      name="sources"
                      placeholder="Sources:"
                      className={
                        touched.sources && errors.sources ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage name="sources" component="span" />
                  </div>
                </div>

                <div className="underline-field underline-field--light underline-field--area">
                  <Field
                    as="textarea"
                    name="additionalComments"
                    placeholder="Additional comments:"
                  />
                </div>

                <ArrowButton
                  type="submit"
                  variant="solid"
                  iconTone="dark"
                  disabled={isSubmitting}
                >
                  Submit
                </ArrowButton>

                {status?.message && (
                  <p
                    className={`form-status ${
                      status.success ? "is-success" : "is-error"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default SubmitTopicSection;
