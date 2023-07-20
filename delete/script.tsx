import {FormEvent, useState} from "react";
import styles from "./styles.module.scss";

const DeleteList = () => {
  const [status, setStatus] = useState<any>([]);

  const list = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(json => console.log(json))
      .catch((error) => {
        console.error('Error:', error);
      });
    setStatus('successful');
  }

  return (
    <div className={styles.delete}>
      <button onClick={list}>delete data in {status}</button>
    </div>
  )
}
export default DeleteList;
