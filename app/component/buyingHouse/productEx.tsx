const productSections = [
  {
    header: "Woven",

    categories: [
      {
        category: "Five Pocket Twill",

        products: [
          {
            id: 1,
            title: "Men’s Five Pocket TRS",
            image: "/pant1.jpg",
          },
          {
            id: 2,
            title: "Men’s Five Pocket TRS",
            image: "/pant2.jpg",
          },
          {
            id: 3,
            title: "Men’s Five Pocket TRS",
            image: "/pant3.jpg",
          },
          {
            id: 4,
            title: "Men’s Five Pocket TRS",
            image: "/pant4.jpg",
          },
        ],
      },

      {
        category: "Ladies Dress & Jackets",

        products: [
          {
            id: 5,
            title: "Red Dress",
            image: "/dress1.jpg",
          },
          {
            id: 6,
            title: "White Dress",
            image: "/dress2.jpg",
          },
          {
            id: 7,
            title: "Blue Dress",
            image: "/dress3.jpg",
          },
          {
            id: 8,
            title: "Hoodie Jacket",
            image: "/dress4.jpg",
          },
        ],
      },
    ],
  },

  {
    header: "Knitwear",

    categories: [
      {
        category: "T-Shirt",

        products: [
          {
            id: 1,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt1.jpg",
          },
          {
            id: 2,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt2.jpg",
          },
          {
            id: 3,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt3.jpg",
          },
          {
            id: 4,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt4.jpg",
          },
        ],
      },

      {
        category: "Polo",

        products: [
          {
            id: 1,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt1.jpg",
          },
          {
            id: 2,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt2.jpg",
          },
          {
            id: 3,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt3.jpg",
          },
          {
            id: 4,
            title: "Men’s Five Pocket TRS",
            image: "/tshirt4.jpg",
          },
        ],
      },
    ],
  },
];

export default function ProductExpertise() {
  return (
    <section className="w-full bg-[#f7f7f7] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Content */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
            Product Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base md:text-xl leading-7 text-gray-700">
            We specialize in a wide array of textile categories, ensuring the
            right technical expertise for every product type.
          </p>
        </div>

        {/* Sections */}
        {productSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-14">

            {/* Section Header */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-medium text-[#111827]">
                {section.header}
              </h3>
            </div>

            <div className="mt-8 border-t border-gray-300" />

            {/* Categories */}
            {section.categories.map((categorySection, catIndex) => (
              <div key={catIndex} className="mt-10">

                {/* Category Heading */}
                <h4 className="text-2xl font-medium text-[#111827]">
                  {categorySection.category}
                </h4>

                {/* Product Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                  {categorySection.products.map((product) => (
                    <div
                      key={product.id}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                    >

                      {/* Image */}
                      <div className="h-56 sm:h-72 lg:h-[320px] w-full overflow-hidden bg-[#f3f3f3]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <div className="py-4 text-center">
                        <p className="text-lg font-medium text-[#111827]">
                          {product.title}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        ))}

      </div>
    </section>
  );
}
