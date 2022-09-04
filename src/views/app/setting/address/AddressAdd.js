import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddAddressRequest } from "../../../../redux-saga/actions/MasterSetting";

import {
  GetCityRequest,
  GetAddressTypeRequest,
} from "../../../../redux-saga/actions/UserDrop";

export default function AddressAdd(props) {
  const dispatch = useDispatch();
  const { city, addressType } = useSelector((state) => state.userDropState);
  // const { lineAddress } = useSelector((state) => state.userSettingState);
  // const { address } = useSelector((state) => state.userSettingState);

  useEffect(() => {
    dispatch(GetAddressTypeRequest());
    dispatch(GetCityRequest());
    // dispatch(GetLineAddressRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      etad_entity_id: props.id,
      addr_line1: "",
      addr_line2: "",
      addr_postal_code: "",
      addr_city_id: "",
      etad_adty_id: "",
    },
    validationSchema: Yup.object().shape({
      etad_entity_id: Yup.string().required(),
      addr_line1: Yup.string("Enter Address Name").required(
        "Address is Required"
      ),
      addr_line2: Yup.string("Enter Address Name").required(
        "Address is Required"
      ),
      addr_postal_code: Yup.number()
        .positive()
        .required("Postal Code is Required"),
      addr_city_id: Yup.string("Enter City Name").required("City is Required"),
      etad_adty_id: Yup.string("Enter Type Date Name").required(
        "Address Type is Required"
      ),
    }),

    onSubmit: async (values) => {
      const payload = {
        etad_entity_id: parseInt(values.etad_entity_id),
        addr_line1: values.addr_line1,
        addr_line2: values.addr_line2,
        addr_postal_code: values.addr_postal_code,
        addr_city_id: parseInt(values.addr_city_id),
        etad_adty_id: parseInt(values.etad_adty_id),
      };
      dispatch(AddAddressRequest(payload));
      props.closeAdd();
      // window.alert("Data Add Succesfully");
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
              <h1>Add Address</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="etad_entity_id"
                    id="etad_entity_id"
                    defaultValue={formik.values.etad_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="mt-3 ml-12 mb-5">
                    <div className="flex">
                      <label htmlFor="addr_line1" className="mr-[2.3rem] mt-4">
                        Address 1
                      </label>
                      <textarea
                        rows="4"
                        type="text"
                        name="addr_line1"
                        id="addr_line1"
                        defaultValue={formik.values.addr_line1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border border-slate-400 text-sm w-10/12 rounded-md"
                        placeholder="Input Your Address . . ."
                        maxLength={250}
                      ></textarea>
                    </div>
                    <div className="text-sm text-red-600 ml-[7.2rem] mt-1">
                      {formik.touched.addr_line1 && formik.errors.addr_line1 ? (
                        <span>{formik.errors.addr_line1}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 ml-12 mb-5">
                    <div className="flex">
                      <label
                        htmlFor="usdu_description"
                        className="mr-[2.3rem] mt-4"
                      >
                        Address 2
                      </label>
                      <textarea
                        rows="4"
                        type="text"
                        name="addr_line2"
                        id="addr_line2"
                        defaultValue={formik.values.addr_line2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border border-slate-400 text-sm w-10/12 rounded-md"
                        placeholder="Input Your Address . . ."
                        maxLength={250}
                      ></textarea>
                    </div>
                    <div className="text-sm text-red-600 ml-[7.2rem] mt-1">
                      {formik.touched.addr_line2 && formik.errors.addr_line2 ? (
                        <span>{formik.errors.addr_line2}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mt-3 ml-10">
                      <label
                        htmlFor="addr_postal_code"
                        className="mr-[2.1rem] "
                      >
                        Postal Code
                      </label>
                      <input
                        type="number"
                        name="addr_postal_code"
                        id="addr_postal_code"
                        className="border border-slate-400 px-2 py-1 text-sm  rounded-md"
                        placeholder="Postal Code . . ."
                        defaultValue={formik.values.addr_postal_code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="text-sm text-red-600 ml-[7.2rem] mt-1">
                        {formik.touched.addr_postal_code &&
                        formik.errors.addr_postal_code ? (
                          <span>{formik.errors.addr_postal_code}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-3 ml-16  ">
                      <div className="flex items-center">
                        <label
                          htmlFor="addr_city_id"
                          className="mr-[2.5rem] ml-10"
                        >
                          City
                        </label>
                        <select
                          defaultValue={formik.values.addr_city_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          id="addr_city_id"
                          name="addr_city_id"
                          className=" w-[16.9rem] text-sm text-center px-2 py-1 rounded-md border border-slate-400 
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
                      </div>
                      <div className="text-sm text-red-600 ml-28">
                        {formik.touched.addr_city_id &&
                        formik.errors.addr_city_id ? (
                          <span>{formik.errors.addr_city_id}</span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center my-5 ">
                    <label htmlFor="etad_adty_id" className="mr-[2.5rem]">
                      Address Type
                    </label>
                    <select
                      defaultValue={formik.values.etad_adty_id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="etad_adty_id"
                      name="etad_adty_id"
                      className=" w-[12.9rem] text-sm text-center px-2 py-1 rounded-md border border-slate-400
                  "
                    >
                      <option value={""}>-- Choice --</option>
                      {Array.isArray(addressType)
                        ? addressType &&
                          addressType.map((address, index) => (
                            <option key={index} value={address.adty_id}>
                              {address.adty_name}
                            </option>
                          ))
                        : null}
                    </select>
                    <div className="text-sm text-red-600 ml-3">
                      {formik.touched.etad_adty_id &&
                      formik.errors.etad_adty_id ? (
                        <span>{formik.errors.etad_adty_id}</span>
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
