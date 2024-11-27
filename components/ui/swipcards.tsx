"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
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
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function swipcards() { 
  const cardsData = [
    { 
      title: 'MR/MS PHENOMENON (PERSONALITY)',
      content: "\"The art of pleasing is the art of deception.\" – Luc de Clapiers Pressure creates diamonds and only then can they demonstrate what they truly are. You might have stolen the show more times than you can count, but can you be the one who takes the limelight when you're surrounded by people who've been doing the same thing all this while, do you have what it takes to take the crown of Mr/Ms Phenomenon?",
      banner: personality,
    },
    { 
      title: 'MYSTERY INC. (TREASURE HUNT)',
      content: "Whispers of the past and echoes of the unknown guide your path, if given the chance, could you prove yourself worthy to be Indiana Jones’s trusted ally on his next great adventure? Can you solve the clues and uncover the secrets hidden in time, or will they remain lost forever? The hunt starts now!",
      banner: mystry,
    },
    { 
      title: 'WESTERN VOCAL SOLO',
      content: "Mariah Carey doesn't want a lot for Christmas, there is just one thing she needs. She doesn't care about the presents underneath the Christmas tree. All she cares about is an angelic voice. So will you be all that she wants for Christmas?",
      banner: vocal_solo,
    },
    { 
      title: 'WESTERN DANCE SOLO',
      content: "As the rhythm fills your veins, show us your inner Michael Jackson. Do you have what it takes to make the world believe that your body would be where his soul feels at home?",
      banner: dance_solo,
    },
    { 
      title: 'WESTERN DANCE GROUP',
      content: "Let the rhythm flow through your veins, transforming every beat into an electrifying movement. Let music guide you, unleash your creativity, and light up the stage as you keep your groove as a group.",
      banner: dance_group,
    },
    { 
      title: 'TRILOGY (POTPOURRI)',
      content: "Think you can sketch your way to victory, mime your heart out, or describe the indescribable—all before time runs out? Come join us in the ultimate showdown of Pictionary, Dumb Charades, and Taboo, where every second counts. The countdown is on—let the games begin!",
      banner: trilogy,
    },
    { 
      title: 'VEND (COMMERCE EVENT)',
      content: "Can you keep your composure and make the right choices when the goal is to create a customer, not just a sale? In a world where satisfying the customer is the true art, prove that you can rival even the greatest artists.",
      banner: vend,
    },
    { 
      title: 'THE MOVIE BUSINESS (FILMMAKING)',
      content: "“Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, Where dreams are captured and brought to life on the big screen—show us how your imagination creates worlds that can only be explored through your lens. Show us the parts of your soul that are captured in every shot you take and tell us your narratives.",
      banner: movie,
    },
    { 
      title: 'PENSWORTHY (CREATIVE WRITING)',
      content: "Dare to dream, write, and inspire. Join us for a creative writing adventure where your words take flight and ideas come alive. Are you ready to pen your legacy?",
      banner: pensworth,
    },
    { 
      title: 'PRINTMYSOUL (POSTER MAKING)',
      content: "\"Creativity is intelligence having fun\" -Albert Einstein. Express your creativity through impactful visuals and powerful ideas. Bold, eye-catching, visually intense yet minimal and elegant, bring out this true art form.",
      banner: poster,
    },
    { 
      title: 'SMOGASBOARD (FOOD TASTING)',
      content: "A delight for chefs and masterchef enthusiasts alike! Join us on this culinary journey and let your inner Ramsey shine.",
      banner: food,
    },
    {
      title : "EGNITES (STEM EVENT)",
      content : "The fabric of our civilization is evolving at a rapid pace, with Science and Technology being the fundamental driving forces. Are we pioneers of this change, or mere bystanders of this whirlwind of progress?", 
      banner: stem,
    },
    { 
      title: 'BATTLE OF THE BANDS',
      content: "The stage is ready for an unforgettable showdown of sound and skill. Step into the arena and let us witness what happens when bands play not just for the crowd, but to claim victory.", 
      banner: band,
    },
    {
      title : "RAMPAEON (FASHION SHOW)",
      content : "Fashion is escapism, not imprisonment. Wear your style as armour and use your confidence as a weapon. As the runway waits for your timeless pieces, show us that your elegance can outshine your style.", 
      banner: fashion,
    },
    {
      title: "DISC-O FEVER (DISC BATTLE)",
      content : "Master the art of sound manipulation, control the crowd, create electrifying tracks, and drop the beat, as you spin your way to victory and seize the title of the ultimate DJ!", 
      banner: disco
    },
    {
      title : "3 - A - SIDE BASKETBALL",
      content : "\"You miss 100% of the shots you never take.\" Watch as teams compete on the court, displaying their skills with each rebound, shot, and pass. Only one team will win, the stakes are tremendous, and the atmosphere is unparalleled. Come witness an incredible demonstration of heart, collaboration, and athleticism.", 
      banner: basketball
    },
    {
      title : "BOX CRICKET",
      content : "Cricket is more than just a sport, its a religion. With Raw pace, unpredictable bouncers, toe-crushing yorkers and exhilarating strokes. A game that promises to hit every nerve in the body. Step onto the 22 yard pitch, where the most fiercest players battle for the ultimate prize. Patience, Determination and unwavering commitment are the qualities that set the champions apart. Do you have what it takes to be the next master blaster?", 
      banner: cricket,
    },
  ];
  
  return (
    <div className='w-screen mt-10 '>
      <div className='flex justify-center lg:mb-14 mb-6 md:mb-12'>
        <span className='md:text-5xl text-4xl font-semibold text-electricBlue'>Our Events</span>
      </div>
      <Swiper
        effect="coverflow"
        spaceBetween={0}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 3,
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
        {cardsData.map((card, idx) => (
          <SwiperSlide key={idx} className="flex justify-center !w-[250px] !h-[300px] md:!w-[350px] md:!h-[400px] lg:!w-[420px] lg:!h-[470px] !rounded-2xl relative">
            <Image src={card.banner} alt={card.title} className="w-full h-full rounded-2xl absolute -z-[500]" />
            <div className='w-full grid grid-flow-row px-3 md:py-5 items-center h-full'>
              <span className='font-bold text-xl md:text-3xl text-center self-start md:mt-3 mt-3 text-superNovaYellow'>{card.title}</span>
              <p className='text-center lg:px-10 lg:text-lg md:text-base text-xs md:px-4 text-[13px]'>{card.content}</p>
            </div>
          </SwiperSlide>        
        ))}
        <div className='text-galaxyBlue flex w-full justify-center mt-5'>
          <div className='bg-lightGray !grid !justify-items-center pb-0.5  px-4 rounded-full bg-opacity-30'>
              <FaArrowLeft className='swiper-button-prev lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
              <div className="pagination"></div>
              <FaArrowRight className='swiper-button-next lg:!size-[50px] md:!size-[40px] !size-[30px] hover:cursor-pointer !text-electricBlue hover:!text-neonPurple duration-500 !font-bold'/>
          </div>
        </div>
      </Swiper>
      <div className='flex justify-center mt-5'>
        <Link href={"/events"} className='bg-neonPurple px-4 py-1 lg:text-xl md:text-lg text-base hover:scale-105 text-electricBlue hover:text-black hover:bg-electricBlue duration-500 font-semibold rounded-full'>
          Know More
        </Link>
      </div>
    </div>
  );
}

export default swipcards