import { NextPage } from "next";
import Image from "next/image";
import Stack from '@mui/material/Stack'
import styles from '../../styles/CaseStudy.module.css'
import TechStack from "../../components/techStack";
import Typography from '@mui/material/Typography';

const Lancul: NextPage = () => {



    return (
        <Stack p={3} gap={2}>
            <Stack>
                <Image className={styles.featuredImg} src='/Lancul.jpg' alt='lancul company logo on custom background' width="250px" height="200px"/>
            </Stack>
            <Stack mb={2}>
            <h1 className={styles.title}>Lancul</h1>
            <h2 className={styles.subtitle}>Frontend development of internal business tools & Wordpress management</h2>
            <TechStack techStack={['React',"AWS","Wordpress"]}/>
            </Stack>
            <Stack gap={2}>
                <Typography className={styles.text}>Due to a Non-Disclosure Agreement I can&apos;t show code examples, screenshots, or repositories.</Typography>

                <Typography className={styles.text}>However, I can say that I primarily worked on developing tools for use by the staff.</Typography>

                <Typography className={styles.text}>One of the more interesting challenges I faced was the need to adapt Javascript date objects to the Japanese calendar.</Typography>

                <Typography className={styles.text}>I solved this problem by using the <a href="https://date-fns.org">Datefns library</a> and a custom filter that would convert the day and month into their respective kanji.</Typography>

            </Stack>
        </Stack>
    )
}

export default Lancul;