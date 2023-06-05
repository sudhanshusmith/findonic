import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { useHttpClient } from "../../util/components/hooks/http-hook";
import FormikControl from "./FormikControl";
import TextError from "./TextError";

function FormikContainer() {
  // const radioOptions = [
  //   { key: 'Option 1', value: 'rOption1' },
  //   { key: 'Option 2', value: 'rOption2' },
  //   { key: 'Option 3', value: 'rOption3' }
  // ]

  // const checkboxOptions = [
  //   { key: 'Option 1', value: 'cOption1' },
  //   { key: 'Option 2', value: 'cOption2' },
  //   { key: 'Option 3', value: 'cOption3' }
  // ]

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Art & Culture", value: "anc" },
    { key: "AI & ML", value: "ainml" },
    { key: "Automotive & Mobility", value: "anm" },
    { key: "E-Commerce & D2C", value: "ecom" },
    { key: "EdTech", value: "edu" },
    { key: "FinTech", value: "fin" },
    { key: "Food & Agriculture", value: "fna" },
    { key: "Gaming & Esports", value: "gne" },
    { key: "HealthCare & Bio-Tech", value: "hnb" },
    { key: "Scam in Companies", value: "scam" },
    { key: "Social  & CSR", value: "csr" },
    { key: "Space & Aerospace", value: "aero" },
    { key: "Startups & Entrepreneurship", value: "sne" },
    { key: "Sustainability & Clean-Tech", value: "snc" },
    { key: "Technology & Innovation", value: "tech" },
    { key: "Travel & Tourism", value: "travel" },
    
  ];

  const initialValues = {
    title: "",
    description: "",
    image: "",
    category: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Title of the post can't be Empty."),
    description: Yup.string().required(
      "Description of the post can't be Empty."
    ),
    category: Yup.string().required(
      "Post should must belong to any one of the Category."
    ),
  });

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const onSubmit = async (values, submitProps) => {
    console.log("Form data", values);
    try {
      await sendRequest(
        `https://findonic-backend.vercel.app/`,
        "POST",
        JSON.stringify(values),
        {
          "Content-Type": "application/json",
        }
      );
      alert("Form Submitted Successfully");
      submitProps.setSubmitting(false);
      submitProps.resetForm();
    } catch (err) {
      submitProps.setSubmitting(false);
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <div className="mt-28">
        <h4 className="text-2xl md:text-4xl text-center mb-8 text-purple-700">
          Waana Post Something...?
        </h4>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="flex items-center flex-col space-y-5">
                <div className=" px-4  w-full sm:w-8/12">
                  <label htmlFor="title">Post Title*:</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="border-2 border-gray-400 h-12 w-full  px-3 rounded-md focus:bg-purple-100"
                    placeholder="Post Title"
                  />
                  <ErrorMessage name="title" component={TextError} />
                </div>

                <div className=" px-4  w-full sm:w-8/12 ">
                  <label htmlFor="description">Post Description*:</label>
                  <Field
                    type="text"
                    as="textarea"
                    id="description"
                    name="description"
                    className="border-2 border-gray-400 h-32 w-full px-3 py-3 rounded-md focus:bg-purple-100"
                    placeholder="Write Post Description Here..."
                  />
                  <ErrorMessage name="description" component={TextError} />
                </div>

                <div className=" px-4  w-full sm:w-8/12">
                  <label htmlFor="image">Image URL:</label>
                  <Field
                    type="text"
                    id="image"
                    name="image"
                    className="border-2 border-gray-400 h-12 w-full px-3 rounded-md focus:bg-purple-100"
                    placeholder="Paste the Image URL Here"
                  />
                  <ErrorMessage name="image" component={TextError} />
                </div>

                <FormikControl
              control="select"
              label="Select Post Category:"
              name="category"
              options={dropdownOptions}
            />

                <button
                  type="submit"
                  className="w-60 sm:w-1/2 bg-purple-700 text-white p-2 mt-4 text-xl rounded-xl disabled:opacity-60 cursor-not-allowed"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

     
    </>
  );
}

export default FormikContainer;
