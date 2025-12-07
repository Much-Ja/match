import Login from "./components/Login";
import FeedPost from "./components/FeedPost";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="">
      <Login />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-2xl mx-auto my-5">
          <h1 className="text-[#242529] text-2xl font-medium">Latest featured posts</h1>
        </div>

      <FeedPost
        avatar="/avatar.jpg"
        name="OnlyFans"
        username="onlyfans"
        time="Yesterday"
        text="Fast food gets a gourmet glow-up when @thegalritchie and @camistrella tackle..."
        image="/post1.png"
      />

      {/* You can duplicate for more posts */}
      <FeedPost
        avatar="/avatar.jpg"
        name="Creator Name"
        username="creator123"
        time="2 days ago"
        text="🔥 New content coming soon..."
        image="/post2.png"
      />

    </div>
      <Footer />
    </main>
  );
}
