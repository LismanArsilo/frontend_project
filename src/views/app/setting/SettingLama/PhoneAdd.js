import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GetPhoneTypeRequest } from "../../../redux-saga/actions/UserSetting";
import { AddUserPhoneRequest } from "../../../redux-saga/actions/UserSetting";

export default function PhoneAdd(props) {
  const { phoneType } = useSelector((state) => state.userSettingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPhoneTypeRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      uspo_entity_id: props.id,
      uspo_number: "",
      uspo_ponty_code: "",
    },
    validationSchema: Yup.object().shape({
      uspo_entity_id: Yup.string().required(),
      uspo_number: Yup.number()
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("Number is Required"),
      uspo_ponty_code: Yup.string("Enter Code Name").required(
        "Type Phone is Required"
      ),
    }),
    onSubmit: async (values) => {
      const payload = {
        uspo_entity_id: parseInt(values.uspo_entity_id),
        uspo_number: values.uspo_number,
        uspo_ponty_code: values.uspo_ponty_code,
      };
      dispatch(AddUserPhoneRequest(payload));
      props.closeAdd();
      window.alert("Data Add Succesfully");
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
              <h1>Add Phone</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="uspo_entity_id"
                    id="uspo_entity_id"
                    value={formik.values.uspo_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="flex my-10 justify-center">
                    <div className="mt-2">
                      <div className="flex">
                        <label
                          htmlFor="usex_title"
                          className="mr-[2.2rem] ml-7"
                        >
                          Number
                        </label>
                        <input
                          type="tel"
                          name="uspo_number"
                          id="uspo_number"
                          defaultValue={formik.values.uspo_number}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="border border-slate-400 px-2 py-1 text-sm w-[12.5rem] rounded-md"
                          placeholder="eg . 0821*********"
                        />
                      </div>
                      <div className="text-sm text-red-600 ml-32">
                        {formik.touched.uspo_number &&
                        formik.errors.uspo_number ? (
                          <span>{formik.errors.uspo_number}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className=" mx-14">
                      <div className="flex items-center">
                        <label htmlFor="skill" className="pr-10">
                          Type
                        </label>
                        <select
                          className="w-40 border-0 border-b-2 border-gray-200 focus:ring-0 
                          focus:border-black"
                          id="uspo_ponty_code"
                          name="uspo_ponty_code"
                          value={formik.values.uspo_ponty_code}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={""}>-- Chose --</option>
                          {Array.isArray(phoneType)
                            ? phoneType &&
                              phoneType.map((phone, index) => (
                                <option key={index} value={phone.ponty_code}>
                                  {phone.ponty_code}
                                </option>
                              ))
                            : null}
                        </select>
                      </div>
                      <div className="text-sm text-red-600 ml-[4.9rem]">
                        {formik.touched.uspo_ponty_code &&
                        formik.errors.uspo_ponty_code ? (
                          <span>{formik.errors.uspo_ponty_code}</span>
                        ) : null}
                      </div>
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
