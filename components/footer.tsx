import styles from '../styles/Footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
           <span><Link href='/contact'><a>©2022 Grant Kennedy</a></Link></span>  
            <span>
                <IconButton size='large' className={styles.socialIcon}>
                    <a href='https://linkedin.com/in/grantkennedy1' hidden></a>
                    <LinkedInIcon/>
                </IconButton>
                <IconButton size='large' className={styles.socialIcon}>
                    <a href='www.instagram.com/thegrantkennedy/' hidden></a>
                    <InstagramIcon />
                </IconButton>
                <IconButton size='large' className={styles.socialIcon}>
                    <a href='https://github.com/gkennedy87' hidden></a>
                    <GitHubIcon />
                </IconButton>
            </span>
        </footer>
    )
}

export default Footer;