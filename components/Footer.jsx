import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.item}>
                    <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
                </div>
                <div className={styles.item}>
                    <div className={styles.card}>
                        <h2 className={styles.motto}>
                        OH YES, WE DID,THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
                        </h2>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                        <p className={styles.text} >
                            1890 R. lucknow road #304,
                            <br /> Lucknow, 226003
                        </p>
                        <p className={styles.text} >
                            1890 R. lucknow road #304,
                            <br /> Lucknow, 226003
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Working Hours</h1>
                        <p className={styles.text}>Monday Until Friday
                            <br /> 9:00 - 22:00
                        </p>
                        <p className={styles.text}>Saturday - Sunday

                            <br /> 9:00 - 22:00
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;