import Image from 'next/image'

import { Hero } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x pading-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Katalog Mobil</h1>
          <p>Jelajahi Mobil yang mungkin anda sukai</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="Fuel" />
          </div>
        </div>
      </div>
    </main>
  );
}
