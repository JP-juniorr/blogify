import React from 'react';
import styles from './singlePage.module.css'
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit ametsit amet sit amet.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dolor ex ipsam
                            laboriosam saepe veniam voluptas. A alias aspernatur assumenda consequatur cumque cupiditate
                            dolor, dolorem eaque eligendi expedita fugit in ipsa, iste labore, nemo nisi officia
                            officiis
                            optio qui quibusdam quidem quisquam reiciendis sapiente similique tempora tenetur vitae
                            voluptate!</p>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum nihil repellat sunt
                            voluptate! Accusantium consectetur mollitia quae, quis reiciendis sequi voluptates. Aliquam
                            animi autem distinctio.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dolor ex ipsam
                            laboriosam saepe veniam voluptas. A alias aspernatur assumenda consequatur cumque cupiditate
                            dolor, dolorem eaque eligendi expedita fugit in ipsa, iste labore, nemo nisi officia
                            officiis
                            optio qui quibusdam quidem quisquam reiciendis sapiente similique tempora tenetur vitae
                            voluptate!</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;
