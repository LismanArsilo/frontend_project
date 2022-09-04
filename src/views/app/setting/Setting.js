import React, { useEffect, useState } from "react";
import config from "../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import {
  GetOneUserRequest,
  GetPhoneRequest,
  DelPhoneRequest,
  GetEmailRequest,
  DelEmailRequest,
  GetEducationRequest,
  DelEducationRequest,
  GetAddressRequest,
  DelAddressRequest,
  GetExperienceRequest,
  DelExperienceRequest,
  GetSkillRequest,
  DelSkillRequest,
} from "../../../redux-saga/actions/MasterSetting";
import ExperienceAdd from "./experience/ExperienceAdd";
import ExperienceEdit from "./experience/ExperienceEdit";
import AddressAdd from "./address/AddressAdd";
import SkillAdd from "./skill/SkillAdd";
import EducationAdd from "./education/EducationAdd";
import PhoneAdd from "./phone/PhoneAdd";
import EmailAdd from "./email/EmailAdd";

export default function Setting() {
  const dispatch = useDispatch();
  const { user, phones, emails, skills, addresses, experiences, educations } =
    useSelector((state) => state.masterSettingState);
  // State
  const [id, setId] = useState();
  const [idNext, setIdNext] = useState();
  const [refresh, setRefresh] = useState(false);
  // Display
  const [displaySkillAdd, setDisplaySkillAdd] = useState(false);
  const [displayExperienceAdd, setDisplayExperienceAdd] = useState(false);
  const [displayEducationAdd, setDisplayEducationAdd] = useState(false);
  const [displayPhoneAdd, setDisplayPhoneAdd] = useState(false);
  const [displayEmailAdd, setDisplayEmailAdd] = useState(false);
  const [displayAddressAdd, setDisplayAddressAdd] = useState(false);
  const [displayExperienceEdit, setDisplayExperienceEdit] = useState(false);

  useEffect(() => {
    dispatch(GetOneUserRequest(1));
    dispatch(GetPhoneRequest(1));
    dispatch(GetEmailRequest(1));
    dispatch(GetEducationRequest(1));
    dispatch(GetAddressRequest(1));
    dispatch(GetExperienceRequest(1));
    dispatch(GetSkillRequest(1));
    setRefresh(false);
  }, [refresh]);
  const onDeletedEmail = async (id) => {
    dispatch(DelEmailRequest(id));
  };
  const onDeletedAddress = async (id) => {
    dispatch(DelAddressRequest(id));
  };
  const onDeletedPhone = async (id) => {
    dispatch(DelPhoneRequest(id));
  };
  const onDeletedEducation = async (id) => {
    dispatch(DelEducationRequest(id));
  };
  const onDeletedExperience = async (id) => {
    dispatch(DelExperienceRequest(id));
  };
  const onDeletedSkill = async (id) => {
    dispatch(DelSkillRequest(id));
  };
  const onAddSkill = (userId) => {
    setDisplaySkillAdd(true);
    setId(userId);
  };
  const onAddExperience = (userId) => {
    setDisplayExperienceAdd(true);
    setId(userId);
  };
  const onAddEducation = (userId) => {
    setDisplayEducationAdd(true);
    setId(userId);
  };
  const onAddPhone = (userId) => {
    setDisplayPhoneAdd(true);
    setId(userId);
  };
  const onAddEmail = (userId) => {
    setDisplayEmailAdd(true);
    setId(userId);
  };
  const onAddAddress = (userId) => {
    setDisplayAddressAdd(true);
    setId(userId);
  };
  const onEditExperience = (id, idNext) => {
    setDisplayExperienceEdit(true);
    setId(id);
    setIdNext(idNext);
  };

  return (
    <div className="m-5 p-5 border border-slate-700">
      {/* User */}
      {displayExperienceAdd ? (
        <ExperienceAdd
          closeAdd={() => setDisplayExperienceAdd(false)}
          id={id}
          refresh={() => setRefresh(true)}
        />
      ) : displayExperienceEdit ? (
        <ExperienceEdit
          closeAdd={() => setDisplayExperienceEdit(false)}
          id={id}
          idNext={idNext}
          refresh={() => setRefresh(true)}
        />
      ) : displaySkillAdd ? (
        <SkillAdd closeAdd={() => setDisplaySkillAdd(false)} id={id} />
      ) : displayExperienceAdd ? (
        <ExperienceAdd
          closeAdd={() => setDisplayExperienceAdd(false)}
          id={id}
        />
      ) : displayEducationAdd ? (
        <EducationAdd closeAdd={() => setDisplayEducationAdd(false)} id={id} />
      ) : displayPhoneAdd ? (
        <PhoneAdd closeAdd={() => setDisplayPhoneAdd(false)} id={id} />
      ) : displayEmailAdd ? (
        <EmailAdd closeAdd={() => setDisplayEmailAdd(false)} id={id} />
      ) : displayAddressAdd ? (
        <AddressAdd closeAdd={() => setDisplayAddressAdd(false)} id={id} />
      ) : displaySkillAdd ? (
        <SkillAdd closeAdd={() => setDisplaySkillAdd(false)} id={id} />
      ) : (
        <>
          {/* Header */}
          <div className="border border-slate-300 border-b-black border-b-4">
            {/* Logo */}
            <div className="border-b-2 flex my-6 mx-2 border-b-slate-600 items-stretch justify-between px-5">
              <img
                className="h-10 w-auto mb-3"
                src="../../assets/images/codeid.png"
                alt="codeid"
              />
              <div className="self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex ml-6 gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Home / Setting</p>
            </div>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="border border-slate-300 border-t-black">
            <div className="border border-slate-300">
              <h1 className="text-lg font-semibold my-2 pl-4">Setting</h1>
            </div>
            {/* Body Rounded */}
            <div className="border border-slate-800 mx-2 mr-6 mt-2 rounded-2xl">
              {/* Profile */}
              <div className="border border-slate-500 mt-5 p-1 pl-2 font-semibold">
                <p>Profile</p>
              </div>
              <div className="mt-7 flex justify-between items-stretch">
                <div className="flex">
                  {user.user_photo ? (
                    <img
                      className="ml-7 rounded-full h-24 border-2"
                      src={`${config.domain}/user/${user.user_entity_id}/images/${user.user_photo}`}
                      height={100}
                      width={100}
                      crossOrigin="anonymous"
                    ></img>
                  ) : (
                    <div className="mt-6">
                      <span className="ml-10 px-2 py-6 border border-slate-600 rounded-full text-xs">
                        No Profile
                      </span>
                    </div>
                  )}
                  <div className="ml-6 mt-9">
                    <p>{user.user_name}</p>
                    {/* {Array.isArray(role.usro_role)
                  ? role.usro_role &&
                    role.usro_role.map((usro, index) => {
                      return (
                        <div key={index}>
                          <p>{console.info(usro.role_name)}</p>
                        </div>
                      );
                    })
                  : null} */}
                    <p>Kandidat Bootcamp</p>
                  </div>
                </div>
                <div className="flex justify-end mr-2 self-end">
                  <div className="flex items-stretch border border-blue-500 rounded-md px-4 py-1 ring-1 ring-blue-500 mr-2 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
              {/* End Profile */}
              {/* Login */}
              <p className="border border-slate-500 mt-5 p-1 pl-2 font-semibold">
                Login
              </p>
              <div className="flex justify-between items-stretch mt-4">
                <p className="pl-6">Change Password</p>
                <div className="flex items-stretch border border-blue-500 rounded-md px-4 py-1 ring-1 ring-blue-500 mr-4 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <button>Edit</button>
                </div>
              </div>
              {/* End Login */}
              {/* Email */}
              <div>
                <div className="flex items-center border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
                  <p className="self-center">Emails</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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
                    <button onClick={() => onAddEmail(user.user_entity_id)}>
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="pl-6 w-2/12">
                    <p className="mr-9">Your Emails :</p>
                  </div>
                  <div className="w-10/12">
                    {emails &&
                      emails.map((email, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between border-b-2 mb-3 pl-2"
                          >
                            <div>
                              <p>{email.pmail_address}</p>
                            </div>
                            <div className="flex gap-1">
                              <div className="flex items-stretch border border-blue-500 rounded-md px-3 py-1 ring-1 ring-blue-500 mr-2 mb-1 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                                <button>Edit</button>
                              </div>
                              <div className="flex items-stretch border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-3 mb-1 text-red-500 font-semibold hover:text-white">
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
                                <button
                                  onClick={() => {
                                    if (
                                      window.confirm("Delete this record ?")
                                    ) {
                                      onDeletedEmail(email.pmail_id);
                                    }
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* EndEmail */}
              {/* Phones */}
              <div>
                <div className="flex items-stretch border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
                  <p className="self-center ml-3">Phones</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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
                    <button onClick={() => onAddPhone(user.user_entity_id)}>
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="pl-6 w-2/12">
                    <p className="mr-9">Your Phones :</p>
                  </div>
                  <div className="w-10/12">
                    {Array.isArray(phones)
                      ? phones &&
                        phones.map((phone, index) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-between border-b-2 mb-3 pl-2"
                            >
                              <div>
                                <p>
                                  {phone.uspo_number}
                                  <span className="ml-2">
                                    ({phone.uspo_ponty_code})
                                  </span>
                                </p>
                              </div>
                              <div className="mr-2 flex justify-items-end">
                                <div className="flex items-stretch border border-blue-500 rounded-md px-3 py-1 ring-1 ring-blue-500 mr-3 mb-1 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                  <button>Edit</button>
                                </div>
                                <div className="flex items-stretch border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-2 mb-1 text-red-500 font-semibold hover:text-white">
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
                                  <button
                                    onClick={() => {
                                      if (
                                        window.confirm("Delete this record ?")
                                      ) {
                                        onDeletedPhone(phone.uspo_number);
                                      }
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              {/* EndPhones */}
              {/* Address */}
              <div>
                <div className="flex items-stretch border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold">
                  <p className="self-center ml-3">Address</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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
                    <button onClick={() => onAddAddress(user.user_entity_id)}>
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="pl-6 w-2/12">
                    <p className="mr-9">Your Address :</p>
                  </div>
                  <div className="w-10/12">
                    {Array.isArray(addresses)
                      ? addresses &&
                        addresses.map(function (address, index) {
                          return (
                            <div
                              key={index}
                              className="flex justify-between border-b-2 mb-3 pl-2 items-stretch"
                            >
                              <div className="w-3/6">
                                <div className="flex justify-between ">
                                  <div>
                                    <p>{address.etad_addr?.addr_line1}</p>
                                    <p>{address.etad_addr?.addr_line2}</p>
                                  </div>
                                  <div className="flex gap-2 mt-4">
                                    <p>{address.etad_addr?.addr_postal_code}</p>
                                    <p>({address.etad_adty?.adty_name})</p>
                                  </div>
                                </div>
                                <div className="flex mb-3 gap-3 mt-1 ">
                                  <p>City :</p>
                                  <p>
                                    {address.etad_addr?.addr_city?.city_name}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-end gap-1">
                                <div className="flex items-stretch border border-blue-500 rounded-md px-3 py-1 ring-1 ring-blue-500 mr-2 mb-1 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                  <button>Edit</button>
                                </div>
                                <div className="flex items-stretch border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-4 mb-1 text-red-500 font-semibold hover:text-white">
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
                                  <button
                                    onClick={() => {
                                      if (
                                        window.confirm("Delete this record ?")
                                      ) {
                                        onDeletedAddress(address.etad_addr_id);
                                      }
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              {/* EndAddress */}
              {/* Education */}
              <div>
                <div className="flex items-stretch border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
                  <p className="self-center ml-3">Educations</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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
                    <button onClick={() => onAddEducation(user.user_entity_id)}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {educations &&
                  educations.map((educ, index) => {
                    return (
                      <div key={index} className="border-b-2 mb-2">
                        <div>
                          <div className="flex ml-20 mt-6 mb-2">
                            <p className="mr-12">School</p>
                            <span className="ml-1"> : </span>
                            <p className="ml-3">{educ.usdu_school}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-12">Degree</p>
                            <span> : </span>
                            <p className="ml-3">{educ.usdu_degree}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-6">Field Study</p>
                            <span> : </span>
                            <p className="ml-3">{educ.usdu_field_study}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-5">Grade (IPK)</p>
                            <span> : </span>
                            <p className="ml-3">{educ.usdu_grade}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-16">Year</p>
                            <span className="ml-1"> : </span>
                            <p className="ml-3">
                              {moment(educ.usdu_start_date).format("YYYY")}
                            </p>
                            <span className="mx-2">Until</span>
                            <p>{moment(educ.usdu_end_date).format("YYYY")}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-11">Activity</p>
                            <span> : </span>
                            <p className="ml-3">{educ.usdu_activities}</p>
                          </div>
                          <div className="flex ml-20 mb-2">
                            <p className="mr-2">Descriptions</p>
                            <span> : </span>
                            <p className="ml-3">{educ.usdu_description}</p>
                          </div>
                        </div>
                        <div className="mr-2 flex justify-end">
                          <div className="flex items-stretch border border-blue-500 rounded-md px-3 py-1 ring-1 ring-blue-500 mr-3 mb-1 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                            <button>Edit</button>
                          </div>
                          <div className="border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-2 mb-1 flex items-stretch text-red-500 font-semibold hover:text-white">
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
                            <button
                              onClick={() => {
                                if (window.confirm("Delete this record ?")) {
                                  onDeletedEducation(educ.usdu_id);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* EndEducation */}
              {/* Experiences */}
              <div>
                <div className="flex items-stretch border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
                  <p className="self-center ml-3">Experiences</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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
                    <button
                      onClick={() => onAddExperience(user.user_entity_id)}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="mt-3 ml-3">
                  {experiences &&
                    experiences.map(function (expe, index) {
                      return (
                        <div
                          key={index}
                          className="flex justify-between w-full border-b-2 mb-3 pl-14"
                        >
                          <div>
                            <p className="font-bold text-lg">
                              {expe.usex_industry}
                            </p>
                            <p>{expe.usex_profile_headline}</p>
                            <p className="font-semibold text-lg">
                              {expe.usex_company_name}
                            </p>
                            <p>
                              {/* Moment js dependency untuk merubah tanggal */}
                              <span>
                                {moment(expe.usex_start_date).format(
                                  "MMMM YYYY"
                                )}
                              </span>
                              <span className="mx-3">-</span>
                              <span>
                                {moment(expe.usex_end_date).format("MMMM YYYY")}
                              </span>
                            </p>
                            <p>{expe.usex_city?.city_name}</p>
                          </div>
                          <div className="mr-2 grid place-items-end">
                            <div className="flex gap-1">
                              <div className="flex items-stretch border border-blue-500 rounded-md px-3 py-1 ring-1 ring-blue-500 mr-2 mb-1 text-blue-500 font-semibold hover:text-white hover:bg-blue-600">
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
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                                <button
                                  onClick={() =>
                                    onEditExperience(
                                      expe.usex_entity_id,
                                      expe.usex_id
                                    )
                                  }
                                >
                                  Edit
                                </button>
                              </div>
                              <div className="flex items-stretch border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 mr-2 mb-1 text-red-500 font-semibold hover:text-white hover:bg-red-600">
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
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                                <button
                                  onClick={() => {
                                    if (
                                      window.confirm("Delete this record ?")
                                    ) {
                                      onDeletedExperience(expe.usex_id);
                                    }
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* EndExperiences */}
              {/* Skill */}
              <div>
                <div className="flex items-stretch border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
                  <p className="self-center ml-3">Skills</p>
                  <div className="flex items-stretch border border-green-500 rounded-md px-3 py-1 ring-1 ring-green-500 mr-4 my-1 text-green-500 font-semibold hover:text-white hover:bg-green-600">
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

                    <button onClick={() => onAddSkill(user.user_entity_id)}>
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="w-full">
                    {skills &&
                      skills.map((skill, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between border-b-2 mb-3 pl-16 ml-2"
                          >
                            <div>
                              <p>{skill.uski_skty_name}</p>
                            </div>
                            <div className="border border-red-500 rounded-md px-2 py-1 ring-1 ring-red-500 hover:bg-red-600 mr-4 mb-1 flex items-stretch text-red-500 font-semibold hover:text-white">
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
                              <button
                                onClick={() => {
                                  if (window.confirm("Delete this record ?")) {
                                    onDeletedSkill(skill.uski_id);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* EndSkill */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
