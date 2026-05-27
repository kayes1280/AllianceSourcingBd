export default function AdvanceMachinery() {
    const machines = [
        {
          id: 1,
          title: "NEEDLE DETECTOR MACHINE",
          image: "/needol.png",
        },
        {
          id: 2,
          title: "THREAD SUCKING MACHINE",
          image: "/thread.png",
        },
    ];

  return (
      <section className="w-full bg-[#f3f3f3] py-10 sm:py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">

              <div className="text-center">
                  <p className="text-sm sm:text-base font-medium text-black">
                     Machinery
                  </p>

                  <h2 className="mt-4 text-3xl sm:text-3xl lg:text-5xl font-medium leading-tight text-black">
                      Advanced Machinery
                  </h2>

                  <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-xl leading-7 lg:leading-9 text-[#222]">
                      We invest in the latest industry 4.0 technology to reduce
                      waste and maximize efficiency.
                  </p>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
                  {machines.map((machine) => (
                      <div key={machine.id} className="group relative overflow-hidden rounded-lg">
                          <div className="h-[400px] sm:h-[500px] lg:h-[650px] w-full overflow-hidden">
                              <img src={machine.image} alt={machine.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
                          </div>
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute bottom-0 left-0 w-full p-5 sm:p-7">
                              <h3 className="text-xl sm:text-3xl font-medium text-white">
                                {machine.title}
                              </h3>
                          </div>

                      </div>
                  ))}

              </div>

          </div>
      </section>
  );
}