// import Image from "next/image"; 
// import blogComponent from "../design/blog-preview-card/mobile-design.jpg";
// import orderSummary from "../design/order-summary-component/mobile-design.jpg";
import Card from "./components/Card"; 

export default function BlogPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex flex-col sm:flex-row sm:mx-3 justify-evenly">
        <Card href={'/nft-preview-card'} cardTitle={'NFT Card Component'} cardMessage={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'} />
        <Card href={'/blog-preview-card'} cardTitle={'Blog Preview Card'} cardMessage={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sun.'} />
        <Card href={'/order-summary-page'} cardTitle={'Order Summary Page'} cardMessage={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
      </div>
      <div className="flex flex-col sm:flex-row sm:mx-3 justify-evenly">
        <Card href={'/nft-preview-card'} cardTitle={'The Third Title'} cardMessage={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
        <Card href={'/blog-preview-card'} cardTitle={'The Eighty Eight Title'} cardMessage={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'} />
        <Card href={'/order-summary-page'} cardTitle={'The Hundred Title'} cardMessage={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sun.'} />
      </div>
      <div className="flex flex-col sm:flex-row sm:mx-3 justify-evenly">
        <Card href={'/nft-preview-card'} cardTitle={'NFT Card Component'} cardMessage={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'} />
        <Card href={'/blog-preview-card'} cardTitle={'Blog Preview Card'} cardMessage={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sun.'} />
        <Card href={'/order-summary-page'} cardTitle={'Order Summary Page'} cardMessage={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
      </div>
    </main>
  );
}
