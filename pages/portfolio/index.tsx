import type { NextPage } from "next";
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import styles from '../../styles/Portfolio.module.css'
import portfolioSubta from '../../public/assets/portfolioSubta.png'
import portfolioScouts from '../../public/assets/portfolioScouts.jpg'
import Lancul from '/Lancul.jpg'
import { useRouter } from "next/router";
import PortfolioPiece from "../../components/portfolioPiece";

const Portfolio: NextPage = () => {
    const router = useRouter();


    return (
        <>
        <Stack pt={3} sx={{justifyContent:'center'}}>
            <Typography variant="h1" sx={{textAlign:"center"}}>Portfolio</Typography>
            <Typography variant="h2" className={styles.subtitle} gutterBottom>
                Here is a sample of some of my work.
            </Typography> 
            
                <Box sx={{
                    display:{xs:'flex', md:"flex"},
                    flexWrap:"wrap", 
                    maxWidth:"800px",
                    alignItems:"center",
                    justifyContent:"center",
                    marginBottom:'1rem'
                    }} 
                    gap={1}
                    >

                    <PortfolioPiece 
                        title="Elities: SMS Rewards" 
                        url="https://app.elities.com" 
                        desc="React, Node.js, MongoDB, AWS, UI/UX"
                        img="/elities.png"
                        />
                        
                     <PortfolioPiece
                        title="my.SUBTA" 
                        url="https://my.subta.com" 
                        desc="Elementor, PHP, Figma, UI/UX"
                        img={portfolioSubta}
                        />
                    <PortfolioPiece
                        title="LanCul" 
                        url="/portfolio/lancul" 
                        desc="React, AWS, Wordpress, UI/UX"
                        img="/Lancul.jpg"
                        />
                    <PortfolioPiece
                        title="Scouts and Services" 
                        url="https://kumamarketing.com/scouts-and-services-united-case-study/" 
                        desc="UI/UX, Figma, Webflow"
                        img={portfolioScouts}
                        />
                </Box>
                <Divider/>

                <Stack p={2} sx={{alignItems:'center', justifyContent:"center"}}>
                    <Typography gutterBottom>Other Work</Typography>
                    <Stack direction="row" gap={2}>
                        <Typography className={styles.link} component="a" href="https://petoskeydooodles.com">Petoskey Doodles</Typography>
                        <Typography className={styles.link} component="a" href="https://smitajewelers.com">Smita Jewelers</Typography>
                        <Typography className={styles.link} component='a' href="https://kumamarketing.com">Kuma Marketing</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Portfolio