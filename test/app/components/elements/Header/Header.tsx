import { FC } from 'react';
import styles from './Header.module.scss';

const Header:FC = () => {
    return (
        <div className={styles.header}>
            <h1>А вдруг CMA?</h1>
            <p>Выберите, кто Ваш пациент:</p>
        </div>
    );
}

export default Header;