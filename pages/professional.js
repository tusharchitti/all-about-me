import Head from 'next/head'
import About from "./components/About";
import Profession from './components/Profession';
import profile from "/public/profile.jpeg"

export default function Professional() {
    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Tushar Raina</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <Profession/>
        </main>
      </div>
    )
  }