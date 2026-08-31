"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ArrowButton from "../ui/ArrowButton";
import PixelGrid from "../ui/PixelGrid";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),
});

async function handleSubmit(values, { setSubmitting, resetForm, setStatus }) {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      resetForm();
      setStatus({
        success: true,
        message:
          "Success! Please check your inbox for a greeting email from Enlight!",
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

function SubscribeSection() {
  return (
    <section className="subscribe">
      <div className="subscribe__back" aria-hidden>
        <span className="subscribe__ellipse">
          <img src="/images/redesign/subscribe-ellipse.svg" alt="" />
        </span>
        <span className="subscribe__artwork">
          <img
            src="/images/redesign/subscribe-hand.png"
            alt=""
            width={477}
            height={602}
          />
        </span>
      </div>
      <div className="subscribe__pixels">
        <PixelGrid />
      </div>

      <div className="subscribe__inner">
        <h2 className="subscribe__title">
          Get the latest crypto news right in your inbox
        </h2>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting, status }) => (
            <Form className="subscribe__form">
              <div className="underline-field">
                <Field
                  name="email"
                  type="email"
                  placeholder="Your email:"
                  className={touched.email && errors.email ? "is-invalid" : ""}
                />
                <ErrorMessage name="email" component="span" />
              </div>

              <ArrowButton
                type="submit"
                variant="solid"
                iconTone="accent"
                disabled={isSubmitting}
              >
                Subscribe to crypto news
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
    </section>
  );
}

export default SubscribeSection;
