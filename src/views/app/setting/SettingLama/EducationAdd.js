import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddUserEducationRequest } from "../../../redux-saga/actions/UserSetting";

export default function ExperienceAdd(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      usdu_entity_id: props.id,
      usdu_school: "",
      usdu_degree: "",
      usdu_field_study: "",
      usdu_grade: "",
      usdu_start_date: "",
      usdu_end_date: "",
      usdu_activities: "",
      usdu_description: "",
    },
    validationSchema: Yup.object().shape({
      usdu_entity_id: Yup.string().required(),
      usdu_school:
        Yup.string("Enter School Name").required("School is Required"),
      usdu_degree:
        Yup.string("Enter Degree Name").required("Degree is Required"),
      usdu_field_study: Yup.string("Enter Field Study Name").required(
        "Field Study is Required"
      ),
      usdu_grade: Yup.number()
        .positive("A phone number can't start with a minus")
        .required("Grade is Required"),
      usdu_start_date: Yup.string("Enter Start Date Name").required(
        "Start Date is Required"
      ),
      usdu_end_date: Yup.string("Enter End Date Name").required(
        "End Date is Required"
      ),
      usdu_activities: Yup.string("Enter Activies Name").required(
        "Activies is Required"
      ),
      usdu_description: Yup.string("Enter description Name").required(
        "Description is Required"
      ),
    }),
    onSubmit: async (values) => {
      const payload = {
        usdu_entity_id: parseInt(values.usdu_entity_id),
        usdu_school: values.usdu_school,
        usdu_degree: values.usdu_degree,
        usdu_field_study: values.usdu_field_study,
        usdu_grade: parseFloat(values.usdu_grade),
        usdu_start_date: values.usdu_start_date,
        usdu_end_date: values.usdu_end_date,
        usdu_activities: values.usdu_activities,
        usdu_description: values.usdu_description,
      };
      dispatch(AddUserEducationRequest(payload));
      props.closeAdd();
      window.alert("Data Add Succesfully");
      console.log(payload);
    },
  });
  return (
    <div>
      <div className="border border-slate-300 pl-6 border-b-slate-600 ">
        {/* Logo */}
        <div className="mt-6 border-b-2">
          <img
            className="h-10 w-auto mb-2 ml-2"
            src="../../assets/images/codeid.png"
            alt="codeid"
          />
        </div>
        <div>
          <p className="my-4">Home / Setting</p>
        </div>
      </div>
      {/* setting */}
      <div className="border border-slate-300">
        <h1 className="text-lg font-semibold my-2 pl-4">Setting</h1>
      </div>
      {/* container profile */}
      <div className="border border-slate-300 ">
        {/* countainer rounded */}
        <div className="border border-slate-800 mx-2 mr-6 mt-2 rounded-2xl mb-7 ">
          <div className="border border-slate-500 m-5">
            <div className="pl-2 mt-3 border-b-2 mx-2">
              <h1>Add Education</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="usdu_entity_id"
                    id="usdu_entity_id"
                    defaultValue={formik.values.usdu_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="mt-3 ml-16">
                    <label htmlFor="usdu_school" className="mr-[2.2rem] ml-7">
                      School
                    </label>
                    <input
                      type="text"
                      name="usdu_school"
                      id="usdu_school"
                      defaultValue={formik.values.usdu_school}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-slate-400 px-2 py-1 text-sm w-[27.5rem] rounded-md"
                      placeholder="Input Your School . . ."
                    />
                    <div className="text-sm text-red-600 ml-[7.3rem] mt-1">
                      {formik.touched.usdu_school &&
                      formik.errors.usdu_school ? (
                        <span>{formik.errors.usdu_school}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-36 flex items-center ">
                    <label htmlFor="usdu_degree" className="mr-9 -ml-14">
                      Degree
                    </label>
                    <select
                      className="w-[10rem] text-sm text-center px-2 py-1 rounded-md border border-slate-400"
                      id="usdu_degree"
                      name="usdu_degree"
                      value={formik.values.usdu_degree}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">-- Choice --</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Diploma">Diploma</option>
                      <option value="PHD">PHD</option>
                      <option value="High Scholl">High Scholl</option>
                    </select>
                    <div className="text-sm text-red-600 ml-5 mt-1">
                      {formik.touched.usdu_degree &&
                      formik.errors.usdu_degree ? (
                        <span>{formik.errors.usdu_degree}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-16">
                    <label htmlFor="usdu_field_study" className="mr-[2.1rem] ">
                      Field Study
                    </label>
                    <input
                      type="text"
                      name="usdu_field_study"
                      id="usdu_field_study"
                      className="border border-slate-400 px-2 py-1 text-sm w-[27.5rem] rounded-md"
                      placeholder="eg. Informatic, Computer Science, Math"
                      defaultValue={formik.values.usdu_field_study}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="text-sm text-red-600 ml-[7.2rem] mt-1">
                      {formik.touched.usdu_field_study &&
                      formik.errors.usdu_field_study ? (
                        <span>{formik.errors.usdu_field_study}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex mt-3 ml-16">
                    <label htmlFor="usdu_grade" className="mr-[2.1rem] ml-8 ">
                      Grade
                    </label>
                    <input
                      className="border border-slate-400 px-2 py-1 text-sm w-20 rounded-md"
                      type="number"
                      name="usdu_grade"
                      id="usdu_grade"
                      defaultValue={formik.values.usdu_grade}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="IPK"
                    />
                    <div className="text-sm text-red-600 ml-5 mt-1">
                      {formik.touched.usdu_grade && formik.errors.usdu_grade ? (
                        <span>{formik.errors.usdu_grade}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mt-3 ml-20 block">
                      <label
                        htmlFor="usdu_start_date"
                        className="mr-[2.4rem] ml-5"
                      >
                        Start
                      </label>
                      <input
                        type="date"
                        name="usdu_start_date"
                        id="usdu_start_date"
                        className="border border-slate-400 px-2 py-1 text-sm rounded-md"
                        defaultValue={formik.values.usdu_start_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="text-sm text-red-600 mt-1 text-right">
                        {formik.touched.usdu_start_date &&
                        formik.errors.usdu_start_date ? (
                          <span>{formik.errors.usdu_start_date}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-3 ml-20">
                      <label htmlFor="usdu_end_date" className="mr-7">
                        Until
                      </label>
                      <input
                        type="date"
                        name="usdu_end_date"
                        id="usdu_end_date"
                        className="border border-slate-400 px-2 py-1 text-sm rounded-md"
                        defaultValue={formik.values.usdu_end_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="text-sm text-red-600 mt-1 text-right">
                        {formik.touched.usdu_end_date &&
                        formik.errors.usdu_end_date ? (
                          <span>{formik.errors.usdu_end_date}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-16">
                    <div className="flex">
                      <label
                        htmlFor="usdu_activities"
                        className="mr-[2.3rem] ml-4 "
                      >
                        Activies
                      </label>
                      <textarea
                        type="text"
                        name="usdu_activities"
                        id="usdu_activities"
                        className="border border-slate-400 text-sm w-[27.5rem] rounded-md"
                        defaultValue={formik.values.usdu_activities}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Input Your Activies . . ."
                        maxLength={510}
                      ></textarea>
                    </div>
                    <div className="text-sm text-red-600 ml-[7.1rem] mt-1">
                      {formik.touched.usdu_activities &&
                      formik.errors.usdu_activities ? (
                        <span>{formik.errors.usdu_activities}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-12 mb-5">
                    <div className="flex">
                      <label htmlFor="usdu_description" className="mr-[2.3rem]">
                        Descriptions
                      </label>
                      <textarea
                        rows="5"
                        type="text"
                        name="usdu_description"
                        id="usdu_description"
                        defaultValue={formik.values.usdu_description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border border-slate-400 text-sm w-[27.5rem] rounded-md"
                        placeholder="Input Your Descriptions . . ."
                        maxLength={510}
                      ></textarea>
                    </div>
                    <div className="text-sm text-red-600 ml-[7.9rem] mt-1">
                      {formik.touched.usdu_description &&
                      formik.errors.usdu_description ? (
                        <span>{formik.errors.usdu_description}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-end border-t-4 bg-slate-300">
                    <div className="my-2 flex gap-3">
                      <div className="flex items-stretch border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-2 text-red-500 font-semibold hover:text-white shadow-md shadow-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 self-center "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <button onClick={() => props.closeAdd()}>Cancel</button>
                      </div>
                      <div className="flex items-stretch border border-green-500 rounded-md px-4 py-1 ring-1 ring-green-500 mr-4 text-green-500 font-semibold hover:text-white hover:bg-green-600 shadow-md shadow-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 self-center"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <button type="submit">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
