import styles from './Layout1.module.css'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { Icon } from '@/components/ui/Icon'

export const Layout1 = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <div className={`${styles.position} ${styles['position-content']}`}>
                    <div className={`${styles.content} ${styles['position-welcome']}`}>
                        <Title level={6} size={14}>Practice Advice</Title>
                    </div>
                    <div className={styles.content}>
                        <Title level={2} size={40}>See Our Impressions</Title>
                    </div>
                    <div className={`${styles.content} ${styles['position-discription']}`}>
                        <Text level={1} size={14}>Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </Text>
                    </div>
                </div>

                <div className={`${styles.position} ${styles['position-card']}`}>
                    <div className={styles.card}>
                        <Icon name="mobile" />
                        <div className={styles.text1}>
                            <Title level={5} size={16}>Emergency Case</Title>
                        </div>
                        <Icon name="rectangle50" />
                        <div className={styles.text2}>
                            <Text level={1} size={14}>The gradual
                                accumulation and
                                small-scale..</Text>
                        </div>
                    </div>
                </div>
                <div className={`${styles.position} ${styles['position-card']}`}>
                    <div className={styles.card}>
                        <Icon name="mobileheart" />
                        <div className={styles.text1}>
                            <Title level={5} size={16}>Quick examination</Title>
                        </div>
                        <Icon name="rectangle50" />
                        <div className={styles.text2}>
                            <Text level={1} size={14}>The gradual
                                accumulation and
                                small-scale..</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}