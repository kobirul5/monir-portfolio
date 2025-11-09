// src/app/page.tsx  (or any component)
'use client';

// import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle } from 'lucide-react';
import BannerImage from '../../../assets/images/banner.png';
// import BgImage from '@/assets/images/bg.png';
// import Shadow from '@/assets/images/shodow.png';

export default function HeroSection() {
  return (

    <section className="relative bg-cover bg-center bg-no-repeat pb-8 rounded-b-3xl overflow-hidden"
      // style={{
      //   backgroundImage:
      //     `url(${BgImage})`,
      // }}
    >
      {/* subtle overlay for depth */}
      <div className="absolute inset-0  via-transparent to-accent/5" />

      <div className="relative container mx-auto px-6 py-b lg:pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-4">
        {/* LEFT – TEXT */}

        <div className="relative z-0 flex-1 flex justify-center">
          <div className="relative ml-30 w-full max-w-md xl:max-w-3xl">
            <img
              src={BannerImage}              // replace with your image
              alt="Fit man holding a dumbbell"
              // width={600}
              // height={800}
              className="rounded-xl "
            />
          </div>

          {/* 500+ badge */}
          <Badge className="absolute bg-transparent backdrop-blur-2xl  top-[20rem] -right-2    font-bold text-lg px-4 py-2 shadow-md border ">
            500+
            <span className="block text-xs font-normal text-muted-foreground">
              Free Workout Videos
            </span>
          </Badge>
          <p className="absolute bg-transparent  max-h-[100px]   top-[6rem] left-[0rem]   text-lg px-4 py-2 max-w-[270px]">
            500+ Hello! I'm Monirul Islam A passionate UI/UX Designer at SM Technology.
          </p>

          {/* 350+ badge */}
          <p className="absolute bg-transparent backdrop-blur-2xl bottom-12 -left-4 text-primary-foreground rounded  text-lg px-4 py-2 shadow-md flex items-center gap-2 f">
            <PlayCircle className="" />
            <div>

              <p className='text-[12px]'>Total Projects</p>
              <p className='text-2xl font-bold '>350+ </p>
            </div>
          </p>


        </div>
        {/* RIGHT – IMAGE + BADGES */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h1 className="md:text-[99px] text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground  text-right leading-tight">
            CREATING BRANDS <br></br> THAT CONNECT <br /> AND INSPIRE
          </h1>
        </div>
      </div>
    </section>
  );
}