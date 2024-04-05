import Image from "next/image";
import illustrationHero from '../../images/order-summary-component/illustration-hero.svg'
import iconMusic from '../../images/order-summary-component/icon-music.svg'

export default function OrderSummaryComponent() {
  return (
    <main className="flex min-h-screen bg-pale-blue flex-col items-center justify-center px-10">
      <div className="rounded-2xl max-w-sm bg-white border border-gray-200 drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
        <Image 
          className="rounded-t-2xl" 
          src={illustrationHero}
          alt="hero" 
          width={400}
          height={50} 
        />
        <div className="flex flex-col items-center text-center mx-10 my-10">
          <div className="w-full">
            <h1 className="font-black text-dark-blue text-2xl">Order Summary</h1>
            <p className="mt-3 text-sm font-semibold text-desaturated-blue">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          </div>  
          <div className="flex text-xs items-center my-5 p-5 justify-between rounded-xl w-full bg-very-pale-blue">
            <div className="flex">
              <Image 
                className="" 
                src={iconMusic}
                alt="icon-music" 
                width={40}
                height={30} 
              />
              <div className="flex flex-col items-start pl-4">
                <p className="font-bold text-md">Annual Plan</p>
                <p className="mt-1 font-semibold text-desaturated-blue">$59.99/year</p>
              </div>
            </div>
            <a href="" className="underline hover:no-underline decoration-bright-blue text-bright-blue font-bold">Change</a>
          </div>
          <div className="w-full flex flex-col">
            <button type="button" className="w-full text-white shadow-lg shadow-indigo-300 bg-bright-blue hover:bg-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Proceed to Payment</button>
            <br />
            <a href="#" className="text-sm font-bold text-desaturated-blue hover:text-dark-blue">Cancel Order</a>
          </div>
        </div>
      </div>
    </main>
  );
}
