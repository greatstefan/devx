import Link from 'next/link';
import styles from './styles.module.css';
import ISEContactForm from '../../components/ise/ISEContactForm';
import { useState } from 'react';

const Item = ( { children }) => {
    return <div className={styles.item}><div className={styles.bullet}></div>{ children }</div>
}

function ISEHome() {
    const [openContact, setOpenContact ] = useState(false);

    return (
      <>
        <div className={styles.iseHome}>
            <div className={styles.nav}>
                <div className={styles.logo}><Link href="/ise"><img src="/images/ise/devxdigital_black.svg" /></Link></div>
                <div className={styles.contact} onClick={()=>setOpenContact(true)}>Get in touch</div>
            </div>
            <div className={styles.hero1}>
                <div className={styles.container}>
                    <div className={styles.titles}>
                        <h1>Custom Bespoke Design And Development</h1>
                        <p>We specialise in custom presentation websites and user interface development for AV clients.</p>
                    </div>
                </div>                
            </div>

            <div className={styles.hero2}>
                <h2>User interfaces and presentation layers for all AV requirements</h2>
                <div className={styles.threeCol}>
                    <div className={styles.col}>
                        <Item>Style Guides</Item>
                        <Item>Bespoke Design</Item>
                        <Item>Presentational UI</Item>
                    </div>
                        
                    <div className={styles.col}>
                        <Item>WebGL Presentations</Item>
                        <Item>Interactive Models</Item>
                        <Item>Website Animation</Item>
                    </div>

                    <div className={styles.col}>
                        <Item>Concept Design</Item>
                        <Item>Studio Presentation</Item>
                        <Item>Product Interaction</Item>
                    </div>
                </div>
            </div>

            <div className={styles.hero3}>
                <div className="list">
                    <div className={styles.listitem}>Websites</div>
                    <div className={styles.listitem}>Mobile apps</div>
                    <div className={styles.listitem}>AV apps</div>
                    <div className={styles.listitem}>Control interfaces</div>
                    <div className={styles.listitem}>Custom Apps</div>
                </div>
            </div>

            <div className={styles.hero4}>
                <div className={styles.button} onClick={()=>setOpenContact(true)}>Get a quote now!</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLogo}><Link href="/ise"><img src="/images/ise/devxdigital_black.svg" /></Link></div>
            </div>

            {openContact && <ISEContactForm close={()=>setOpenContact(false)} />}
        </div>
    </>)
}
ISEHome.hasCustomLayout = true;

export default ISEHome;