import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddEmailRequest } from "../../../../redux-saga/actions/MasterSetting";

export default function EmailAdd(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      pmail_entity_id: props.id,
      pmail_address: "",
    },
    validationSchema: Yup.object().shape({
      pmail_entity_id: Yup.string().required(),
      pmail_address: Yup.string("Enter Email Name")
        .required("Email is Required")
        .email("Your Email Not Valid"),
    }),
    onSubmit: async (values) => {
      const payload = {
        pmail_entity_id: parseInt(values.pmail_entity_id),
        pmail_address: values.pmail_address,
      };
      dispatch(AddEmailRequest(payload));
      props.closeAdd();
      window.alert("Data Add Succesfully");
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
              <h1>Add Email</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="pmail_entity_id"
                    id="pmail_entity_id"
                    value={formik.values.pmail_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="my-9 ml-24">
                    <div className="flex mt-2">
                      <label htmlFor="usex_title" className="mr-[2.2rem] ">
                        Email
                      </label>
                      <input
                        type="text"
                        name="pmail_address"
                        id="pmail_address"
                        defaultValue={formik.values.pmail_address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border border-slate-400 px-3 py-1 text-sm w-[12.5rem] rounded-md"
                        placeholder="New Email. . ."
                      />
                    </div>
                    <div className="text-sm text-red-600 ml-20 mt-1">
                      {formik.errors.pmail_address ? (
                        <span>{formik.errors.pmail_address}</span>
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
