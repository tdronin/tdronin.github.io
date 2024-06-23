// import Head from 'next/head'
// import Image from 'next/image'
// import Container from '../components/Layout/Container'
// import Layout from '../components/Layout/Layout'
// import { BLOG_NAME } from '../lib/constants'
// import PageHeading from '../components/PageHeading'

// export default function About() {
//   return (
//     <Layout>
//       <Head>
//         <title>{`About | ${BLOG_NAME}`}</title>
//       </Head>
//       <Container>
//         <PageHeading>Great to meet you.</PageHeading>
//         <section className="max-w-3xl py-8 md:pt-8 md:pb-36">
//           <Image
//             src="/assets/blog/authors/sandypockets_avatar.jpg"
//             alt="Sandy Pockets Avatar"
//             width={250}
//             height={250}
//             className="rounded-full"
//           />
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//           <br />
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </section>
//       </Container>
//     </Layout>
//   )
// }

import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`About | ${BLOG_NAME}`}</title>
      </Head>
      <Container>
        <PageHeading>Great to meet you.</PageHeading>
        <section className="max-w-3xl py-8 md:pt-8 md:pb-36 flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-8">
            <p>
            From my humble beginnings growing up in El Paso, Texas, to attending the United States Military Academy at West
 Point and serving as an Infantry and Special Operations Officer in the US Army, the core
 values of duty, honesty, and hard work have been deeply ingrained in me.
 Having led teams in complex and challenging environments, I'm confident I can
 use my military training and experience to continue to grow a small business with
 a history of excellence and a thriving culture. 
            </p>
            <br />
            <p>
            Family and community are extremely important to me. I am blessed to be a father to toddler Thomas and husband to wife Samantha.
             We have two Rescue dogs, Chance & Cleo, and a rescue cat named Tiberia. We believe in giving back and strengthening our community through volunteering.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/assets/blog/authors/sandypockets_avatar.jpg"
              alt="Sandy Pockets Avatar"
              width={400}
              height={400}
            />
          </div>
        </section>
      </Container>
    </Layout>
  )
}
