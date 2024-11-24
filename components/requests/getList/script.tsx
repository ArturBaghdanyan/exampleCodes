import React, {useState} from "react";
import {IPost} from "../../types/posts";
import styles from './styles.module.scss';
import axios from "axios";

function ProcessUrl() {
  const [list,setList] = useState<IPost[]>([]);
  const [show,setShow] = useState<boolean>(false);

  async function fetchPost() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log("GET", response.data)
    setList(list)
    setShow(true);
  }

  return (
    <div className={styles.container}>
        <div className={styles.row}>
          <button onClick={fetchPost} className={styles.element}>
            show elements
          </button>
        </div>
      {show && (
        <button onClick={() => setShow(!show)}>
          close
          {
            list.map((pro, index) => {
              if (index < 3) {
                return (
                  <div key={pro.id} className={styles.data}>
                    <p>{pro.title}</p>
                    <p>{pro.body}</p>
                  </div>
                )
              }
            })
          }
        </button>

      )}
  </div>
  )
}
export default ProcessUrl;