import React from 'react';
import { DashBoard } from './Dashboard/dashBoard';
import { HowItWorks } from './HowItWorks/howItWorks';
import { MediaCoverage } from './MediaCoverage/mediaCoverage';
import { Pricing } from './Pricing/pricing';
import { Faqs } from './Faqs/faqs';
import { Footer } from './Footer/footer';

export function HomePage(){
    return(
        <>
        <DashBoard/>
        <HowItWorks/>
        <MediaCoverage/>
        <Pricing/>
        <Faqs/>
        <Footer/>
        </>
    )
}