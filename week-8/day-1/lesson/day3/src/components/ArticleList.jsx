import { useState, useEffect } from "react";
import Article from "./Article";

export default function ArticleList({ something }) {
  const [posts, setPosts] = useState();
  const [userid, setUserId] = useState(1);
  const [title, setTitle] = useState({ header: "ArticleList" });

  useEffect(() => {
    // if(!userid){
    // setUserId(9)
    // }
    getPosts(userid);
    /** DONT setUserId */
  }, [userid, something]);

  useEffect(() => {
    // return () => alert("Dont do that please ....");
  }, []);

  const getPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addArticle = () => {
    // const newPosts = [...posts]
    // newPosts.push()
    // newPosts.push({ id:posts.length+1, title: "aaa", body: "bbb" });
    // console.log(posts);
    // setPosts(newPosts)
    setPosts([...posts, { id: posts.length + 1, title: "aaa", body: "bbb" }]);
  };
  const changeTitle = (e) => {
    setTitle({ ...title, header: e.target.value });
  };
  return (
    <>
      <h2>{title?.header}</h2>
      <div>
        <input onChange={changeTitle} placeholder='Change Title' />
      </div>
      <input type='text' onChange={(e) => setUserId(e.target.value)} />
      <button onClick={() => getPosts(userid)}>Articles</button>
      <div>
        <button onClick={() => addArticle()}>Add Article</button>
      </div>
      {posts &&
        posts.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
    </>
  );
}
