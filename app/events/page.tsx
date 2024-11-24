"use client";
import { EventsCard } from "@/components/ui/EventsCard";
import React from "react";
import personality from "../../media/pictures/Ms-Mr Phenomenon.png";
import empty from "../../media/emptylongimage.png";
import vocal_solo from "../../media/pictures/Western Vocal Solo.png";
import dance_solo from "../../media/pictures/Western Dance Solo.png";
import dance_group from "../../media/pictures/Western Dance Group.png";
import mystry from "../../media/pictures/Mystery Inc.png";
import trilogy from "../../media/pictures/Trilogy.png";
import movie from "../../media/pictures/The Movie Business.png";
import poster from "../../media/pictures/Printmysoul.png";
import vend from "../../media/pictures/Vend.png";
import pensworth from "../../media/pictures/Pensworthy.png"
import food from "../../media/pictures/Smogasboard.png";
import stem from "../../media/pictures/Egnites.png";
import band from "../../media/pictures/Battle Of Bands.png";
import fashion from "../../media/pictures/Rampaeon.png";
import disco from "../../media/pictures/Disc O Fever.png"
import basketball from "../../media/pictures/3 A Side Basketball.png";
import cricket from "../../media/pictures/Box Cricket.png";

// Define the card data
const cardsData = [
  { 
    title: 'PERSONALITY',
    content: "Are you savvy, a risk-taker, observant, creative …….. . Claim your opportunity to be extraordinary. Stand in the light and be seen as you are ;",
    rules: [
      "Individual Event.",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "The use of profanity will lead to immediate disqualification.",
      "There will be multiple rounds with eliminations.",
      "Further details regarding the event will be communicated after registrations.",
    ],
    banner: personality,
  },
  { 
    title: 'WESTERN VOCAL SOLO',
    content: "Words make you think, Music makes you feel, Just stay on track and never look back.",
    rules: [
      "This event will be held in 2 categories : ",
      "Category 1- Grades 9th and 10th",
      "Category 2- Grades 11th to 1st Year Degree",
      "Any Western style of vocals can be performed.",
      "No instruments will be provided and participants must plan an instrument or track if accompaniment is required.",
      "An accompanist will be allowed, but no extra points will be awarded for accompaniment.",
      "All music and media required for events must be submitted at the console 45 minutes prior to the start of the event. The music in .mp3 format, and the media in recognized formats, must be submitted in labeled pen drives.",
      "No extra vocals are allowed on the backing track.",
      "Timings: 2.5+1 minutes.",
    ],
    banner: vocal_solo,
  },
  { 
    title: 'WESTERN DANCE SOLO',
    content: "Dancers don’t need wings to fly, put on your dancing shoes and wow us with your moves. The stage is your canvas.",
    rules: [
      "This event is open to students from grades 9th to 1st Year Degree.",
      "If the dance or song choice is inappropriate, the participant will be asked to leave the stage.",
      "In case of use of props, they should be brought by participants.",
      "All music and media required for events must be submitted at the console 45 minutes before the start of the event. The music in .mp3 format, and the media in recognized formats, must be submitted in labeled pen drives.",
      "Timing: 2+1 minutes.", 
    ],
    banner: dance_solo,
  },
  { 
    title: 'WESTERN DANCE GROUP',
    content: "Groove as a group to be the best troupe.",
    rules: [
      "Team Event (6-8 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Timing: 3+1 minutes.",
      "Auditions may be held based on the number of registrations.",
      "If the dance or song choice is inappropriate, the team will be asked to leave the stage.",
      "Participants may use props.",
      "All music and media required for events must be submitted at the console 45 minutes prior to the start of the event. The music in .mp3 format, and the media in recognised formats, must be submitted in pen drives that are labelled.",
    ],
    banner: dance_group,
  },
  { 
    title: 'MYSTERY INC. (TREASURE HUNT)',
    content: "‘X’ marks the spot. You can either be extremely cold or extremely hot.",
    rules: [
      "Team Event (3 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree. ",
      "There will be multiple rounds with elimination ",
    ],
    banner: mystry,
  },
  { 
    title: 'TRILOGY (POTPOURRI)',
    content: "A trio of favourites - Dumb Charades, Pictionary, and Taboo.",
    rules: [
      "Team Event (3 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "There will be multiple rounds with elimination.",
    ],
    banner: trilogy,
  },
  { 
    title: 'THE MOVIE BUSINESS (FILMMAKING)',
    content: "Cinema is not only about making people dream. Capture extraordinary moments and tell a unique story through your lens.",
    rules: [
      "Team Event  (4 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Participants have to bring a working camera or phone, and a laptop that has video editing software on it.",
      "Participants will be permitted to use the allowed areas of the campus to shoot their films, but are not allowed to leave campus.",
      "There will be multiple rounds with elimination ",
      "Participants must have ready access to the internet to upload their films to Google Drive.",
    ],
    banner: movie,
  },
  { 
    title: 'PRINTMYSOUL (POSTER MAKING)',
    content: "Bold, eye-catching, visually intense yet minimal and elegant, bring out this true art form.",
    rules: [
      "Team Event (3 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Plagiarism of any kind is prohibited.",
      "Participants must abide by the theme of every round, which will be disclosed a day before the event.",
      "Materials allowed: any kind of paints, colour pencils, sketch pens no crayons.",
      "Posters to be done in A2 size sheet only.",
    ],
    banner: poster,
  },
  { 
    title: 'VEND (COMMERCE EVENT)',
    content: "\"IT'S NOT WHAT YOU SELL THAT MATTERS AS MUCH AS HOW YOU SELL IT!\" - Brian Halligan Do you have what it takes to build an army and conquer your competitors' market? Will you blend in or stand out?",
    rules: [
      "Team Event (3 members per team) ",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "There will be multiple rounds with elimination.",
    ],
    banner: vend,
  },
  { 
    title: 'PENSWORTHY (CREATIVE WRITING)',
    content: "‘Unsheathe’ your pens and let loose the dogs of diction and prepare for the Grand Inquisition.",
    rules: [
      "This event will be held in 2 categories : ",
      "Category 1- Grades 9th and 10th",
      "Category 2- Grades 11th to 1st Year Degree",
      "Each participant must carry their own writing material.",
      "Topics and timings will be given on the spot.",
      "The use of the Internet is not permitted for any of the rounds.",
    ],
    banner: pensworth,
  },
  { 
    title: 'SMOGASBOARD (FOOD TASTING)',
    content: "This will be a gastronomer's delight. The participants will have to identify the ingredients in a dish by tasting it.",
    rules: [
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Participants with any food related allergies will not be allowed to participate.",
    ],
    banner: food,
  },
  {
    title : "EGNITES (STEM EVENT)",
    content : "Innovation is within us all and we are the future of tomorrow. Combine your intellect and luck- show us the future that you can build with your mind!",
    rules : [
      "Individual participation",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Participants are required to get their own devices."
    ],
    banner: stem,
  },
  { 
    title: 'BATTLE OF THE BANDS',
    content: "Live and unsigned. Battle it out for bragging rights.",
    rules: [
      "Team Event  (5+3 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "All bands are required to have at least one vocalist.",
      "No backing tracks will be allowed.",
      "Use of pre-recorded material is prohibited.",
      "Instruments will not be provided by the school (except for a standard drum kit)",
      "Misuse of any equipment including mics, wires, and drums will lead to immediate disqualification",
      "Open registrations may be permitted if the cap for the number of teams is not met. (the team members may be drawn from different schools and colleges).",
      "If all the team members are from one particular school or college, then only one team will be permitted in such a situation.",
      "Timings: 5+3 minutes. (5 mins for performance, 3 mins for soundcheck)",
    ],
    banner: band,
  },
  {
    title : "RAMPAEON (FASHION SHOW)",
    content : "Fashion is escapism, not imprisonment. Wear your style as armor and use your confidence as a weapon. Walk the ramp with poise and elegance.",
    rules : [
      "Team Event (10+2 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Timings: 5+1 minutes",
      "Open registrations may be permitted if the cap for the number of teams is not met. (The team members may be drawn from different schools and colleges)",
      "If all the team members are from one particular school or college, then only one team will be permitted in such a situation",
      "The theme  ‘to be decided '",
      "All the participants must carry their own attires and props.",
      "Vulgarity is strongly prohibited. Any form of obscenity will lead to immediate disqualification of the team.",
      "Dress code restrictions will be conveyed to the teams after the registrations close.",
      "Violations pertaining to the dress code will lead to disqualification or negative marking.",
      "The dimensions of the ramp will be disclosed after the registrations close.",
    ],
    banner: fashion,
  },
  {
    title: "DISC-O FEVER (DISC BATTLE)",
    content : "Turn the tables on your opponent, whip up a frenzy and bring the hype with your originality and style.",
    rules : [
      "Individual Event",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Each contestant is required to make a mix of about 10 minutes. This mix has to be the contestant’s own mix.",
      "Each mix will be judged based on the style of mixing, originality, perfection of transitions etc.",
      "The mix has to be dance-music based but there is no limitation on the sub-genre ",
      "Each contestant has to submit the mix on Day 1 of the fest by 12pm.",
      "Contestants are required to submit the mix on a labelled pen drive.",
      "The top 4 will be chosen by the evening of Day 1 and the results put up at the earliest. The top 4 will get to play on the main stage on Day 2 during the ‘DANCE MUSIC FESTIVAL’ for a maximum of 10 minutes",
      "Contenders wanting to use any other sort of equipment will have to carry it with them and notify the event heads at the earliest.",
    ],
    banner: disco
  },
  {
    title : "3 - A - SIDE BASKETBALL",
    content : "'You miss 100% of the shots you don't take.'",
    rules : [
      "Team Event  (3+1 members per team)",
      "This event is open to students from grades 11th to 1st Year Degree.",
      "There are separate categories for boys and girls.",
      "Teams must come in sporting attire, and everyone on the team must have a uniform jersey for easier identification.",
      "All matches will be liveball",
      "The tournament will be conducted in a knockout format.",
      "The referee’s decision is final.",
    ],
    banner: basketball
  },
  {
    title : "BOX CRICKET",
    content : "Claim this chance to shine in the country's favourite sport.",
    rules : [
      "Team Event  (4+1 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Teams must come in sporting attire.",
      "Participants must bring their own bat.",
      "Maximum number of teams = 16",
    ],
    banner: cricket,
  },
];

function Events() {
  return (
    <div className="mb-24">
      <div className="flex justify-center">
        <span className="text-6xl text-electricBlue text-center font-bold mb-24">Our Events</span>
      </div>
      {cardsData.map((card, idx) => (
        <EventsCard title={card.title} content={card.content} rules={card.rules} banner={card.banner} key={idx}/>
      ))}
    </div>
  )
}

export default Events

