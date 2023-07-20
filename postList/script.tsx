import {FormEvent, useState} from "react";
import styles from './styles.module.scss';

const PostList = () => {
  const [posts, setPosts] = useState<any>([]);
  const [show,setShow] = useState<boolean>(true);
  const [title, setTitle] = useState<any>({
    title: "asvas",
    body: "ut aspernatur corporis harum nihil quis provident",
    UserId: 1,
  });

  const list = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(title),
    })
      .then((response) => response.json())
      .then((post) => {
        setPosts((posts: any) => [post, ...posts]);
        setTitle('');
        setShow(false);
        console.log("success", post);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }

  return (
    <div>
      {show ? (
        <div className={styles.post}>
          <button onClick={list}>listData</button>
        </div>
      ) : (
        posts.map((post: any) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div>
                <button>Delete</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  )
}
export default PostList;
