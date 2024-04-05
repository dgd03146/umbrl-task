import React from 'react';
import Typography from '@/components/Typography/Typography';

const FeatureDisplay = () => {
  return (
    <div className="max-w-[600px] mx-auto text-center py-24">
      <Typography as="h1" size="2xl" weight="bold" className="mb-8">
        Check our features
      </Typography>
      <Typography as="h3" size="md">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes.
      </Typography>
    </div>
  );
};

export default FeatureDisplay;
