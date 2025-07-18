import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="Post Image" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>1 hour ago</span>
                    <span className={styles.separator}> - </span>
                    <span className={styles.category}>Style</span>
                </div>
                <Link href="/">
                    <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, repellendus?</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, repellendus?
                </p>
                <Link href="/" className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;