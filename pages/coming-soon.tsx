import React from 'react';
import Image from 'next/image';
import gif from '../public/coming-soon.gif';
import styles from '../styles/coming-soon.module.css';

export default function ComingSoon() {
    return (
        <div className={styles.container}>
            <h1 className={'h1'}>Próximamente</h1>
            <p className={'p'}>Estamos trabajando duro para traerte contenido nuevo. ¡Vuelve pronto!</p>
            <Image src={gif} alt="coming soon" width={500} height={500} className={'img'}/>
        </div>
    );
}