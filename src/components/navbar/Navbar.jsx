import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";


const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logoText}>Blogify</h1>


        </div>
    );
};

export default Navbar;