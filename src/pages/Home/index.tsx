import React from 'react';
import { About } from "../../components/About";
import { AppsPublished } from "../../components/AppsPublished";
import { Articles } from '../../components/Articles';
import { Course } from '../../components/Course';
import { Experience } from '../../components/Experience';
import { Footer } from '../../components/Footer/Footer';
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Technologies } from "../../components/Technologies";

export default function Home() {
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