import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Pagination from "./Components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext";

export default function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPost();
  }, [])
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}
