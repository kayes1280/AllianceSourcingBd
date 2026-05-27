import AdvanceMachinery from "./advanceMatchinary.tsx";
import HomeNav from "./homeNav.tsx";
import MachineryInventory from "./machineryData.tsx";
import PdfDownload from "./pdfSection.tsx";

export default function HomeFactory(){
    return (
        <>
            <HomeNav />
            <PdfDownload />
            <AdvanceMachinery />
            <MachineryInventory />
        </>
    )
}