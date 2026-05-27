const machineryData = [
  {
    id: "01",
    name: 'Cutting Machine 10"',
    brand: "KM",
    quantity: "03",
  },
  {
    id: "02",
    name: 'Cutting Machine 8"',
    brand: "KM",
    quantity: "03",
  },
  {
    id: "03",
    name: 'Cutting Machine 8"',
    brand: "Open",
    quantity: "01",
  },
  {
    id: "04",
    name: "Band Knife Machine",
    brand: "Open",
    quantity: "01",
  },
  {
    id: "05",
    name: "End Cutting Machine",
    brand: "Eastman",
    quantity: "02",
  },
  {
    id: "06",
    name: "Fabric Inspection Machine",
    brand: "Open",
    quantity: "01",
  },
  {
    id: "07",
    name: "Fusing Machine (Medium) HP-650",
    brand: "Open",
    quantity: "02",
  },
  {
    id: "08",
    name: "Drill Machine",
    brand: "Open",
    quantity: "02",
  },
  {
    id: "09",
    name: "Numbering Machine",
    brand: "Open",
    quantity: "05",
  },
];

export default function MachineryInventory() {
    return (
        <section className="bg-[#f5f5f5] py-12 sm:py-16 lg:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-black mb-8 sm:mb-10 lg:mb-14">
                Our Machinery Inventory
                </h1>

                <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-black mb-6 sm:mb-8 lg:mb-10">
                Cutting Machinery
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-300 bg-white shadow-sm">
                
                    <table className="w-full min-w-[700px] border-collapse">
                        
                        <thead className="bg-[#f3f5f7]">
                            <tr>
                                <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-base lg:text-lg font-semibold text-[#334155]">
                                    SL No.
                                </th>

                                <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-base lg:text-lg font-semibold text-[#334155]">
                                    Machine Name
                                </th>

                                <th className="py-4 sm:py-5 px-4 sm:px-6 text-left text-sm sm:text-base lg:text-lg font-semibold text-[#334155]">
                                    Brand
                                </th>

                                <th className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base lg:text-lg font-semibold text-[#334155]">
                                    Quantity
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {machineryData.map((machine) => (
                                <tr key={machine.id}className="border-t border-gray-200 hover:bg-gray-50 duration-200">
                                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base lg:text-lg text-gray-700">
                                        {machine.id}
                                    </td>

                                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base lg:text-lg text-gray-700">
                                        {machine.name}
                                    </td>

                                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base lg:text-lg text-gray-700">
                                        {machine.brand}
                                    </td>

                                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base lg:text-lg text-center text-gray-700">
                                        {machine.quantity}
                                    </td>
                                </tr>
                            ))}

                            <tr className="border-t border-gray-200">
                                <td colSpan="3" className="py-5 sm:py-6 px-4 sm:px-6 text-right">
                                <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#111827]">
                                    Total Cutting Machinery
                                </span>
                                </td>

                                <td className="py-5 sm:py-6 px-4 sm:px-6 text-center text-lg sm:text-xl lg:text-2xl font-bold text-[#111827]">
                                    20
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
}