// export default function Intro() {
//   return (
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//       <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
//         Lunect Holdings.
//       </h1>
//       <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
//         Get a beautiful, feature-rich blog up and running. Fast.
//       </h4>
//     </section>
//   )
// }

// import Image from 'next/image'

// export default function Intro() {
//   return (
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//       <div className="md:w-1/2">
//         <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
//           Lunect Holdings.
//         </h1>
//         {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
//           Get a beautiful, feature-rich blog up and running. Fast.
//         </h4> */}
//                 <p className="text-center md:text-left text-lg">
//           My name is Tommy Daniel and I am the founder of Lunect Holdings, a company designed to support a self-funded search 
//           to acquire and operate a world-class small business in technology, services, light manufacturing. I am seeking to partner 
//           with a business seller who is excited to pass their business into the hands of a trustworthy, dependable, and hardworking veteran.
//         </p>
//       </div>
//       <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
//         <Image
//           src="/assets/blog/authors/Tommy-6118-8X10.jpg"
//           alt="Tommy Daniel"
//           width={350}
//           height={350}
//           className="mb-4"
//         />
//         {/* <p className="text-center md:text-left text-lg">
//           My name is Tommy Daniel and I am the founder of Lunect Holdings, a company designed to support a self-funded search to acquire and operate a world-class small business in technology, services, light manufacturing.. I am seeking to partner with a business seller who is excited to pass their business into the hands of a trustworthy, dependable, hardworking, and fair successor.
//         </p> */}
//       </div>
//     </section>
//   )
// }

// import Image from 'next/image'

// export default function Intro() {
//   return (
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//       <div className="md:w-1/2">
//         <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
//           Lunect Holdings.
//         </h1>
//         <p className="text-center md:text-left text-lg">
//           My name is Tommy Daniel and I am the founder of Lunect Holdings, a company designed to support a self-funded search 
//           to acquire and operate a world-class small business in technology, services, light manufacturing. I am seeking to partner 
//           with a business seller who is excited to pass their business into the hands of a trustworthy, dependable, and hardworking veteran.
//         </p>
//       </div>
//       <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
//         <Image
//           src="/assets/blog/authors/Tommy-6118-8X10.jpg"
//           alt="Tommy Daniel"
//           width={350}
//           height={350}
//           className="mb-4"
//         />
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:w-1/2">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
          Lunect Holdings
        </h1>
        <p className="text-center md:text-left text-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">ON A MISSION</h2>
          My name is Tommy Daniel and I am the founder of Lunect Holdings, a company designed to support a self-funded search 
          to acquire and operate a world-class small business in technology, services, light manufacturing. I am seeking to partner 
          with a business seller who is excited to pass their business into the hands of a trustworthy, dependable, and hardworking veteran.
        </p>
        <div className="text-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">TEAM</h2>
          <p>Lunect is seeking to acquire a company with a seasoned, highly experienced management team that is interested in a path to increased responsibilities and, potentially ownership in the business.</p>
        </div>
        <div className="text-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">CULTURE</h2>
          <p>Lunect seeks to acquire businesses with outstanding company culture and a demonstrated history of operating based on our values of honesty, transparency, equity, and camaraderie.</p>
        </div>
        <div className="text-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">PROFITABILITY</h2>
          <p>Ideal target business will have $900K+ adjusted earnings before interest, taxes, depreciation, and amortization.</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
        <Image
          src="/assets/blog/authors/Tommy-6118-8X10.jpg"
          alt="Tommy Daniel"
          width={350}
          height={350}
          className="mb-4"
        />
      </div>
    </section>
  )
}
