import React from 'react';
import { DashBoard } from './Dashboard/dashBoard';
import { HowItWorks } from './HowItWorks/howItWorks';
import { MediaCoverage } from './MediaCoverage/mediaCoverage';
import { Pricing } from './Pricing/pricing';
import { Faqs } from './Faqs/faqs';

export function HomePage(){
    return(
        <>
        <DashBoard/>
        <HowItWorks/>
        <MediaCoverage/>
        <Pricing/>
        <Faqs/>
        </>
    )
}