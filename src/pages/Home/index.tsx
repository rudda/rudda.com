import React, { useEffect } from 'react';
import { About } from "../../components/About";
import { AppsPublished } from "../../components/AppsPublished";
import { Articles } from '../../components/Articles';
import { Course } from '../../components/Course';
import { Footer } from '../../components/Footer/Footer';
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Technologies } from "../../components/Technologies";
import  App  from '../../utils/firebase';
import { logEvent, getAnalytics  } from 'firebase/analytics';



export default function Home() {
    useEffect(() => {
        const Analytics = getAnalytics(App);
        const currentURL = window.location.href;
        logEvent(Analytics, 'HOME_PAGE_'+currentURL)
      }, []);
    return (
        <>
            <Header />
            <Heading />
            <About />
            <AppsPublished />
            <Technologies />
            <Course />
            <Articles />
            <Footer />
        </>
    )
}