"use client";
import { EventsCard } from "@/components/ui/EventsCard";
import React from "react";
import personality from "../../media/pictures/Ms-Mr Phenomenon.png";
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
    content: "\"The art of pleasing is the art of deception.\" – Luc de Clapiers Pressure creates diamonds and only then can they demonstrate what they truly are. You might have stolen the show more times than you can count, but can you be the one who takes the limelight when you're surrounded by people who've been doing the same thing all this while, do you have what it takes to take the crown of Mr/Ms Phenomenon?",
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
    title: 'MYSTERY INC. (TREASURE HUNT)',
    content: "Whispers of the past and echoes of the unknown guide your path, if given the chance, could you prove yourself worthy to be Indiana Jones’s trusted ally on his next great adventure? Can you solve the clues and uncover the secrets hidden in time, or will they remain lost forever? The hunt starts now!",
    rules: [
      "Team Event (3 members per team)",
      "This event is open to students from grades 9th to 1st Year Degree. ",
      "There will be multiple rounds with elimination ",
    ],
    banner: mystry,
  },
  { 
    title: 'WESTERN VOCAL SOLO',
    content: "Mariah Carey doesn't want a lot for Christmas, there is just one thing she needs. She doesn't care about the presents underneath the Christmas tree. All she cares about is an angelic voice. So will you be all that she wants for Christmas?",
    rules: [
      "Individual Event.",
      "This event will be held in 2 categories.",
      "Category 1 - Grades 9th and 10th.",
      "Category 2 - Grades 11th to 1st Year Degree.",
      "Songs must be Christmas-themed (with no vulgarity).",
      "No instruments will be provided and participants must plan an instrument or track if accompaniment is required.",
      "An accompanist will be allowed, but no extra points will be awarded for accompaniment.",
      "All music and media required for events must be submitted at the console 45 minutes prior to the start of the event. The music in .mp3 format, and the media in recognized formats, must be submitted in labeled pen drives.",
      "No extra vocals are allowed on the backing track.",
      "Timings: 2+1 minutes.",
    ],
    banner: vocal_solo,
  },
  { 
    title: 'WESTERN DANCE SOLO',
    content: "As the rhythm fills your veins, show us your inner Michael Jackson. Do you have what it takes to make the world believe that your body would be where his soul feels at home?",
    rules: [
      "Individual event.",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "If the dance or song choice is inappropriate, the participant will be asked to leave the stage.",
      "In case of use of props, they should be brought by participants.",
      "All music and media required for events must be submitted at the console 45 minutes before the start of the event. The music in .mp3 format, and the media in recognized formats, must be submitted in labelled pen drives.",
      "There will be multiple rounds.",
      "Timing: 2 minutes.",
    ],
    banner: dance_solo,
  },
  { 
    title: 'WESTERN DANCE GROUP',
    content: "Let the rhythm flow through your veins, transforming every beat into an electrifying movement. Let music guide you, unleash your creativity, and light up the stage as you keep your groove as a group.",
    rules: [
      "Team Event (4-8 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Timing: 2+1 minutes.",
      "Auditions may be held based on the number of registrations.",
      "If the dance or song choice is inappropriate, the team will be asked to leave the stage.",
      "Participants may use props.",
      "All music and media required for events must be submitted at the console 45 minutes prior to the start of the event. The music in .mp3 format, and the media in recognised formats, must be submitted in pen drives that are labelled.",
    ],
    banner: dance_group,
  },
  { 
    title: 'TRILOGY (POTPOURRI)',
    content: "Think you can sketch your way to victory, mime your heart out, or describe the indescribable—all before time runs out? Come join us in the ultimate showdown of Pictionary, Dumb Charades, and Taboo, where every second counts. The countdown is on—let the games begin!",
    rules: [
      "Team Event (3 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "There will be multiple rounds with elimination.",

    ],
    banner: trilogy,
  },
  { 
    title: 'VEND (COMMERCE EVENT)',
    content: "Can you keep your composure and make the right choices when the goal is to create a customer, not just a sale? In a world where satisfying the customer is the true art, prove that you can rival even the greatest artists.",
    rules: [
      "Team Event (3 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Each team will be required to carry at least one laptop. NO Internet connection will be provided.",
      "The use of AI will NOT be permitted.",
      "There will be multiple rounds with elimination.",
    ],
    banner: vend,
  },
  { 
    title: 'THE MOVIE BUSINESS (FILMMAKING)',
    content: "“Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, Where dreams are captured and brought to life on the big screen—show us how your imagination creates worlds that can only be explored through your lens. Show us the parts of your soul that are captured in every shot you take and tell us your narratives.",
    rules: [
      "Team Event (3 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Participants have to bring a working camera or phone, and a laptop that has video editing software on it.",
      "Participants will be permitted to use the allowed areas of the campus to shoot their films, but are not allowed to leave campus.",
      "Drones are not permitted.",
      "There will be multiple rounds with elimination.",
      "Participants must have ready access to the internet to upload their films to Google Drive.",
    ],
    banner: movie,
  },
  { 
    title: 'PENSWORTHY (CREATIVE WRITING)',
    content: "Dare to dream, write, and inspire. Join us for a creative writing adventure where your words take flight and ideas come alive. Are you ready to pen your legacy?",
    rules: [
      "Individual event.",
      "This event will be held in 2 categories.",
      "Category 1 - Grades 9th and 10th.",
      "Category 2 - Grades 11th to 1st Year Degree.",
      "Each participant must carry their own writing material.",
      "Participants are permitted to access the internet only when explicitly instructed to do so.",
      "Rounds and their specific details will be disclosed on the spot, on the day of the event."
    ],
    banner: pensworth,
  },
  { 
    title: 'PRINTMYSOUL (POSTER MAKING)',
    content: "\"Creativity is intelligence having fun\" -Albert Einstein. Express your creativity through impactful visuals and powerful ideas. Bold, eye-catching, visually intense yet minimal and elegant, bring out this true art form.",

    rules: [
      "Individual Event.",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Plagiarism of any kind is prohibited.",
      "Participants must get their own laptops or tablets.",
      "Participants must abide by the theme of every round, which will be disclosed on the day of the event.",
      "Materials allowed: any kind of paints (except spray paints), colour pencils, sketch pens but no crayons."
    ],
    banner: poster,
  },
  { 
    title: 'SMOGASBOARD (FOOD TASTING)',
    content: "A delight for chefs and masterchef enthusiasts alike! Join us on this culinary journey and let your inner Ramsey shine.",
    rules: [
      "Individual Event.",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Only vegetarian food will be used.",
      "Participants with any food related allergies will not be allowed to participate."
    ],
    banner: food,
  },
  {
    title : "EGNITES (STEM EVENT)",
    content : "The fabric of our civilization is evolving at a rapid pace, with Science and Technology being the fundamental driving forces. Are we pioneers of this change, or mere bystanders of this whirlwind of progress?", 
    rules : [
      "Team Event (2 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Participants are required to carry their own devices with necessary data connections.",
      "Further details of the event will be communicated to the participants after registration."

    ],
    banner: stem,
  },
  { 
    title: 'BATTLE OF THE BANDS',
    content: "The stage is ready for an unforgettable showdown of sound and skill. Step into the arena and let us witness what happens when bands play not just for the crowd, but to claim victory.", 
    rules: [
      "Team Event (5+2 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "All bands are required to have at least one vocalist.",
      "No backing tracks will be allowed.",
      "Use of pre-recorded material is prohibited.",
      "Instruments will not be provided by the school (except for a standard drum kit and amplifiers).",
      "Misuse of any equipment including mics, wires, and drums will lead to immediate disqualification.",
      "Open registrations may be permitted if the cap for the number of teams is not met. (The team members may be drawn from different schools and colleges).",
      "If all the team members are from one particular school or college, then only one team will be permitted in such a situation.",
      "Timings: 5+3 minutes. (5 mins for performance, 3 mins for soundcheck).",
    ],
    banner: band,
  },
  {
    title : "RAMPAEON (FASHION SHOW)",
    content : "Fashion is escapism, not imprisonment. Wear your style as armour and use your confidence as a weapon. As the runway waits for your timeless pieces, show us that your elegance can outshine your style.", 
    rules : [
      "Team Event (10+2 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Timings: 5+2 minutes.",
      "Open registrations may be permitted if the cap for the number of teams is not met. (The team members may be drawn from different schools and colleges).",
      "If all the team members are from one particular school or college, then only one team will be permitted in such a situation.",
      "The theme ‘to be decided'.",
      "All the participants must carry their own attires and props.",
      "Vulgarity is strongly prohibited. Any form of obscenity will lead to immediate disqualification of the team.",
      "Dress code restrictions will be conveyed to the teams after the registrations close.",
      "Violations pertaining to the dress code will lead to disqualification or negative marking.",
      "The dimensions of the ramp will be disclosed after the registrations close."
    ],
    banner: fashion,
  },
  {
    title: "DISC-O FEVER (DISC BATTLE)",
    content : "Master the art of sound manipulation, control the crowd, create electrifying tracks, and drop the beat, as you spin your way to victory and seize the title of the ultimate DJ!", 
    rules : [
      "Individual Event.",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Each contestant is required to make a mix of about 10 minutes. This mix has to be the contestant’s own mix.",
      "Each mix will be judged based on the style of mixing, originality, perfection of transitions etc.",
      "The mix has to be dance-music based but there is no limitation on the sub-genre.",
      "Each contestant has to submit the mix on Day 1 of the fest by 12pm.",
      "Contestants are required to submit the mix on a labelled pen drive.",
      "The top 4 will be chosen by the evening of Day 1 and the results put up at the earliest. The top 4 will get to play on the main stage on Day 2 during the ‘DANCE MUSIC FESTIVAL’ for a maximum of 10 minutes.",
      "Contenders wanting to use any other sort of equipment will have to carry it with them and notify the event heads at the earliest.",
    ],
    banner: disco
  },
  {
    title : "3 - A - SIDE BASKETBALL",
    content : "\"You miss 100% of the shots you never take.\" Watch as teams compete on the court, displaying their skills with each rebound, shot, and pass. Only one team will win, the stakes are tremendous, and the atmosphere is unparalleled. Come witness an incredible demonstration of heart, collaboration, and athleticism.", 
    rules : [
      "Team Event (3+1 members per team).",
      "This event is open to students from grades 11th to 1st Year Degree.",
      "There are separate categories for boys and girls.",
      "Teams must come in sporting attire, and everyone must have a uniform jersey for easier identification.",
      "All matches will be live.",
      "The tournament will be conducted in a league cum knockout format.",
      "The referee’s decision is final.",
      "FIBA rules and regulations will be followed."
    ],
    banner: basketball
  },
  {
    title : "BOX CRICKET",
    content : "Cricket is more than just a sport, its a religion. With Raw pace, unpredictable bouncers, toe-crushing yorkers and exhilarating strokes. A game that promises to hit every nerve in the body. Step onto the 22 yard pitch, where the most fiercest players battle for the ultimate prize. Patience, Determination and unwavering commitment are the qualities that set the champions apart. Do you have what it takes to be the next master blaster?", 
    rules : [
      "Team Event (4+1 members per team).",
      "This event is open to students from grades 9th to 1st Year Degree.",
      "Teams must come in sporting attire.",
      "Participants must bring their own bat."
    ],
    banner: cricket,
  },
];

function Events() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:mb-24 md:mb-0 mb-52 px-3">
        <div className="flex justify-center">
          <span className="text-6xl text-electricBlue text-center font-bold mb-24">Our Events</span>
        </div>
        {cardsData.map((card, idx) => (
          <EventsCard title={card.title} content={card.content} rules={card.rules} banner={card.banner} key={idx}/>
        ))}
      </div>
    </div>
  )
}

export default Events

