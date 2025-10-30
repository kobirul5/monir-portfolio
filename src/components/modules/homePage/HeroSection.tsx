// src/app/page.tsx  (or any component)
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle } from 'lucide-react';
import BannerImage from '../../../assets/images/banner.png';
import BgImage from '@/assets/images/bg.png';

export default function HeroSection() {
  return (

    <section className="relative bg-cover bg-center bg-no-repeat py-16 lg:py-24 rounded-b-3xl overflow-hidden"
   style={{
    backgroundImage:
      `url(${BgImage})`,
  }}
    >
      {/* subtle overlay for depth */}
      <div className="absolute inset-0  via-transparent to-accent/5" />

      <div className="relative container mx-auto px-6 py-8 lg:py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT – TEXT */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            Get{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              body in shape
            </span>{' '}
            &amp; stay{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              healthy
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            A huge selection of health and fitness content, healthy recipes and transformation
            stories to help you get fit and stay fit!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Join Club Now!
            </Button>
            <Button size="lg" variant="outline">
              Download App
            </Button>
          </div>
        </div>

        {/* RIGHT – IMAGE + BADGES */}
        <div className="relative flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={BannerImage}              // replace with your image
              alt="Fit man holding a dumbbell"
              width={600}
              height={800}
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* 500+ badge */}
          <Badge className="absolute bg-transparent backdrop-blur-2xl  top-[20rem] -right-2    font-bold text-lg px-4 py-2 shadow-md border ">
            500+
            <span className="block text-xs font-normal text-muted-foreground">
              Free Workout Videos
            </span>
          </Badge>

          {/* 350+ badge */}
          <Badge className="absolute bg-transparent backdrop-blur-2xl bottom-12 -left-4 text-primary-foreground font-bold text-lg px-4 py-2 shadow-md flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            350+ Video tutorial
          </Badge>
        </div>
      </div>
    </section>
  );
}