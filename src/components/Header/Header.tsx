import React from "react";
import styles from "./Header.module.css";

type HeaderType = {
    logo: string
}

export const Header: React.FC<HeaderType> = (props) => {
    return <header className={styles.header}>
        <div className={'container'}>
            <a className={styles.itemLink} href="/"><img src={props.logo} alt={'logo'}/></a>
        </div>
    </header>
}

