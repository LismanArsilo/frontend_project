import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GetUserCityRequest } from "../../../redux-saga/actions/UserSetting";
import { AddUserExperienceRequest } from "../../../redux-saga/actions/UserSetting";

export default function ExperienceAdd(props) {
  const { city } = useSelector((state) => state.userSettingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserCityRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      usex_entity_id: props.id,
      usex_title: "",
      usex_profile_headline: "",
      usex_company_name: "",
      usex_city_id: "",
      usex_start_date: "",
      usex_end_date: "",
      usex_industry: "",
      usex_employment_type: "",
      usex_experience_type: "",
    },
    validationSchema: Yup.object().shape({
      usex_entity_id: Yup.string().required(),
      usex_title: Yup.string("Enter Title Name").required("Title is Required"),
      usex_profile_headline: Yup.string("Enter Headline Name").required(
        "Headline is Required"
      ),
      usex_company_name: Yup.string("Enter Company Name").required(
        "Company is Required"
      ),
      usex_city_id: Yup.string("Enter City Name").required("City is Required"),
      usex_start_date: Yup.string("Enter Start Date Name").required(
        "Start Date is Required"
      ),
      usex_end_date: Yup.string("Enter End Date Name").required(
        "End Date is Required"
      ),
      usex_industry: Yup.string("Enter Industry Name").required(
        "Industry is Required"
      ),
      usex_employment_type: Yup.string("Enter Employement Name").required(
        "Employement is Required"
      ),
      usex_experience_type: Yup.string("Enter Experience Name").required(
        "Experience is Required"
      ),
    }),
    onSubmit: async (values) => {
      const payload = {
        usex_entity_id: parseInt(values.usex_entity_id),
        usex_title: values.usex_title,
        usex_profile_headline: values.usex_profile_headline,
        usex_company_name: values.usex_company_name,
        usex_city_id: parseInt(values.usex_city_id),
        usex_start_date: values.usex_start_date,
        usex_end_date: values.usex_end_date,
        usex_industry: values.usex_industry,
        usex_employment_type: values.usex_employment_type,
        usex_experience_type: values.usex_experience_type,
      };
      props.closeAdd();
      dispatch(AddUserExperienceRequest(payload));
      // window.alert("Data Add Succesfully");
      console.info(payload);
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
              <h1>Add Experience</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="usex_entity_id"
                    id="usex_entity_id"
                    defaultValue={formik.values.usex_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="mt-3 ml-20">
                    <label htmlFor="usex_title" className="mr-[2.2rem] ml-7">
                      Title
                    </label>
                    <input
                      type="text"
                      name="usex_title"
                      id="usex_title"
                      defaultValue={formik.values.usex_title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-slate-400 px-2 py-1 text-sm w-[27.5rem] rounded-md"
                      placeholder="Input Your Title . . ."
                    />
                    <div className="text-sm text-red-600 ml-[6.4rem] mt-1">
                      {formik.touched.usex_title && formik.errors.usex_title ? (
                        <span>{formik.errors.usex_title}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-12">
                    <label htmlFor="usex_title" className="mr-[2.1rem] ml-7">
                      Headline
                    </label>
                    <input
                      type="text"
                      name="usex_profile_headline"
                      id="usex_profile_headline"
                      defaultValue={formik.values.usex_profile_headline}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-slate-400 px-2 py-1 text-sm w-[27.5rem] rounded-md"
                      placeholder="Input Your Headline . . ."
                    />
                    <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                      {formik.touched.usex_profile_headline &&
                      formik.errors.usex_profile_headline ? (
                        <span>{formik.errors.usex_profile_headline}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-12">
                    <label
                      htmlFor="usex_company_name"
                      className="mr-[2.2rem] ml-5"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="usex_company_name"
                      id="usex_company_name"
                      defaultValue={formik.values.usex_company_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-slate-400 px-2 py-1 text-sm w-[17rem] rounded-md"
                      placeholder="Input Your Company . . ."
                    />
                    <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                      {formik.touched.usex_company_name &&
                      formik.errors.usex_company_name ? (
                        <span>{formik.errors.usex_company_name}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex items-center ">
                    <label htmlFor="skill" className="mr-[2.5rem] ml-10">
                      City
                    </label>
                    <select
                      defaultValue={formik.values.usex_city_id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="usex_city_id"
                      name="usex_city_id"
                      className=" w-[16.9rem] text-sm text-center px-2 py-1 rounded-md border border-slate-400 focus:ring-black focus:border-black
                  "
                    >
                      <option value={""}>-- Choice --</option>
                      {Array.isArray(city)
                        ? city &&
                          city.map((city, index) => (
                            <option key={index} value={city.city_id}>
                              {city.city_name}
                            </option>
                          ))
                        : null}
                    </select>
                    <div className="text-sm text-red-600 ml-3">
                      {formik.touched.usex_city_id &&
                      formik.errors.usex_city_id ? (
                        <span>{formik.errors.usex_city_id}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mt-3 ml-20 block">
                      <label
                        htmlFor="usex_start_date"
                        className="mr-[2.4rem] ml-5"
                      >
                        Start
                      </label>
                      <input
                        type="date"
                        name="usex_start_date"
                        id="usex_start_date"
                        className="border border-slate-400 px-2 py-1 text-sm rounded-md"
                        defaultValue={formik.values.usex_start_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="text-sm text-red-600 mt-1 text-right">
                        {formik.touched.usex_start_date &&
                        formik.errors.usex_start_date ? (
                          <span>{formik.errors.usex_start_date}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-3 ml-20">
                      <label htmlFor="usex_end_date" className="mr-7">
                        Until
                      </label>
                      <input
                        type="date"
                        name="usex_end_date"
                        id="usex_end_date"
                        className="border border-slate-400 px-2 py-1 text-sm rounded-md"
                        defaultValue={formik.values.usex_end_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="text-sm text-red-600 mt-1 text-right">
                        {formik.touched.usex_end_date &&
                        formik.errors.usex_end_date ? (
                          <span>{formik.errors.usex_end_date}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-12">
                    <label htmlFor="usex_industry" className="ml-7 mr-[2.3rem]">
                      Industry
                    </label>
                    <input
                      type="text"
                      name="usex_industry"
                      id="usex_industry"
                      className="border border-slate-400 px-2 py-1 text-sm w-[40%] rounded-md"
                      placeholder="Input Your Industry . . ."
                      defaultValue={formik.values.usex_industry}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                      {formik.touched.usex_title && formik.errors.usex_title ? (
                        <span>{formik.errors.usex_title}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex items-center ">
                    <label
                      htmlFor="usex_employment_type"
                      className="mr-9 -ml-14"
                    >
                      Employment Type
                    </label>
                    <select
                      className="w-[10rem] text-sm text-center px-2 py-1 rounded-md border border-slate-40"
                      value={formik.values.usex_employment_type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="usex_employment_type"
                      name="usex_employment_type"
                    >
                      <option value="">-- Choice --</option>
                      <option value="Contract">Contract</option>
                      <option value="Fulltime">Fulltime</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Remote">Remote</option>
                    </select>
                    <div className="text-sm text-red-600 ml-5 mt-1">
                      {formik.touched.usex_employment_type &&
                      formik.errors.usex_employment_type ? (
                        <span>{formik.errors.usex_employment_type}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex items-center mb-10 ">
                    <label
                      htmlFor="usex_experience_type"
                      className="mr-9 -ml-11"
                    >
                      Experience Type
                    </label>
                    <select
                      className="w-[10rem] text-sm text-center px-2 py-1 rounded-md border border-slate-400"
                      value={formik.values.usex_experience_type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="usex_experience_type"
                      name="usex_experience_type"
                    >
                      <option value="">-- Choice --</option>
                      <option value="Certified">Certified</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Organization">Organization</option>
                      <option value="Reward">Reward</option>
                    </select>
                    <div className="text-sm text-red-600 ml-5 mt-1">
                      {formik.touched.usex_experience_type &&
                      formik.errors.usex_experience_type ? (
                        <span>{formik.errors.usex_experience_type}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-end border-t-4 bg-slate-300">
                    <div className="my-2 mr-4 flex gap-3">
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
