import Image from "next/image"; 
import blogComponent from "../design/blog-preview-card/mobile-design.jpg";
import orderSummary from "../design/order-summary-component/mobile-design.jpg";
import Card from "./components/Card";

export default function BlogPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <div className="flex ">
        <div className="flex-auto w-2/4 shadow-2xl">
          <a href="/blog-preview-card" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image src={blogComponent} alt="blog preview card component" height={150} width={150} className="rounded-l" unoptimized />
            {/* <div className="w-full bg-yellow-200 py-20">insert image here</div> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog Preview Card Component</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
        </div>
        <div className="flex-auto w-2/4 mx-4 shadow-2xl">
          <a href="/order-summary-component" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image src={orderSummary} alt="order summary component" height={150} width={150} className="rounded-l" unoptimized/>
            {/* <div className="w-full h-fit bg-blue-200 py-20">insert image here</div> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order Summary Component</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
        </div>
        <div className="flex-auto w-2/4 shadow-2xl">
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* <Image src={blogComponent} alt="blog preview card component" className="w-full rounded-xl"/> */}
            {/* <div className="w-full bg-gray-200 py-20">insert image here</div> */}
            <Image src={blogComponent} alt="blog preview card component" height={150} width={150} className="rounded-l" unoptimized />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NFT Preview Card Component</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
