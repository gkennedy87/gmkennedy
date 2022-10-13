import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Portfolio.module.css';


const PortfolioPiece = (props:any) => {
    const {title, url, img, desc, alt} = props;
    const router = useRouter();

    return (
        <Paper variant="outlined" className={styles.card} onClick={() => router.push(url)}>
                <Image src={img} alt={alt} height={200} width={345}/>
                <>
                    <Typography gutterBottom variant="h5" className={styles.text} component="div">
                        {title}
                    </Typography>
                    <Typography className={styles.text}>
                        {desc}
                    </Typography>
                </>
        </Paper>

    )
}

export default PortfolioPiece