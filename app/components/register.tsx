"use client";
import logo from "../../media/logo.png"
import {useRef, useState, useCallback, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useActionState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

declare global {
  interface Window {
    Razorpay: any;
  }
}
export function Indiregister() {
  const isInitialRender1 = useRef(true);
  const isInitialRender2 = useRef(true);
  const [currentStatus, changeStatus] = useState("entering");
  const [members, changeMembers] = useState(1);
  const [ids, putIds] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [day2, setDay2] = useState(false);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] =  useState(false);
  const [event1, setEvent1] = useState("");
  const [event2, setEvent2] = useState("");
  const [members1, setMembers1] = useState(0)
  const [members2, setMembers2] = useState(0)
  const [showCount1, setShowCount1] = useState(false)
  const [showCount2, setShowCount2] = useState(false)
  const [minMem1, setMinMem1] = useState(0)
  const [maxMem1, setMaxMem1] = useState(0)
  const [minMem2, setMinMem2] = useState(0)
  const [maxMem2, setMaxMem2] = useState(0)
  const [showcat1, setShowcat1] = useState(false);
  const [showcat2, setShowcat2] = useState(false)
  const [basket, setbasket] = useState(false);

  const eventsConst = [
    {
      title: "Mr/Ms_Phenomenon",
      members: 1,
    },
    {
      title: "Western_Vocal_Solo",
      members: 1,
    },
    {
      title: "Western_Dance_Solo",
      members: 1,
    },
    {
      title: "Pensworthy",
      members: 1,
    },
    {
      title: "Printmysoul",
      members: 1,
    },
    {
      title: "Smogasboard",
      members: 1,
    },
    {
      title: "Disc-O_Fever",
      members: 1,
    },
    {
      title: "Egnites",
      members: 2,
    },
    {
      title: "The_Movie_Business",
      members: 3,
    },
    {
      title: "Vend",
      members: 3,
    },
    {
      title: "Trilogy",
      members: 3,
    },
    {
      title: "Mystry_Inc.",
      members: 3,
    },
  ]

  const eventsVar = [
    {
      title: "Box_Cricket",
      min: 4,
      max: 5,
    },
    {
      title: "3-A-Side_Basketball",
      min: 3,
      max: 4,
    },
    {
      title: "Rampaeon",
      min: 10,
      max: 12,
    },
    {
      title: "Battle_Of_Bands",
      min: 5,
      max: 7,
    },
    {
      title: "Western_Dance_Group",
      min: 4,
      max: 8,
    },
  ]

  useEffect(() => {  
    if (isInitialRender2.current) {
      // Skip the effect logic on initial render
      isInitialRender2.current = false;
      return;
    }  
    let i = 0 
    let j = 0
    let flag = false
    if(event2 === "Western_Vocal_Solo" || event2 === "Pensworthy"){
      setShowcat2(true);
    }else{
      setShowcat2(false)
    }
    if(event2 === "3-A-Side_Basketball"){
      setbasket(true)
      setShowcat2(true)
    }else{
      setbasket(false)
      setShowcat2(false)
    }
    for(i ; i<eventsConst.length; i++){
      if(event2 === eventsConst[i].title){
        setMembers2(eventsConst[i].members)
        flag = true
        break
      }
    }
    if(flag === true){
      setShowCount2(false)
    }else{
      setShowCount2(true)
      for(j ; j<eventsVar.length; j++){
        if(event2 === eventsVar[j].title){
          setMaxMem2(eventsVar[j].max)
          setMinMem2(eventsVar[j].min)
          break
        }
      }
      if (!showCount2) setShowCount2(true);
    }
  }, [event2, showCount2])

  useEffect(() => {  
    if (isInitialRender1.current) {
      // Skip the effect logic on initial render
      isInitialRender1.current = false;
      return;
    }  
    let i = 0 
    let j = 0
    let flag = false
    if(event1 === "Western_Vocal_Solo" || event1 === "Pensworthy"){
      setShowcat1(true);
    }else{
      setShowcat1(false)
    }
    for(i ; i<eventsConst.length; i++){
      if(event1 === eventsConst[i].title){
        setMembers1(eventsConst[i].members)
        console.log(eventsConst[i].title)
        flag = true
        break
      }
    }
    if(flag === true){
      setShowCount1(false)
    }else{
      setShowCount1(true)
      for(j ; j<eventsVar.length; j++){
        if(event1 === eventsVar[j].title){
          setMaxMem1(eventsVar[j].max)
          setMinMem1(eventsVar[j].min)
          break
        }
      }
      if (!showCount1) setShowCount1(true);
    }
  }, [event1, showCount1])

  useEffect(() => {
    if((isChecked === false || isChecked === true) && event1 === "The_Movie_Business") {
      setIsChecked(true)
      setShow1(true);
      setShow2(false);
    }else if(isChecked === true && event1 !== "The_Movie_Business"){
      setShow1(true);
      setShow2(true);
      setDay2(false)
    }else if(event1 !== "The_Movie_Business"){
      setIsChecked(false)
      if(day2 === true){
        setShow1(false);
        setShow2(true);
        setMembers1(0)
      }else if(day2 === false){
        setShow1(true);
        setShow2(false);
        setMembers2(0)
      }
    }
  }, [day2, isChecked, event1])

  useEffect(() => {

  }, [members1])

  const Template = useCallback((props: { 
    name: React.ReactNode; 
    member: string; 
  }) => {
    return (
      <div className="flex flex-col justify-center items-center mt-11 shadow-lg my-10">
        <h1 className="text-white md:text-5xl text-3xl text-center">{props.name}</h1>
        {/* register htmlForm */}
        <div className="grid md:grid-cols-2 md:gap-6 w-full">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_first_name`}
              id={`${props.member}_first_name`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
              dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_first_name`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_last_name`}
              id={`${props.member}_last_name`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_last_name`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>  
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name={`${props.member}_email`}
            id={`${props.member}_email`}
            className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor={`${props.member}_email`}
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
            -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div  className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_date_of_birth`}
              id={`${props.member}_date_of_birth`}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_date_of_birth`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date Of Birth
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name={`${props.member}_phone`}
              id={`${props.member}_phone`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_phone`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>
      </div>
    );
  }, []);
  
  const makePayment = async (info: { 
    name?: string; institution?: any; country?: any; experience?: any; placements?: any; backupCountry?: any; 
    email?: any; phoneNumber?: any; backupCommittee?: any; committee?: any; food?: any; 
    person_two_name?: string; person_two_institution?: any; person_two_experience?: any; 
    person_two_placements?: any; person_two_email?: any; person_two_phone?: any; 
    person_two_backupCommittee?: any; person_two_food?: any; total?: number; 
    order_id?: any; payment_id?: any; razorpay_signature?: any; 
  }) => {
    changeStatus("loading");
  
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    console.log("time to fetch");
  
    const data = await fetch("https://mun-backend.vercel.app/indipay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total: ((members1) + (members2)) // Number of members
      }),
    }).then((t) => t.json());
    
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY,
      name: `St Joseph's Boys' Highschool`,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "SJBHS MUN",
      image: { logo },
      handler: async function (response: { razorpay_order_id: any; razorpay_payment_id: any; razorpay_signature: any; }) {
        info.order_id = response.razorpay_order_id;
        info.payment_id = response.razorpay_payment_id;
        info.razorpay_signature = response.razorpay_signature;
  
        const JSONdata = JSON.stringify(info);
        const endpoint = "https://mun-backend.vercel.app/individual ";
  
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };
  
        try {
  const response = await fetch(endpoint, options);
  console.log("Response status:", response.status);

  if (!response.ok) {
    // Log the server's error response for debugging
    const errorText = await response.text();
    console.error("Error response from server:", errorText);

    // Throw an error with the HTTP status code for error handling
    throw new Error(`Request failed with status ${response.status}`);
  }

  // Parse the JSON response if the request is successful
  const result = await response.json();
  console.log("Result from server:", result);

  // Additional handling for the result
  if (result.result === "success") {
    putIds(result.ids); // Assuming `putIds` is a state setter
    changeStatus("done"); // Update the status to "done" after success
  } else {
    console.error("Unexpected result:", result);
    changeStatus("error"); // Update the status to "error" for any unexpected result
  }
} catch (error) {
  console.error("Fetch failed:", error.message);

  // Update the UI state to reflect the error
  changeStatus("error");

  // Optionally, log additional error details for debugging
  if (error instanceof Error) {
    console.error("Error details:", error.stack || error.message);
  }
}

      },
      prefill: {
        name: "",
        email: "   ",
        contact: " ",
      },
      theme: {
        color: "#000000",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
  
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };
  
  const handleSubmit = async (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
  
    const requiresCategoryDay1 = ["Western_Vocal_Solo", "Pensworthy", "Mr/Ms_Phenomenon"].includes(event.target.events_day1?.value);
    const requiresCategoryDay2 = ["Western_Dance_Group", "3-A-Side_Basketball"].includes(event.target.events_day2?.value);
  
    // Extract the day2 event value and trim it
    const day2EventValue = event.target.events_day2?.value?.trim() || "";
  
    const data = {
      fName: `${event.target.first_name.value} ${event.target.last_name.value}`,
      email: event.target.email.value,
      phoneNumber: event.target.phone.value,
      dateOfBirth: event.target.date_of_birth.value,
      isChecked: isChecked,
      day1: {
        event: event.target.events_day1?.value || "",
        category: requiresCategoryDay1 ? event.target.category_day1?.value || null : null,
        members: members1, 
        additionalParticipants: [],
      },
      day2: day2EventValue !== ""
        ? {
            event: day2EventValue,
            category: requiresCategoryDay2 ? event.target.category_day2?.value || null : null,
            members: members2,
            additionalParticipants: [],
          }
        : null,
      total: (members1) + (members2),
    };
  
    // Dynamically add additional participants for Day 1
    if (members1 > 1) {
      for (let i = 2; i <= members1; i++) {
        data.day1.additionalParticipants.push({
          name: `${event.target[`participant_day1_${i}_first_name`]?.value || ""} ${
            event.target[`participant_day1_${i}_last_name`]?.value || ""
          }`.trim(),
          email: event.target[`participant_day1_${i}_email`]?.value || "",
          phoneNumber: event.target[`participant_day1_${i}_phone`]?.value || "",
          dateOfBirth: event.target[`participant_day1_${i}_date_of_birth`]?.value || "",
        });
      }
    }
  
    // Dynamically add additional participants for Day 2
    if (data.day2 && members2 > 1) {
      for (let i = 2; i <= members2; i++) {
        data.day2.additionalParticipants.push({
          name: `${event.target[`participant_day2_${i}_first_name`]?.value || ""} ${
            event.target[`participant_day2_${i}_last_name`]?.value || ""
          }`.trim(),
          email: event.target[`participant_day2_${i}_email`]?.value || "",
          phoneNumber: event.target[`participant_day2_${i}_phone`]?.value || "",
          dateOfBirth: event.target[`participant_day2_${i}_date_of_birth`]?.value || "",
        });
      }
    }
  
    console.log("Final Data:", data);
    makePayment(data);
  };
  
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-white font-bold sm:text-5xl text-4xl  text-center mun-gradient">
        INDIVIDUAL REGISTRATION
      </h1>
      <h1 className="text-red-500 font-semibold sm:text-md text-md text-center mt-5">
        {`Only Individual Delegates are allowed to register through this.`}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mb-52"
      >
        <div className="flex flex-col justify-center items-center mt-1">
          <div className="sm:w-auto w-[70vw] mt-11 px-5 shadow-lg my-10 ">
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>  
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div  className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="date_of_birth"
                  id="date_of_birth"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="date_of_birth"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                  peer-focus:-translate-y-6"
                >
                  Date Of Birth
                </label>
              </div>
              <div className="grid  md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                    dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                    focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                    -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 items-center mb-5">
              <div className="relative z-0 w-full group flex flex-row items-center text-electricBlue gap-2">
                <div className="relative inline-block w-11 h-5">
                  <input id="switch-component" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-500 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
                  <span className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                  </span>
                </div>
                <label htmlFor="switch-component" className={`${isChecked ? "text-blue-500" : "text-gray-500"} text-sm`}>Participate on both days</label>
              </div>
              <div className={`${isChecked ? "hidden" : "flex"} flex-row md:gap-5 md:text-base text-sm items-center md:mt-0 mt-5 justify-self-center`}>
                <div
                  onClick={() => setDay2(false)}
                  className={`${
                    !day2 ? "bg-black text-blue-500" : "text-electricBlue"
                  } font-semibold py-1 px-4 rounded-2xl text-center cursor-pointer`}
                >
                  <span className="text-sm text-lightblue">Only Day 1</span>
                  <input type="radio" name="day1" id="day1" className="hidden" checked={!day2} />
                </div>
                <div
                  onClick={() => setDay2(true)}
                  className={`${
                    day2 ? "bg-black text-blue-500" : "text-electricBlue"
                  } font-semibold py-1 px-4 rounded-2xl text-center cursor-pointer`}
                >
                  <span className="text-sm text-lightblue">Only Day 2</span>
                  <input type="radio" name="day2" id="day2" className="hidden" checked={day2} />
                </div>
              </div>
            </div>
            <div className="grid md:grid-row-2 lg:gap-6 gap-8 md:gap-12 mb-6 lg:mt-0 mt-12">
              <div className={`grid lg:grid-flow-col grid-flow-row gap-3 ${show1 ? "block" : "hidden"}`}>
                <div className={``}>
                  <label htmlFor="events_day1" className="text-sm text-gray-400 ">
                    Event (Day 1)
                  </label>
                  <select
                    id="events_day1"
                    name="events_day1"
                    className="mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 "
                    onChange={(e) => (setEvent1(e.target.value))}
                  >
                    <option value="null">-----</option>
                    <option value="Mr/Ms_Phenomenon">Mr/Ms Phenomenon (Personality)</option>
                    <option value="Mystry_Inc.">Mystry Inc.(Treasure Hunt)</option>
                    <option value="Western_Dance_Solo">Western Dance Solo</option>
                    <option value="The_Movie_Business">The Movie Business (Film Making)</option>
                    <option value="Pensworthy">Pensworthy (Creative Writing)</option>
                    <option value="Egnites">Egnites (STEM)</option>
                    <option value="Battle_Of_Bands">Battle Of Bands</option>
                    <option value="Box_Cricket">Box Cricket</option>
                  </select>
                </div>
                <div className={`${showCount1 ? "block": "hidden"}`}>
                  <label htmlFor="members_day1" className="text-sm text-gray-400">Number of Members</label>
                  <input 
                    type="number" 
                    name="members_day1" 
                    id="members_day1" 
                    max={maxMem1} 
                    min={minMem1} 
                    onChange={(e) => (setMembers1(parseInt(e.target.value)))} 
                    className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                    placeholder={`min: ${minMem1}, max: ${maxMem1}`}
                  />
                </div>
                <div className={`${showcat1 ? "block" : "hidden"}`}>
                  <label htmlFor="category_day1" className="text-gray-400 text-sm">Category</label>
                  <select
                    id="category_day1"
                    name="category_day1"
                    className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                    onChange={(e) => {e.target.value}}
                  >
                    <option value="null">---</option>
                    <option value="Junior">Junior(8th to 10th)</option>
                    <option value="Senior">Senior(11th to 1st year degree)</option>
                  </select>
                </div>
              </div>
              <div className={`grid lg:grid-flow-col grid-flow-row gap-3 ${show2 ? "block" : "hidden"}`}>
                <div className={``}>
                  <label
                    htmlFor="events_day2"
                    className="text-sm text-gray-400 "
                  >
                    Event (Day 2)
                  </label>
                  <select
                    id="events_day2"
                    name="events_day2"
                    className="mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                    onChange={(e) => (setEvent2(e.target.value))}
                  >
                    <option value="null">-----</option>
                    <option value="Western_Dance_Group">Western Dance Group</option>
                    <option value="Western_Vocal_Solo">Western Vocal Solo</option>
                    <option value="Trilogy">Trilogy (Potpourri)</option>
                    <option value="Vend">Vend (Commerce)</option>
                    <option value="Printmysoul">Printmysoul (Poster Making)</option>
                    <option value="Smogasboard">Smogasboard (Food Tasting)</option>
                    <option value="Rampaeon">Rampaeon (Fashion Show)</option>
                    <option value="Disc-O_Fever">Disc-O Fever (Disc Battle)</option>
                    <option value="3-A-Side_Basketball">3-A-Side Basketball</option>
                  </select>
                </div>
                <div className={`${showCount2 ? "block": "hidden"}`}>
                  <label htmlFor="members_day2" className="text-sm text-gray-400">Number of Members</label>
                  <input 
                    type="number" 
                    name="members_day2" 
                    id="members_day2" 
                    max={maxMem2} 
                    min={minMem2} 
                    onChange={(e) => (setMembers2(parseInt(e.target.value)))} 
                    className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                    placeholder={`min: ${minMem2}, max: ${maxMem2}`}
                  />
                </div>
                <div className={`${showcat2 ? "block" : "hidden"}`}>
                  <label htmlFor="category_day2" className="text-gray-400 text-sm">Category</label>
                  {basket ? (
                    <select
                      id="category_day2"
                      name="category_day2"
                      className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                      onChange={(e) => {e.target.value}}
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  ) : (
                    <select
                      id="category_day2"
                      name="category_day2"
                      className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                      onChange={(e) => {e.target.value}}
                    >
                      <option value="Junior">Junior(8th to 10th)</option>
                      <option value="Senior">Senior(11th to 1st year degree)</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
          </div>
  
          {/* Day 1 Additional Participants */}
          {members1 > 1 ? (
            <div className="md:w-[97vw] w-[95vw] grid grid-cols-1 justify-items-center mt-10">
              <hr className="border-t border-gray-200 w-full z-10"/>
              <span className="text-electricBlue font-semibold md:text-5xl text-4xl mt-10">
                DAY 1
              </span>
              <div className="w-[95%]">
                <Swiper
                  effect="coverflow"
                  spaceBetween={0}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={false}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                  }}
                  pagination={{ el: '.pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                  } as any}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className='text-electricBlue flex flex-col items-center'
                >
                  {Array.from({ length: members1 - 1 }, (_, i) => {
                    let delegateNumber = i + 2;
                    return (
                      <SwiperSlide className="!flex !max-w-lg justify-center" key={i}>
                        <Template
                          name={`Participant ${delegateNumber}`}
                          member={`participant_day1_${delegateNumber}`}
                        />
                      </SwiperSlide>
                    );
                  })}
                  
                  <div className='text-galaxyBlue flex w-full justify-center mt-5'>
                    <div className='bg-lightGray !grid !justify-items-center pb-0.5  px-4 rounded-full bg-opacity-30'>
                      <FaArrowLeft className='swiper-button-prev lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                      <div className="pagination"></div>
                      <FaArrowRight className='swiper-button-next lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          ) : (
            ""
          )}
  
          {/* Day 2 Additional Participants */}
          {members2 > 1 ? (
            <div className="md:w-[97vw] w-[95vw] grid grid-cols-1 justify-items-center mt-10">
              <hr className="border-t border-gray-200 w-full z-10"/>
              <span className="text-electricBlue font-semibold md:text-5xl text-4xl mt-10">
                DAY 2
              </span>
              <div className="w-[95%]">
                <Swiper
                  effect="coverflow"
                  spaceBetween={0}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={false}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                  }}
                  pagination={{ el: '.pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                  } as any}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className='text-electricBlue flex flex-col items-center'
                >
                  {Array.from({ length: members2 - 1 }, (_, i) => {
                    let delegateNumber = i + 2;
                    return (
                      <SwiperSlide className="!flex !max-w-lg justify-center" key={i}>
                        <Template
                          name={`Participant ${delegateNumber}`}
                          member={`participant_day2_${delegateNumber}`}
                        />
                      </SwiperSlide>
                    );
                  })}
                  
                  <div className='text-galaxyBlue flex w-full justify-center mt-5'>
                    <div className='bg-lightGray !grid !justify-items-center pb-0.5  px-4 rounded-full bg-opacity-30'>
                      <FaArrowLeft className='swiper-button-prev lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                      <div className="pagination"></div>
                      <FaArrowRight className='swiper-button-next lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 mt-10 rounded-md text-white outline-none shadow-lg transform align-left active:scale-90 transition-transform"
          disabled={currentStatus === "done" ? true : false}
        >
          {currentStatus === "entering"
  ? "PAY"
  : currentStatus === "loading"
  ? "Loading"
  : currentStatus === "done"
  ? "Success"
  : "Error"}
</button>
</form>
{currentStatus === "done" ? (
  <div className="flex flex-col justify-center items-center p-10 h-full mx-24 rounded-lg shadow-emerald-500 shadow-sm bg-black">
    <p className="mb-3 text-4xl text-white">
      Congrats! You are officially part of Phenomenon 2024 🎉
    </p>
    <p className="mb-3 text-xl text-white">
      {`Take a screenshot of your Participant ID so you don't forget.`}
    </p>
    <ul className="list-none mt-14 text-lg">
      {ids.map((person, index) => (
        <li className="text-white" key={index}>
          {person[0]} : PMN{person[1]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
} 

export const DelegationRegistration = () => {
  const [members, changeMembers] = useState(0);
  const [ids, putIds] = useState([]);
  const [eventno, setEventno] = useState(0);
  const [eventSelections, setEventSelections] = useState<string[]>([]);
  const [memberCounts, setMemberCounts] = useState<number[]>([]);
  const [categorySelections, setCategorySelections] = useState<string[]>([]);


  const eventsWithCategories = [
    "3-A-Side_Basketball",
    "Western_Vocal_Solo",
    "Pensworthy",
  ];

  const eventsConst = [
    { title: "Mr/Ms_Phenomenon", members: 1 },
    { title: "Western_Vocal_Solo", members: 1 },
    { title: "Western_Dance_Solo", members: 1 },
    { title: "Pensworthy", members: 1 },
    { title: "Printmysoul", members: 1 },
    { title: "Smogasboard", members: 1 },
    { title: "Disc-O_Fever", members: 1 },
    { title: "Egnites", members: 2 },
    { title: "The_Movie_Business", members: 3 },
    { title: "Vend", members: 3 },
    { title: "Trilogy", members: 3 },
    { title: "Mystry_Inc.", members: 3 },
  ];

  const eventsVar = [
    { title: "Box_Cricket", min: 4, max: 5 },
    { title: "3-A-Side_Basketball", min: 3, max: 4 },
    { title: "Rampaeon", min: 10, max: 12 },
    { title: "Battle_Of_Bands", min: 5, max: 7 },
    { title: "Western_Dance_Group", min: 4, max: 8 },
  ];

  // Initialize `memberCounts` and `categorySelections` when the component mounts
  useEffect(() => {
    // Initialize member counts and categories based on eventSelections
    const updatedCounts = [...memberCounts];
    const updatedCategories = [...categorySelections];

    eventSelections.forEach((eventTitle, index) => {
      // Check for constant member events
      if (updatedCounts[index] === undefined) {
        const constEvent = eventsConst.find((e) => e.title === eventTitle);
        if (constEvent) {
          updatedCounts[index] = constEvent.members;
        } else {
          const varEvent = eventsVar.find((e) => e.title === eventTitle);
          if (varEvent) {
            updatedCounts[index] = varEvent.min; // Default to min members
          } else {
            updatedCounts[index] = 0; // Default for undefined events
          }
        }
      }

      // Initialize category if it's not yet set
      if (updatedCategories[index] === undefined) {
        if (eventsWithCategories.includes(eventTitle)) {
          // Set default categories based on event
          if (eventTitle === "3-A-Side_Basketball") {
            updatedCategories[index] = "Male"; // Default for this event
          } else if (eventTitle === "Pensworthy" || eventTitle === "Western_Vocal_Solo") {
            updatedCategories[index] = "Junior"; // Default for these events
          } else {
            updatedCategories[index] = ""; // Default empty for others
          }
        }
      }
    });

    // Update the states with initialized values
    setMemberCounts(updatedCounts);
    setCategorySelections(updatedCategories);

  }, [eventSelections]); // Run when eventSelections changes or initially mounts

  const handleEventChange = (index: number, value: string) => {
    const updatedSelections = [...eventSelections];
    updatedSelections[index] = value;
    setEventSelections(updatedSelections);
    
    // Update member count based on event selection
    const updatedCounts = [...memberCounts];
    const constEvent = eventsConst.find((e) => e.title === value);
    if (constEvent) {
      updatedCounts[index] = constEvent.members;
    } else {
      const varEvent = eventsVar.find((e) => e.title === value);
      if (varEvent) {
        updatedCounts[index] = varEvent.min;
      } else {
        updatedCounts[index] = 0;
      }
    }
    setMemberCounts(updatedCounts);
  
    // Update category based on event selection
    const updatedCategories = [...categorySelections];
    if (!updatedCategories[index]) {
      if (value === "3-A-Side_Basketball") {
        updatedCategories[index] = "Male"; // Default category for 3-A-Side Basketball
      } else if (value === "Pensworthy" || value === "Western_Vocal_Solo") {
        updatedCategories[index] = "Junior"; // Default category for these events
      } else {
        updatedCategories[index] = ""; // No category for others
      }
    }
    setCategorySelections(updatedCategories);
  };
    
  const handleMemberCountChange = (index: number, value: number) => {
    const updatedCounts = [...memberCounts];
    updatedCounts[index] = value;
    setMemberCounts(updatedCounts);
  };

  // Function to get event data, reflecting current state
  const getEventData = () => {
    return eventSelections.map((eventTitle, index) => {
      const eventData: any = {
        name: eventTitle,
        members: memberCounts[index] || 0, // Ensure member count exists
        category: categorySelections[index] || "", // Ensure category exists
      };
      
      return eventData;
    });
  };

  const selectedEventData = getEventData();
  console.log(selectedEventData);

  const Template = useCallback((props: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; member: any; }) => {
    return (
      <div className="flex flex-col justify-center items-center mt-11 shadow-lg my-10">
        <h1 className="text-white md:text-5xl text-3xl text-center">{props.name}</h1>
        {/* register htmlForm */}
        <div className="grid md:grid-cols-2 md:gap-6 w-full">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_first_name`}
              id={`${props.member}_first_name`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_first_name`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_last_name`}
              id={`${props.member}_last_name`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_last_name`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>  
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name={`${props.member}_email`}
            id={`${props.member}_email`}
            className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div  className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name={`${props.member}_date_of_birth`}
              id={`${props.member}_date_of_birth`}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_date_of_birth`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date Of Birth
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name={`${props.member}_phone`}
              id={`${props.member}_phone`}
              className="block py-2.5 px-0 w-full text-sm text-lightblue bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.member}_phone`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>
      </div>
    );
  }, []);

  const [currentStatus, changeStatus] = useState("entering");

  const makePayment = async (info: { name?: string; type?: string; total?: number; delegation?: { name: string; country: any; experience: any; placements: any; backupCountry: any; email: any; phoneNumber: any; backupCommittee: any; committee: any; food: any; }[]; order_id?: any; payment_id?: any; razorpay_signature?: any; }) => {
    console.log("Members: " + members)
                  console.log("Name: " + delegationDetails)

    changeStatus("loading");

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    console.log("time to fetch");
    const delregtype = "delegation";
    const data = await fetch("https://mun-backend.vercel.app/indipay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
       body: JSON.stringify({ total: members, registrationType: "delegation" }) // or "delegation"
    }).then((t) => t.json());

    var options = {
      key: process.env.RAZORPAY_KEY,
      name: `St Joseph's Boys' Highschool`,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "SJBHS MUN",
      image: { logo },
      handler: async function (response: { razorpay_order_id: any; razorpay_payment_id: any; razorpay_signature: any; }) {
        info.order_id = response.razorpay_order_id;
        info.payment_id = response.razorpay_payment_id;
        info.razorpay_signature = response.razorpay_signature;

        const JSONdata = JSON.stringify(info);
        console.log("This is the final info we got  "+ JSONdata)

        // API endpoint where we send htmlForm data.
        const endpoint = "https://mun-backend.vercel.app/delegation ";

        const options = {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };

        // Send the htmlForm data to our htmlForms API on Vercel and get a response.
        const result = await (await fetch(endpoint, options)).json();
        if (result.result === "success") {
          changeStatus("done");
          console.log(ids);
          putIds(result.ids);
        } else {
          changeStatus("error");
        }
      },
      prefill: {
        name: "",
        email: "   ",
        contact: " ",
      },
      theme: {
        color: "#000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const handleSubmit = async (event: { preventDefault: () => void; target: { [x: string]: { value: any; }; head_delegate_first_name: { value: string; }; head_delegate_last_name: { value: string; }; head_delegate_country: { value: any; }; head_delegate_number_muns: { value: any; }; head_delegate_placements: { value: any; }; head_delegate_backupCountry: { value: any; }; head_delegate_email: { value: any; }; head_delegate_phone: { value: any; }; head_delegate_backupCommittee: { value: any; }; head_delegate_committee: { value: any; }; head_delegate_food: { value: any; }; }; }) => {
    console.log("On it ");

    // Stop the htmlForm from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the htmlForm.
    let delegation = [
      {
        name:
          event.target.head_delegate_first_name.value +
          " " +
          event.target.head_delegate_last_name.value,
        country: event.target.head_delegate_country.value,
        experience: event.target.head_delegate_number_muns.value,
        placements: event.target.head_delegate_placements.value,
        backupCountry: event.target.head_delegate_backupCountry.value,
        email: event.target.head_delegate_email.value,
        phoneNumber: event.target.head_delegate_phone.value,
        backupCommittee: event.target.head_delegate_backupCommittee.value,
        committee: event.target.head_delegate_committee.value,
        food: event.target.head_delegate_food.value,
      },
    ];
    for (let i = 2; i <= members; i++) {
      delegation.push({
        name:
          event.target[`delegate_${i}_first_name`].value +
          " " +
          event.target[`delegate_${i}_last_name`].value,
        country: event.target[`delegate_${i}_country`].value,
        experience: event.target[`delegate_${i}_number_muns`].value,
        placements: event.target[`delegate_${i}_placements`].value,
        backupCountry: event.target[`delegate_${i}_backupCountry`].value,
        email: event.target[`delegate_${i}_email`].value,
        phoneNumber: event.target[`delegate_${i}_phone`].value,
        backupCommittee: event.target[`delegate_${i}_backupCommittee`].value,
        committee: event.target[`delegate_${i}_committee`].value,
        food: event.target[`delegate_${i}_food`].value,
      });
    }
    const data = {
      
      name: delegationDetails[0],
      type: delegationDetails[1],
      total: members,
      delegation: delegation,
    };
    console.log("This is the data we are sending to the function, with the name: data" +JSON.stringify(data))
    makePayment(data);
  };
  const [delegationDetails, changeDetails] = useState(["", "test"]);
  return (
    
    <div className="mt-10 mb-44">
      {members < 10 ? (
        <>
          <h1 className="md:text-6xl text-4xl text-white text-center font-bold mun-gradient">
            INSTITUTIONAL INFORMATION
          </h1>
          <section className="">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Name: "+ (e.target as HTMLInputElement).name.valueOf)
                 
                  // changeDetails([(e.target as HTMLInputElement).name.value, (e.target as HTMLInputElement).days.value]);
                  
                  changeMembers((e.target as HTMLFormElement).total_members.value);
                  
                }}
              > 
                <div className="grid gap-4 grid-cols-2  sm:gap-6">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      SCHOOL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="item-weight"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      TOTAL DELEGATES
                    </label>
                    <input
                      type="number"
                      name="item-weight"
                      id="total_members"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      min="10"
                      required
                      onChange={(e) => {
                        setEventno(parseInt(e.target.value))
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  {Array.from({ length:eventno }).map((_ , index) => (
                    <div className={`grid lg:grid-flow-col grid-flow-row gap-3 mt-5`} key={index}>
                      <div className={``}>
                        <label
                          htmlFor="event"
                          className="text-sm text-gray-400 "
                        >
                          Event
                        </label>
                        <select
                          id="event"
                          name="event"
                          className="mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          onChange={(e) => handleEventChange(index, e.target.value)}
                        >
                          <option value="empty">---------</option>
                          <option value="Mr/Ms_Phenomenon">Mr/Ms Phenomenon (Personality)</option>
                          <option value="Mystry_Inc.">Mystry Inc.(Treasure Hunt)</option>
                          <option value="Western_Dance_Solo">Western Dance Solo</option>
                          <option value="The_Movie_Business">The Movie Business (Film Making)</option>
                          <option value="Pensworthy">Pensworthy (Creative Writing)</option>
                          <option value="Egnites">Egnites (STEM)</option>
                          <option value="Battle_Of_Bands">Battle Of Bands</option>
                          <option value="Box_Cricket">Box Cricket</option>
                          <option value="Western_Dance_Group">Western Dance Group</option>
                          <option value="Western_Vocal_Solo">Western Vocal Solo</option>
                          <option value="Trilogy">Trilogy (Potpourri)</option>
                          <option value="Vend">Vend (Commerce)</option>
                          <option value="Printmysoul">Printmysoul (Poster Making)</option>
                          <option value="Smogasboard">Smogasboard (Food Tasting)</option>
                          <option value="Rampaeon">Rampaeon (Fashion Show)</option>
                          <option value="Disc-O_Fever">Disc-O Fever (Disc Battle)</option>
                          <option value="3-A-Side_Basketball">3-A-Side Basketball</option>
                        </select>
                      </div>
                      { eventsVar.some((e) => e.title === eventSelections[index]) ? (
                        <div className={``}>
                          <label htmlFor={`members_event${index}`} className="text-sm text-gray-400">Number of Members</label>
                          <input 
                            type="number" 
                            name={`members_event${index}`} 
                            id={`members_event${index}`} 
                            className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                            placeholder={`Min: ${eventsVar.find(
                              (e) => e.title === eventSelections[index]
                            )?.min}, Max: ${eventsVar.find(
                              (e) => e.title === eventSelections[index]
                            )?.max}`}
                            min={eventsVar.find((e) => e.title === eventSelections[index])
                              ?.min}
                            max={eventsVar.find((e) => e.title === eventSelections[index])
                              ?.max}
                            value={memberCounts[index] || ""}
                            onChange={(e) =>
                              handleMemberCountChange(index, parseInt(e.target.value, 10))
                            }
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {eventsWithCategories.includes(eventSelections[index]) && (
                        <div className={``}>
                          <label htmlFor={`category_event${index}`} className="text-gray-400 text-sm">Category</label>
                          <select
                            id={`category_event${index}`}
                            name={`category_event${index}`}
                            className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 "
                            value={categorySelections[index] || ""}
                            onChange={(e) => {
                              const updatedCategories = [...categorySelections];
                              updatedCategories[index] = e.target.value;
                              setCategorySelections(updatedCategories);
                            }}
                          >
                            {eventSelections[index] === "3-A-Side_Basketball" ? (
                              <>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                              </>
                            ) : (
                              <>
                                <option value="Junior">Junior(8th to 10th)</option>
                                <option value="Senior">Senior(11th to 1st year degree)</option>
                              </>
                            )}
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-amber-600 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Register
                </button>
              </form>
            </div>
          </section>
        </>
      ) : (
        <form
          className="flex flex-col justify-center items-center mt-10 mb-52"
          onSubmit={handleSubmit}
        >
          <h1 className="md:text-6xl text-4xl text-white text-center">
            INSTITUTIONAL REGISTRATION
          </h1>
          <h1 className="text-red-500 font-semibold sm:text-md text-md text-center mt-5">
            {`Only Internal Delegates are allowed to register through this, external delegates won't be refunded`}
          </h1>
          {selectedEventData.map((event , idx) => (
            <div className="md:w-[97vw] w-[95vw] grid grid-cols-1 justify-items-center mt-10" key={idx}>
              {/* <hr className="border-t border-gray-200 w-full z-10"/> */}
              {event.name ? (
                <>
                  {event.category === "" ? (
                    <span className="text-electricBlue font-semibold md:text-5xl text-4xl mt-10 text-center">
                      {event.name.replace(/_/g, " ")}
                    </span>
                  ) : (
                    <span className="text-electricBlue font-semibold md:text-5xl text-4xl mt-10 text-center">
                      {event.name.replace(/_/g, " ")} ({event.category})
                    </span>
                  )}
                </>
              ) : (
                <span className="text-electricBlue font-semibold md:text-5xl text-4xl mt-10 text-center">
                  Unkonwn Event
                </span>
              )}
              <div className="w-[95%]">
                <Swiper
                  effect="coverflow"
                  spaceBetween={0}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={false}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                  }}
                  pagination={{ el: '.pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                  } as any}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className='text-electricBlue flex flex-col items-center'
                >
                  
                    {Array.from({ length: event.members }, (_, i) => {
                      let delegateNumber = i + 1;
                      return (
                        <SwiperSlide className="!flex !max-w-lg justify-center" key={i}>
                          <Template
                            name={`Participant ${delegateNumber}`}
                            member={`participant_${delegateNumber}`}
                            key={i}
                          />
                        </SwiperSlide>
                      );
                    })}
                  
                  <div className='text-galaxyBlue flex w-full justify-center mt-5'>
                    <div className='bg-lightGray !grid !justify-items-center pb-0.5  px-4 rounded-full bg-opacity-30'>
                      <FaArrowLeft className='swiper-button-prev lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                      <div className="pagination"></div>
                      <FaArrowRight className='swiper-button-next lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 m-10 rounded-md text-white outline-none  shadow-lg transhtmlForm align-left active:scale-90 transition-transhtmlForm "
            disabled={currentStatus === "done" ? true : false}
          >
            {currentStatus === "entering"
              ? "PAY"
              : currentStatus === "loading"
              ? "Loading"
              : currentStatus === "done"
              ? "Success"
              : "Error"}
          </button>
        </form>
      )}
      {currentStatus === "done" ? (
        <div
           
          className="flex flex-col justify-center items-center p-10 h-full mx-24 rounded-lg shadow-emerald-500 shadow-sm bg-black"
        >
          <p className="mb-3 text-4xl text-white">
            Congrats you are officially part of PHENOMENON 2024 🎉
          </p>

          <p className="mb-3 text-xl text-white">
            {`Take a screen shot of your UUID so you not don't forget`}
          </p>
          <ul className="list-none mt-14 text-lg">
            {ids.map((person) => (
              <li className="text-white" key={person}>
                {person[0]} : PHENOMENON{person[1]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
