import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GetSkillTypeRequest } from "../../../../redux-saga/actions/UserDrop";
import { AddSkillRequest } from "../../../../redux-saga/actions/MasterSetting";

export default function SkillAdd(props) {
  const { skillType } = useSelector((state) => state.userDropState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSkillTypeRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      uski_entity_id: props.id,
      uski_skty_name: "",
    },
    validationSchema: Yup.object().shape({
      uski_entity_id: Yup.string().required(),
      uski_skty_name: Yup.string("Enter Skill Name").required(
        "Skill Name is Required"
      ),
    }),
    onSubmit: async (values) => {
      const payload = {
        uski_entity_id: parseInt(values.uski_entity_id),
        uski_skty_name: values.uski_skty_name,
      };
      dispatch(AddSkillRequest(payload));
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
              <h1>Add Skills</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="uski_entity_id"
                    id="uski_entity_id"
                    value={formik.values.uski_entity_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="m-7 flex items-center mx-14 ">
                    <label htmlFor="skill" className="pr-10">
                      Skills
                    </label>
                    <select
                      className="
                    w-40   
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                      value={formik.values.uski_skty_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="uski_skty_name"
                      name="uski_skty_name"
                    >
                      <option value={""}>-- Chose --</option>
                      {Array.isArray(skillType)
                        ? skillType &&
                          skillType.map((skill, index) => (
                            <option key={index} value={skill.skty_name}>
                              {skill.skty_name}
                            </option>
                          ))
                        : null}
                    </select>
                    <div className="text-sm text-red-600 ml-3">
                      {formik.touched.uski_skty_name &&
                      formik.errors.uski_skty_name ? (
                        <span>{formik.errors.uski_skty_name}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-end border-t-4 bg-slate-300">
                    <div className="flex gap-3 my-2 mr-3">
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
