import React from 'react'

function Rules() {
  const generalRules = [
    "The dress code must be strictly followed. Shorts/skirts/sleeveless/crop tops/ripped jeans clothing is prohibited",  
    "Only pants and sleeved shirts are allowed",  
    "Security personnel have the right to inspect bags and belongings at the entry points",  
    "Entry will only be permitted to those with valid passes or coupons",  
    "Entry bands must be worn at all times. If found without a band, he/she will be escorted out of the campus. Bands will be removed once you leave the school premises and no re-entry will be allowed",  
    "Entry is restricted to only those who are carrying their school/college/government photo ID cards",  
    "Public display of affection, of any kind, is strictly prohibited",  
    "The following items are strictly prohibited:",  
  ]
  const generalRulesinside = [
    "Outside food and drinks. Free water dispensers will be available",  
    "Disposable or reusable bottles",  
    "Inflammable substances, including but not limited to perfumes, hand sanitizers, and aerosols",  
    "Illegal and restricted items such as alcohol, tobacco, condoms, marijuana, or any type of drug, etc.",  
    "Laser pointers",  
    "Vapes and cigarettes",  
    "High heels",  
    "Strollers",  
    "Pets",  
    "Glass",  
    "Any sort of weaponry or sharp and harmful objects (e.g. Nail cutters, combs, Swiss army knives, scissors, knives, box cutters, blades, pens, pencils, etc.)",  
    "Toy replicas of guns or objects to throw/shoot",  
    "Pepper spray",  
    "Power banks",  
    "Makeup and accessories",  
    "Helmets",  
  ]
  const eventRulespart1 = [
    "On-spot registrations will be open if the cap for that particular event has not been met",  
    "All participants are expected to be present at their respective event venue 1 hour before the event",  
    "Students from Grade 8 to 1st-year degree are allowed to participate",  
    "INSTITUTIONAL TEAMS are considered as teams representing a particular school/college and are automatically considered for the entire bouquet of INSTITUTIONAL EVENTS",  
    "INDIVIDUAL registrations are permitted",  
    "The participants will be divided into 2 categories",  
  ]
  const eventRulespart2 = [
    "A valid ID proof from schools/colleges/government must be shown at the time of registration",  
    "All events are judged on common and unbiased grounds",  
    "Any sort of vulgarity, obscenity, teasing, or mockery in any form and at any point in time is prohibited and participants will be disqualified immediately at the discretion of the teacher in charge or the judges. Misconduct in the campus by the students will lead to their expulsion. Reports may be made to the respective school or college management if deemed necessary",  
    "Failure to conform to the time limit for events will lead to negative marking/disqualification at the discretion of the judges",  
    "All music and media required for events must be submitted at the console/relevant location, under intimation to the venue and event in charge, 45 minutes prior to the start of the event. The music in .mp3 format, and the media in recognised formats, must be submitted in pen drives which are labelled",  
    "Participants are required to get their own devices, props, data connection and any other items that are deemed necessary by the concerned event provided that they don't fall under the restricted category of items",  
  ]
  const nhpolicy = [
    "All attendees, event staff, and volunteers must be respected at all times,",  
    "Any form of harassment, discrimination, or inappropriate behaviour will not be tolerated,",  
    "Instructions from the event staff and security team must be followed at all times,",  
    "Any violations of these rules will result in immediate action by the organizing team or security personnel.",  
  ]
  return (
    <div className='flex flex-col w-screen items-center gap-16 mb-52 md:px-10 px-2 font-semibold'>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl font-aquireBold'>General Rules</span>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside font-trench font-bold md:text-xl text-[17px] '>
          {generalRules.map((rule, idx) => (
            <li key={idx} className='list-disc list-outside'>{rule}</li>
          ))}
          <li>
            <ul>
            {generalRulesinside.map((rule, idx) => (
              <li key={idx} className='list-disc list-inside'>{rule}</li>
            ))}
            </ul>
          </li>
          <li className='list-disc list-outside'>
            In case of emergencies, follow the evacuation protocols as guided by the security team. First-aid stations will be available on-site for minor injuries or health issues.
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl font-aquireBold'>Event Rules</span>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside md:text-xl text-[17px] font-trench font-bold'>
          {eventRulespart1.map((rule, idx) => (
            <li key={idx} className='list-disc list-outside'>{rule}</li>
          ))}
          <li>
            <ol className='list-disc list-inside'>
              <li>Category 1- Grades 8th to 10th</li>
              <li>Category 2- Grades 11th to 2nd Semester of 1st year degree</li>
            </ol>
          </li>
          {eventRulespart2.map((rule, idx) => (
            <li key={idx} className='list-disc list-outside'>{rule}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center md:gap-10  gap-7'>
        <span className='text-electricBlue font-bold text-4xl md:text-5xl text-center font-aquireBold'>Non-Harassment Policy</span>
        <div className='w-screen lg:px-36 px-10 text-center md:px-24'>
          <p className='text-neonPurple text-base md:text-lg font-bold font-aquire'>Please note that those who fail to follow these guidelines will be escorted out of the campus. If necessary, legal actions will be taken against those who misbehave. The confiscated items will not be returned.</p>
        </div>
        <ul className='text-electricBlue md:w-4/5 w-5/6 list-inside font-trench font-bold'>
          {nhpolicy.map((rule, idx) => (
            <li key={idx} className='list-disc md:text-xl text-lg list-outside'>{rule}</li>
          ))}
        </ul>
        <span className='font-bold text-neonPurple md:text-lg text-base font-aquire text-center'>The confiscated items will not be returned.</span>
      </div>
    </div>
  )
}

export default Rules