import React, { useEffect, useState } from "react";
import config from "../../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  GetOneUserRequest,
  EditUserRequest,
  EditNoUserRequest,
} from "../../../../redux-saga/actions/MasterSetting";

export default function SkillAdd(props) {
  const { user } = useSelector((state) => state.masterSettingState);
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);
  useEffect(() => {
    dispatch(GetOneUserRequest(props.id));
  }, []);
  console.log(props.id);
  useEffect(() => {
    let img = `${config.domain}/user/${user.user_entity_id}/images/${user.user_photo}`;
    setPreviewImg(img);
  }, []);

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      formik.setFieldValue("profile", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      user_name: user.user_name,
      user_first_name: user.user_first_name,
      user_last_name: user.user_last_name,
      user_photo: user.user_photo,
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string("Enter Skill Name").required(
        "First Name is Required"
      ),
      user_first_name: Yup.string("Enter Skill Name").required(
        "First Name is Required"
      ),
      user_last_name: Yup.string("Enter Skill Name").required(
        "Skill Name is Required"
      ),
    }),
    onSubmit: async (values) => {
      if (uploaded === true) {
        let payload = new FormData();
        payload.append("user_name", values.user_name);
        payload.append("user_first_name", values.user_first_name);
        payload.append("user_last_name", values.user_last_name);
        payload.append("entity_id", values.entity_id);
        console.info(payload);
        dispatch(EditUserRequest(payload));
      } else {
        const payload = {
          user_name: values.user_name,
          user_first_name: values.user_first_name,
          user_last_name: values.user_last_name,
          user_photo: values.user_photo,
          user_entity_id: parseInt(user.user_entity_id),
        };
        console.info(payload);
        dispatch(EditNoUserRequest(payload));
      }
      // props.closeAdd();
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
              <h1>Edit Profile</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-3">
                  <div className="flex justify-between mb-5">
                    <div>
                      <div>
                        <input
                          type="hidden"
                          name="user_entity_id"
                          id="user_entity_id"
                          value={formik.values.user_entity_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label
                          htmlFor="usex_title"
                          className="mr-[2.1rem] ml-7 block"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          defaultValue={formik.values.user_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="border border-slate-400 px-2 py-1 text-sm w-56 ml-7 rounded-md"
                          placeholder="Input Your User Name . . ."
                        />
                        <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                          {/* {formik.touched.usex_profile_headline &&
                        formik.errors.usex_profile_headline ? (
                        <span>{formik.errors.usex_profile_headline}</span>
                        ) : null} */}
                        </div>
                      </div>
                      <div className="mt-3 flex">
                        <div className="">
                          <label
                            htmlFor="usex_title"
                            className="mr-[2.1rem] ml-7 block"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            defaultValue={formik.values.user_first_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border border-slate-400 px-2 py-1 text-sm w-56 rounded-md ml-7"
                            placeholder="Input Your User Name . . ."
                          />
                          <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                            {/* {formik.touched.usex_profile_headline &&
                      formik.errors.usex_profile_headline ? (
                      <span>{formik.errors.usex_profile_headline}</span>
                      ) : null} */}
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="usex_title"
                            className="mr-[2.1rem] ml-7 block"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            defaultValue={formik.values.user_last_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border border-slate-400 px-2 py-1 text-sm w-56 rounded-md ml-7"
                            placeholder="Input Your User Name . . ."
                          />
                          <div className="text-sm text-red-600 ml-[8.5rem] mt-1">
                            {/* {formik.touched.usex_profile_headline &&
                        formik.errors.usex_profile_headline ? (
                        <span>{formik.errors.usex_profile_headline}</span>
                        ) : null} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        className="ml-7 rounded-full h-24 border-2"
                        src={previewImg}
                        height={100}
                        width={100}
                        crossOrigin="anonymous"
                      ></img>
                      <input
                        className="mt-2 text-sm"
                        id="profile"
                        name="profile"
                        type="file"
                        accept="image/*"
                        onChange={uploadOnChange("file")}
                      />
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
