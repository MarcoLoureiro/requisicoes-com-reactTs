import { useState,useEffect } from "react";
import * as ApiMethods from "./api/Api";
import { GetForm } from "./components/GetForm";
import { PostForm } from "./components/PostForm";
import { FormType } from "./types/FormType";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App () {

  function handlePostSend(title:string,body:string){
    let json = ApiMethods.sendPost(title,body);

  } //Desnecessário, podia chamar direto do ApiMethods

  const [posts,setPosts] = useState<FormType[]>([])
  async function getPosts(){
    setPosts(await ApiMethods.getPosts());
  }

  useEffect(()=>{
    getPosts();
  },[])

  return(
    <div className="container p-3">
      <PostForm postForm={handlePostSend}></PostForm>
      <GetForm posts={posts}></GetForm>
    </div>
  )

}

export default App;