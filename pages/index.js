import { Inter } from "@next/font/google";
import Sidebar from "@/components/Sidebar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import BottomBanner from "@/components/BottomBanner";
import CommentModal from "@/components/modals/CommentModal";
import Navbar from "@/components/Navbar";

import { useSelector } from "react-redux";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className=" bg-[#242424]  min-h-screen">
      <Navbar/>
      <div className=" flex bg-[#242424] text-[#E7E9EA] max-w-[1400px] mx-auto ">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <CommentModal/>
      {!username && <BottomBanner />}
    </div>
  );
}
