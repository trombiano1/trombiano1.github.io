import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import experienceStyles from '@/styles/Experience.module.css'
import Template from '../components/template'
import concerthall from '../img/works/concerthall.png'
import lookout from '../img/works/lookout.png'
import competitive from '../img/works/competitive.png'
import qiita from '../img/logos/qiita.png'
import ExperienceBlock from '../components/experienceblock'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"
const inter = Inter({ subsets: ['latin'] })
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <Template>
            <motion.div className={styles.mainArea} initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 1,
                    y: 50
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 0.2
                    },
                    y: 0
                }
            }}>

                <h2 className={styles.heading}>
                    <p className={inter.className}>Experience</p>
                </h2>

                <ExperienceBlock
                    title="AI Academic Affairs Researchers"
                    company="Nagase Brothers Inc. - Part Time"
                    date="Jan. 2022 - Present"
                    skills="Python, Microsoft Azure, Amazon Web Services, Google Cloud Platform"
                    delay={0.1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </ExperienceBlock>

                <ExperienceBlock
                    title="Application Engineer"
                    company={
                        <p>Rakuten Summmer Short Internship - Internship  <span>1st place</span></p>
                    }
                    date="Aug 2021"
                    skills="Python, AWS, Microsoft Azure, Amazon Web Services, Google Cloud Platform"
                    delay={0.3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </ExperienceBlock>

                <ExperienceBlock
                    title={
                        <p>Teaching Assistant <span>&</span> Material Development</p>
                    }
                    company="University of Tokyo - Part-time"
                    date="Apr 2022 - Present"
                    skills="Unity · C# · Teaching · Technical Writing · Coaching"
                    delay={0.5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus dui. Vivamus facilisis felis ipsum, et dictum arcu maximus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis urna felis. Aenean ultricies lacus sed luctus vehicula.
                </ExperienceBlock>
            </motion.div>
        </Template >
    )
}