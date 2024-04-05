import React from 'react';
import Typography from '@/components/Typography/Typography';

const Hero = () => {
  return (
    <section className="py-24">
      <div className="max-w-[600px] mx-auto text-center">
        <Typography as="h1" size="3xl" weight="bold" className="mb-12 ">
          Pricing & Plans
        </Typography>
        <Typography as="h3" size="md">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </Typography>
      </div>
    </section>
  );
};

export default Hero;
