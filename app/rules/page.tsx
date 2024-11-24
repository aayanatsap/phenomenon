import React from 'react'

function Rules() {
  const generalRules = [
    "The dress code must be strictly followed. Shorts, skirts, sleeveless, and ripped jeans clothing are prohibited.",
    "Only pants and sleeved shirts are allowed.",
    "Security personnel have the right to inspect bags and belongings at the entry points.",
    "Outside food and drinks are prohibited. Free water dispensers will be available.",
    "Disposable or reusable bottles are not permitted.",
    "Inflammable substances, including but not limited to perfumes, hand sanitizers, and aerosols are prohibited.",
    "Prescribed medication with proof of prescription will be allowed; without any proof of prescription, the drug won’t be allowed.",
    "Illegal and restricted items such as alcohol, tobacco, condoms, marijuana, or any type of drug are strictly prohibited, and legal action will be taken.",
    "Entry will only be permitted to those with valid passes or tickets.",
    "Entry bands must be worn at all times. If found without a band, he/she will be escorted out of the campus. Bands will be removed once you leave the school premises, and no re-entry will be allowed.",
    "Entry is restricted to only those who are carrying their school, college, or government photo ID cards.",
    "Public display of affection, of any kind, is strictly prohibited.",
    "Laser pointers are not allowed.",
    "Vapes and cigarettes are strictly prohibited.",
    "High heels are not allowed.",
    "Strollers are not allowed.",
    "Pets are not allowed.",
    "Glass containers are not allowed.",
    "Any sort of weaponry or sharp and harmful objects are prohibited (e.g., nail cutters, combs, Swiss army knives, scissors, knives, box cutters, blades, pens, pencils, etc.).",
    "Toy replicas of guns or objects to throw or shoot are not allowed.",
    "Pepper spray is not allowed.",
    "Power banks are not allowed.",
    "Makeup and accessories will not be allowed.",
    "Helmets are not allowed.",
    "In case of emergencies, follow the evacuation protocols as guided by the security team. First-aid stations will be available on-site for minor injuries or health issues.",
  ]
  const eventRules = [
    "On-spot registrations will be open if the cap for that particular event has not been met.",
    "All participants are expected to be present at their respective event venue 1 hour before the event.",
    "Students from Grade 9 to 1st-year degree are allowed to participate.",
    "INSTITUTIONAL TEAMS are considered as teams representing a particular school/college and are automatically considered for the entire bouquet of INSTITUTIONAL EVENTS.",
    "INDIVIDUAL registrations are permitted.",
    "The participants will be divided into 2 categories:",
    "Category 1 - Grades 9th and 10th,",
    "Category 2 - Grades 11th to 2nd Semester of 1st-year degree,",
    "A valid ID proof from schools/colleges/government must be shown at the time of registration.",
    "All events are judged on common and unbiased grounds.",
    "Any sort of vulgarity, obscenity, teasing, or mockery in any form and at any point in time is prohibited and participants will be disqualified immediately at the discretion of the teacher in charge or the judges.",
    "Failure to conform to the time limit for events will lead to negative marking or disqualification at the discretion of the judges, and misconduct in the campus by the students will lead to their expulsion. Reports may be made to the respective school or college management if deemed necessary.",
    "All music and media required for events must be submitted at the console/relevant location, under intimation to the venue and event in charge, 45 minutes prior to the start of the event. The music must be in .mp3 format, and the media in recognised formats, submitted on labelled pen drives.",
    "Participants are required to get their own devices, props, data connection, and any other items that are deemed necessary by the concerned event provided that they don't fall under the restricted category of items.",
  ]
  const nhpolicy = [
    "All attendees, event staff, and volunteers must be respected at all times.",
    "Any form of harassment, discrimination, or inappropriate behaviour will not be tolerated.",
    "Instructions from the event staff and security team must be followed at all times.",
    "Any violations of these rules will result in immediate action by the organizing team or security personnel.",
  ]
  return (
    <div className='flex flex-col w-screen items-center gap-16 mb-52 md:px-10 px-2 font-semibold'>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl'>General Rules</span>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside'>
          {generalRules.map((rule, idx) => (
            <li key={idx} className='list-disc md:text-lg list-outside'>{rule}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl'>Event Rules</span>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside'>
          {eventRules.map((rule, idx) => (
            <li key={idx} className='list-disc md:text-lg list-outside'>{rule}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl'>Non-Harassment Policy</span>
        <div className='w-screen lg:px-36 px-10 text-center md:px-24'>
          <p className='text-neonPurple text-lg md:text-xl font-bold '>Please note that those who fail to follow these guidelines will be escorted out of the campus. If necessary, legal actions will be taken against those who misbehave. The confiscated items will not be returned.</p>
        </div>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside'>
          {nhpolicy.map((rule, idx) => (
            <li key={idx} className='list-disc md:text-lg list-outside'>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rules