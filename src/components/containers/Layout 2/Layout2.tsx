import styles from './Layout2.module.css'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

export const Layout2 = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={`${styles.position} ${styles['position-content']}`}>
                    <div className={`${styles.position} ${styles['position-polygon']}`}>
                        <svg width="368" height="319" viewBox="0 0 368 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M183.624 318.931L0.0570401 0.98264L367.192 0.982607L183.624 318.931Z" fill="#FFF0E9" />
                        </svg>
                    </div>    
                    <div className={`${styles.position} ${styles['position-girls']}`}>
                        <img src="/static/tech 2.png" className={styles.girls} alt="This is a tech girls" />
                    </div>
                    <div className={`${styles.position} ${styles['position-stat']}`}>
                        <img src="/static/img 5.png" className={styles.stat} alt="This is a tech girls" />
                    </div>
                    <div className={`${styles.position} ${styles['position-chechmark']}`}>
                        <img src="/static/img 7.png" className={styles.checkmark} alt="This is a tech girls" />
                    </div>
                    <div className={`${styles.position} ${styles['position-chart']}`}>
                        <img src="/static/img 6.png" className={styles.chart} alt="This is a tech girls" />
                    </div>
                    <div className={`${styles.position} ${styles['position-face']}`}>
                        <img src="/static/img 9.png" className={styles.face} alt="This is a tech girls" />
                    </div>
                    <div className={`${styles.position} ${styles['position-hands']}`}>
                        <img src="/static/img 8.png" className={styles.hands} alt="This is a tech girls" />
                    </div>
                    <div className={styles.content}>
                        <Icon name="rectangle94" />
                        <Title level={2} size={40}>Our Department</Title>
                        <Text level={1} size={14}>Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics </Text>
                        <div className={styles['action__position']}>
                            <Button minimal={<Icon name="arrow" />}>Learn More</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}