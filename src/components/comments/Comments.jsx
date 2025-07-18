import React from 'react';
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
          <textarea
              placeholder="write a comment..."
              className={styles.input}
          />
                    <button className={styles.button}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image className={styles.image} src="/p1.jpeg" alt="" width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.02.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        cupiditate delectus dolorem dolores
                        eaque eligendi nemo omnis placeat voluptatem voluptatibus. Alias atque consectetur consequatur
                        distinctio dolorem doloremque, esse illo, incidunt iure maiores natus nisi odio officia
                        praesentium quasi repellendus sed tempore temporibus veniam voluptate. Ad aspernatur corporis
                        delectus eos esse est, excepturi exercitationem fugiat incidunt ipsum iste laboriosam minus nisi
                        officia quod quos sed sequi similique ut voluptates! Corporis nihil omnis possimus reiciendis.
                        Atque commodi culpa, cupiditate exercitationem, fuga fugiat nisi nostrum quam quis recusandae
                        reiciendis tempora? Adipisci labore, neque! Aperiam cum dolore eaque id maiores possimus rem
                        totam velit!</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
