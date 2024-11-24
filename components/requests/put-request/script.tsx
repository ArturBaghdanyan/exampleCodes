import {FormEvent, useState} from "react";
import DeleteList from "../delete/script";
import styles from "./styles.module.scss";

const PutList = () => {
  const [posts, setPosts] = useState<any>([]);
  const [title, setTitle] = useState<any>({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
  });

  const putData = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(title),
    })
      .then((response) => response.json())
      .then((json) => setTitle(json))
      .catch((err) => {
        console.log("error", err.message);
      });
  }

  return (
    <div>
      <div className={styles.put}>
        <button onClick={putData}>putdata</button>
      </div>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
              <DeleteList />
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}
export default PutList;
