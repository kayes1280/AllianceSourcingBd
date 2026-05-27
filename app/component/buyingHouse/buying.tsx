import Services from "~/routes/services.tsx";
import BuyingHero from "./buyingHero.tsx";
import ProductExpertise from "./productEx.tsx";
import HowWeWork from "~/routes/process.tsx";

export default function Buying(){
    return (
        <>
            <BuyingHero />
            <ProductExpertise />
            <Services />
            <HowWeWork />
        </>
    )
}