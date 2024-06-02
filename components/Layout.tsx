import React, { useContext } from "react";

// Nextjs
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

// Styles
import styles from "@/styles/Home.module.css";

// Bootstrap
import Form from 'react-bootstrap/Form';

// User Context
import { context } from "@/utils/userContext";

// Data
import info from '@/data/info.json'

// Assets
import { assetsInfo } from "@/utils/assets";

type LayoutProps = {
    children: any,
    title?: string,
    description?: string,
    image?: string,
};

function Layout({ children, title, description, image }: LayoutProps) {
    const {state, disPatch} = useContext(context);
    let language: "en" | "ar" = state || "en";

    const handleChange = (event:any) => {
        disPatch(event.target.value);
        console.log(`language: ${language}`)
    };

    return (
        <div>
            <Head>
                <title>{assetsInfo.title}</title>
                    <meta name="title" content={assetsInfo.title} />
                    <meta name="description" content={`${assetsInfo.description}`} />
                    <meta name="keywords" content='Dynamix Fitness Center, Dynamix, gym, Dynamix Fitness Center gym, egypt, egyption, arabic, arabs, 10th of Ramadan, city, Sharqia, Governorate, BarbellsSet, DumbbellsSet, GymEquipment, InclineBenchPress, StationaryBike, Treadmill, leg press machine, seated curl machine, barbells, dumbbells, treadmill, abdominal roller, resistance bands, 10th of Ramadan City 1, Ash Sharqia Governorate 7062536, Open gym, search gym, find gym, close gym, available, available gym, available gym rn, Gallery, Plans, gym plans, training, training gym, cheap, cheap gym, expensive, expensive gym, Jacuzzi, Sauna, Whatsapp, instagram, facebook, email, gmail, Contact, Contact us, list, news, game, games, new, popular, online, free, site, website, image, picture, youtube, جيم, موقع, جيم قريب, العاشر من رمضان, العاشر, مصر, مصري, تواصل, تواصل معنا, اشتراك, خطط, خطط أشتراك, صدناوي, مول, موقعنا, مفتوح, جيم مفتوح, جيم متوفر, صور, صور جيم, جاكوزي, سونا, حمام بخار, حمام مغربي, اشتراك جيم, جيم رخيص, جيم غالي, واتس اب, جيم واتس اب, انستجرام, فيس بوك, ايميل, جيميل, تواصل معنا, تدريب, تدريبات, مدرب, تدريب جيم, الات جيم' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* OG tags */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={assetsInfo.site} />
                    <meta property="og:title" content={assetsInfo.title} />
                    <meta property="og:description" content={`${assetsInfo.description}`} />
                    <meta property="og:image" content={assetsInfo.cardImage} />

                    {/* Twitter Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content={`${assetsInfo.description}`} />
                    <meta name="twitter:site" content={assetsInfo.title} />
                    <meta name="twitter:title" content={assetsInfo.title} />
                    <meta name="twitter:url" content={assetsInfo.site} />
                    <meta name="twitter:image" content={assetsInfo.cardImage} />
                    <meta name="twitter:image:alt" content={assetsInfo.title} />

                    {/* ICONS */}
                    <link rel="shortcut icon" type="image/x-icon" href={assetsInfo.cardImage}/>
                    <link rel="apple-touch-icon" sizes="180x180" href={assetsInfo.cardImage} />
                    <link rel="icon" type="image/png" sizes="32x32" href={assetsInfo.cardImage}/>
                    <link rel="icon" type="image/png" sizes="16x16" href={assetsInfo.cardImage}/>
                    {/* <link rel="shortcut icon" type="image/x-icon" href='/favicon/favicon.ico' />
                    <link rel="apple-touch-icon" sizes="180x180" href='/favicon/apple-touch-icon.png' />
                    <link rel="icon" type="image/png" sizes="32x32" href='/favicon/favicon-32x32.png'/>
                    <link rel="icon" type="image/png" sizes="16x16" href='/favicon/favicon-16x16.png'/> */}
            </Head>
            <div className={`d-flex flex-column justify-content-between algin-items-center min-vh-100 text-white ${styles.backgroundGradient} ${language == "ar" ? "arabic-lang" : "english-lang"}`}>
                <header>
                    <nav className="container-fluid bg-black bg-opacity-25">
                        <div className="container py-2 d-flex flex-row flex-wrap justify-content-center justify-content-sm-between algin-items-center gap-4">
                            <div>
                                <Link href="/">
                                    <img className='img-fluid h-100 rounded overflow-hidden' src={assetsInfo.siteIcon} width={40} height={40} alt='Site Icon'/>
                                </Link>
                            </div>
                            <div className="d-flex flex-row flex-wrap justify-content-center algin-items-center gap-3">
                                <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#location">{info[language].showLocation}</Link>
                                <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#gallery">{info[language].galleryTitle}</Link>
                                <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#plans">{info[language].plansTitle}</Link>
                                <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#contact">{info[language].contact}</Link>

                                <div>
                                    <Form.Select value={state} style={{cursor: 'pointer'}} className="text-white bg-dark bg-opacity-75 border-0 shadow-none overflow-hidden" onChange={handleChange}>
                                        <option value="ar">عربي</option>
                                        <option value="en">English</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className={`container-fluid px-0 justify-content-start align-items-start overflow-hidden mb-auto`}>
                    {children}
                </main>
                <footer className="container-fluid bg-dark">
                    <div className="d-flex flex-column justify-content-center algin-items-center gap-5 p-4">
                        <div className="d-flex flex-row flex-wrap justify-content-around algin-items-center gap-5">
                            <div className="justify-self-center align-self-center">
                                <Link href="/">
                                    <img className='img-fluid rounded overflow-hidden' src={assetsInfo.siteIcon} width={80} height={80} alt='Site Icon'/>
                                </Link>
                            </div>
                            <div className="d-flex flex-row flex-wrap justify-content-center algin-items-center text-top gap-4 p-3">
                                <div className="d-flex flex-column justify-content-top algin-items-center text-top gap-2">
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#location">{info[language].showLocation}</Link>
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#opens">{info[language].opens}</Link>
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#coaches">{info[language].coachesTitle}</Link>
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#gallery">{info[language].galleryTitle}</Link>
                                </div>
                                <div className="d-flex flex-column justify-content-top algin-items-center text-top gap-2">
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#plans">{info[language].plansTitle}</Link>
                                        <Link className={`py-2 fw-bold ${styles.hoverLinks}`} href="#contact">{info[language].contact}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center p-2 d-flex flex-row flex-wrap justify-content-around algin-items-center text-center gap-3">
                            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-2'>
                                    <p style={{fontFamily: 'Dancing Script, cursive, sans-serif, Arial'}} className='p-0 m-0'>Created By:<span style={{fontFamily: 'Dancing Script, cursive, sans-serif, Arial'}} className='ms-2 fw-bold p-0 m-0'>Viper</span></p> |
                                    <Link style={{width: '25px', height: '25px'}} className='bg-dark overflow-hidden rounded-1' title='https://xvpc.dev' href='https://xvpc.dev' target='_blank'><img className='img-fluid' src={'https://xvpc.dev/favicon/favicon-32x32.png'} width={512} height={512} alt='Portfolio Icon'/></Link>
                            </div>
                            {/* <span style={{fontSize: '14px'}} className='text-white-50 text-center align-self-center'>{window?.location?.host || assetsInfo.site}&#169;{new Date().getFullYear()}</span> */}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default dynamic(() => Promise.resolve(Layout), {ssr: false})