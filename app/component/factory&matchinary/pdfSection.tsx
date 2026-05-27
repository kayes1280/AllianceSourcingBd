export default function PdfDownload(){
    return (
        <section className="w-full bg-[#f3f3f3] py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">

                <p className="text-sm sm:text-base font-medium text-black">
                Own Factory
                </p>

                <h2 className="mt-4 text-3xl sm:text-5xl lg:text-5xl font-medium leading-tight text-black">
                The Ways to Keep Business
                <br className="hidden sm:block" />
                Growing
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-xl leading-7 lg:leading-9 text-[#222]">
                Are you interested to know details about our factory,
                production system and company policy at a glance?
                Please have a look at the provided pdf file.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                    {/* Download Button */}
                    <button className="flex items-center gap-3 rounded-md bg-[#3b3b3b] px-4 sm:px-5 py-2 text-white shadow-md transition hover:opacity-80">
                        <div className="text-3xl sm:text-4xl text-red-500">
                        ↓
                        </div>
                        <div className="text-left leading-tight">
                        <p className="text-[10px] sm:text-xs uppercase tracking-wide">
                            Download
                        </p>

                        <p className="text-sm sm:text-base font-semibold">
                            File
                        </p>
                        </div>

                        <div className="rounded bg-white px-2 py-1 text-[10px] sm:text-xs font-bold text-red-500">
                        PDF
                        </div>

                    </button>

                    <button className="rounded-md bg-[#1696e7] px-8 sm:px-8 py-3 sm:py-3 text-base sm:text-lg font-medium text-white transition hover:bg-[#1285cd] hover:opacity-70">
                        View PDF
                    </button>

                </div>

            </div>
        </section>
    )
}