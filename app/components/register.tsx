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

  const Template = useCallback((props: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; member: any; }) => {
    return (
      <div className="flex flex-col justify-center items-center mt-11 mx-14 px-5 shadow-lg my-10">
        <h1 className="text-white md:text-5xl text-3xl text-center">{props.name}</h1>
        {/* register htmlForm */}
        <div className="grid md:grid-cols-2 md:gap-6 w-full">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`${props.member}_first_name`}
              id={`${props.member}_first_name`}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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

  const makePayment = async (info: { name?: string; institution?: any; country?: any; experience?: any; placements?: any; backupCountry?: any; email?: any; phoneNumber?: any; backupCommittee?: any; committee?: any; food?: any; person_two_name?: string | undefined; person_two_institution?: any; person_two_experience?: any; person_two_placements?: any; person_two_email?: any; person_two_phone?: any; person_two_backupCommittee?: any; person_two_food?: any; total?: number; order_id?: any; payment_id?: any; razorpay_signature?: any; }) => {
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
        total: members, // Number of members
        registrationType: "individual", // or "delegation"
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

        // API endpoint where we send htmlForm data.
        const endpoint = "https://mun-backend.vercel.app/individual ";

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

  const handleSubmit = async (event: {preventDefault: () => void; target: { first_name: { value: string; }; last_name: { value: string; }; institution: { value: any; }; country: { value: any; }; number_muns: { value: any; }; placements: { value: any; }; backupCountry: { value: any; }; email: { value: any; }; phone: { value: any; }; backupCommittee: { value: any; }; committee: { value: any; }; food: { value: any; }; person_two_first_name: { value: string; }; person_two_last_name: { value: string; }; person_two_institution: { value: any; }; person_two_experience: { value: any; }; person_two_placements: { value: any; }; person_two_email: { value: any; }; person_two_phone: { value: any; }; person_two_backupCommittee: { value: any; }; person_two_food: { value: any; }; }; }) => {
    console.log("On it ");

    // Stop the htmlForm from submitting and refreshing the page.
    event.preventDefault();
    const data: {
      name: string;
      institution: any;
      country: any;
      experience: any;
      placements: any;
      backupCountry: any;
      email: any;
      phoneNumber: any;
      backupCommittee: any;
      committee: any;
      food: any;
      person_two_name?: string;
      person_two_institution?: any;
      person_two_experience?: any;
      person_two_placements?: any;
      person_two_email?: any;
      person_two_phone?: any;
      person_two_backupCommittee?: any;
      person_two_food?: any;
      total: number;
    } = {
      name: event.target.first_name.value + " " + event.target.last_name.value,
      institution: event.target.institution.value,
      country: event.target.country.value,
      experience: event.target.number_muns.value,
      placements: event.target.placements.value,
      backupCountry: event.target.backupCountry.value,
      email: event.target.email.value,
      phoneNumber: event.target.phone.value,
      backupCommittee: event.target.backupCommittee.value,
      committee: event.target.committee.value,
      food: event.target.food.value,
      total: 0
    };
    if (members === 2) {
      data.person_two_name =
        event.target.person_two_first_name.value +
        "  " +
        event.target.person_two_last_name.value;
      data.person_two_institution = event.target.person_two_institution.value;
      data.person_two_experience = event.target.person_two_experience.value;
      data.person_two_placements = event.target.person_two_placements.value;
      data.person_two_email = event.target.person_two_email.value;
      data.person_two_phone = event.target.person_two_phone.value;
      data.person_two_backupCommittee =
        event.target.person_two_backupCommittee.value;
      data.person_two_food = event.target.person_two_food.value;
    }
    data.total = members;
    makePayment(data);
    console.log(data);

    // Get data from the htmlForm.

    // const result = await response.json();
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
          <div className="sm:w-auto w-[70vw] mt-11 mx-14 px-5 shadow-lg my-10 ">
            {members === 2 ? (
              <h1 className="text-white text-4xl text-center mb-10">
                Participant 1
              </h1>
            ) : (
              ""
            )}
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                  name="date_of_birth"
                  id="date_of_birth"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="date_of_birth"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  <span className="text-sm">Only Day 1</span>
                  <input type="radio" name="day1" id="day1" className="hidden" checked={!day2} />
                </div>
                <div
                  onClick={() => setDay2(true)}
                  className={`${
                    day2 ? "bg-black text-blue-500" : "text-electricBlue"
                  } font-semibold py-1 px-4 rounded-2xl text-center cursor-pointer`}
                >
                  <span className="text-sm">Only Day 2</span>
                  <input type="radio" name="day2" id="day2" className="hidden" checked={day2} />
                </div>
              </div>
            </div>
            <div className="grid md:grid-row-2 md:gap-6 mb-6">
              <div className={`grid grid-flow-col md:gap-3 ${show1 ? "block" : "hidden"}`}>
                <div className={``}>
                  <label htmlFor="events_day1" className="text-sm text-gray-400 ">
                    Event (Day 1)
                  </label>
                  <select
                    id="events_day1"
                    name="events_day1"
                    className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                    onChange={(e) => (setEvent1(e.target.value))}
                  >
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
                    <option value="Junior">Junior(9th to 10th)</option>
                    <option value="Senior">Senior(11th to 1st year degree)</option>
                  </select>
                </div>
              </div>
              <div className={`grid grid-flow-col md:gap-3 ${show2 ? "block" : "hidden"}`}>
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
                  <label htmlFor="members_day1" className="text-sm text-gray-400">Number of Members</label>
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
                  <select
                    id="category_day2"
                    name="category_day2"
                    className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white md:mb-0 mb-5"
                    onChange={(e) => {e.target.value}}
                  >
                    <option value="Junior">Junior(9th to 10th)</option>
                    <option value="Senior">Senior(11th to 1st year degree)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
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
                        <SwiperSlide className="!flex !max-w-sm md:!max-w-lg">
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
          ) : (
            ""
          )}
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
                        <SwiperSlide className="!flex !max-w-md md:!max-w-lg">
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
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 mt-10 rounded-md text-white outline-none  shadow-lg transhtmlForm align-left active:scale-90 transition-transhtmlForm "
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
        <div
           
          className="flex flex-col justify-center items-center p-10 h-full mx-24 rounded-lg shadow-emerald-500 shadow-sm bg-black"
        >
          <p className="mb-3 text-4xl text-white">
            Congrats you are officially part of Phenomenon 2024 🎉
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
}

export const DelegationRegistration = () => {
  const [members, changeMembers] = useState(0);
  const [ids, putIds] = useState([]);

  const Template = useCallback((props: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; committee: any; }) => {
    return (
      <div className="flex flex-col justify-center items-center mt-11 mx-14 px-5 shadow-lg my-10">
        <h1 className="text-white text-5xl text-center">{props.name}</h1>;
        {/* register htmlForm */}
        <div className="my-10">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_first_name`}
                id={`${props.committee}_first_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_first_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_last_name`}
                id={`${props.committee}_last_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_last_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name={`${props.committee}_email`}
              id={`${props.committee}_email`}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.committee}_email`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid  md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name={`${props.committee}_phone`}
                id={`${props.committee}_phone`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_phone`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <label htmlFor="committee" className="text-sm text-gray-400 ">
                COMMITTEE PREFERENCE
              </label>
              <select
                id={`${props.committee}_committee`}
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="CCC">CCC</option>
                <option value="BBMP">BBMP</option>
                <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                <option value="SCC">SCC</option>
                <option value="UNSC">UNSC</option>
                <option value="SOCHUM">SOCHUM</option>
                <option value="UNHRC">UNHRC</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="person_two_backupCommittee"
                className="text-sm text-gray-400 "
              >
                BACKUP COMMITTEE
              </label>
              <select
                id={`${props.committee}_backupCommittee`}
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="CCC">CCC</option>
                <option value="BBMP">BBMP</option>
                <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                <option value="SCC">SCC</option>
                <option value="UNSC">UNSC</option>
                <option value="SOCHUM">SOCHUM</option>
                <option value="UNHRC">UNHRC</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="food" className="text-sm text-gray-400 ">
              FOOD PREFERENCE
            </label>
            <select
              id={`${props.committee}_food`}
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_country`}
                id={`${props.committee}_country`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_country`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 1
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_backupCountry`}
                id={`${props.committee}_backupCountry`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_backupCountry`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 2
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor={`${props.committee}_number_muns`}
              className="text-sm text-gray-400 "
            >
              MUN EXPERIENCE
            </label>
            <select
              id={`${props.committee}_number_muns`}
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="First Timer">First Timer</option>
              <option value="11-3 MUNs">1-3 MUNs</option>
              <option value="4-10 MUNs">4-10 MUNs</option>
              <option value="10+ MUNs">10+ MUNs</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor={`${props.committee}_placements`}
              className="peer peer-focus:font-medium  text-sm text-gray-400 "
            >
              LIST YOUR MUN PLACEMENTS (OPTIONAL)
            </label>
            <textarea
              id={`${props.committee}_placements`}
              
              className="block py-2.5 my-5 h-44 px-0 w-full text-sm text-white bg-gray-800 rounded border-2  appearance-nonetext-white border-gray-600  focus:outline-none focus:ring-0 0 peer"
              placeholder={
                "  Example:\n  ->Honourable Delegate : 2 \n  ->Specmen: 1"
              }
            />
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
    
    <div className="my-28 md:translate-y-0 -translate-y-7">
      {members < 3 || members > 40 ? (
        <>
          <h1 className="md:text-6xl text-4xl text-white text-center font-bold mun-gradient">
            DELEGATION INFORMATION
          </h1>
          <section className="">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Name: "+ (e.target as HTMLInputElement).name.value)
                 
                  changeDetails([(e.target as HTMLInputElement).name.value, (e.target as HTMLInputElement).type.value]);
                  
                  changeMembers((e.target as HTMLFormElement).total_members.value);
                  
                }}
              > 
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      DELEGATION NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="item-weight"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TOTAL DELEGATES
                    </label>
                    <input
                      type="number"
                      name="item-weight"
                      id="total_members"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0"
                      min="2"
                      max="40"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TYPE OF DELEGATION
                    </label>
                    <select
                      id="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="Institution">Institution</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
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
          className="flex flex-col justify-center items-center mt-10 "
          onSubmit={handleSubmit}
        >
          <h1 className="md:text-6xl text-4xl text-white text-center">
            DELEGATION REGISTRATION
          </h1>
          <h1 className="text-red-500 font-semibold sm:text-md text-md text-center mt-5">
            {`Only Internal Delegates are allowed to register through this, external delegates won't be refunded`}
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-11">
            <Template committee="head_delegate" name="HEAD DELEGATE" />;
            {Array.from(Array(members - 1), (e, i) => {
              let delegateNumber = i + 2;
              return (
                <Template
                  name={`Delegate ${delegateNumber}`}
                  committee={`delegate_${delegateNumber}`}
                  key={i}
                />
              );
            })}
          </div>
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
            Congrats you are officially part of SJBHSMUN 2024 🎉
          </p>

          <p className="mb-3 text-xl text-white">
            {`Take a screen shot of your UUID so you not don't forget`}
          </p>
          <ul className="list-none mt-14 text-lg">
            {ids.map((person) => (
              <li className="text-white" key={person}>
                {person[0]} : SJBHSMUN{person[1]}
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
