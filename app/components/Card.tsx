// import Image from "next/image"; 
// import blogComponent from "../../design/blog-preview-card/mobile-design.jpg";
// import orderSummary from "../design/order-summary-component/mobile-design.jpg";

interface CardProps {
    href: string;  
    cardTitle: string;  
    cardMessage: string;  
}

const Card: React.FC<CardProps> = ({ href, cardTitle, cardMessage }) => {
    return (
      <div className="max-w-sm m-6 h-full bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <a href={href} target="_blank">
            {/* <Image src={blogComponent} alt="blog preview card component" className="w-full h-64 rounded-l" unoptimized /> */}
            <div className="w-full h-64 rounded-t-l bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
                <div className="w-80 h-52 bg-white rounded-xl flex justify-center items-center font-extrabold text-2xl">
                    <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">{cardTitle}</h1>
                </div>
            </div>
        </a>
        <div className="p-5">
            {/* <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardTitle}</h5>
            </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardMessage}</p>
            <a href={href} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Live Here
            </a>
            <a href="https://github.com/radeau" target="_blank" className="inline-flex items-center mx-4 px-3 border rounded-lg py-2 text-sm font-medium text-center text-blue-700">
                Github
            </a>
        </div>
    </div>
    );
}

export default Card;