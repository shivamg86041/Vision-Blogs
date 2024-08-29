import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[post, setPost] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    //data filling pending
    async function fetchBlogPost(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            console.log("Print post data ", data.posts);
            setTotalPages(data.totalPages);
        }
        catch(err){
            console.log("Error in fetching data");
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        post, 
        setPost,
        loading,
        setLoading,
        page,
        setPage, 
        totalPages, 
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };

    //step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}