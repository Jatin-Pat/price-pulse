import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Save money on your regular purchases from Amazon:
              <Image 
                src="/assets/icons/arrow-right.svg"
                width={16}
                height={16}
                alt="arrow-right"
              />
            </p>

            <h1 className='head-text'>
              unleash the power of
              <span className='text-primary'> PricePlus</span>
            </h1>
            <p className='mt-6'>
            Receive automated notifications when the price of your favorite products drops or
            comes back in stock.
            </p>

            <SearchBar />
          </div>

          <HeroCarousel/>
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple iphone', 'Apple watch', 'Apple Airpods', 'Apple Macbook'].map
          ((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home