import HowWeWork from "~/routes/process";
import AboutHero from "./heroAbout.tsx";
import Why from "~/routes/why";

export default function AboutUs(){
    return (
        <>
            <AboutHero />
            <Why />
            <HowWeWork />

        </>
    )
}