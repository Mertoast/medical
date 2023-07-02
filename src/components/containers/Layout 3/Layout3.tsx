import styles from './Layout3.module.css'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

export const Layout3 = () => {
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
                        <div className={styles.product}>
                            <div className={`${styles.position} ${styles['position-product']}`}>
                                <img src="/static/product 1.png" className={styles.prod} alt="This is a product" />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <a className={styles.productcategory} href='/'>English Departement</a>
                        </div>
                        <div className={styles.productname}>
                            <Title level={5} size={16}>Best dental surgeons</Title>
                        </div>
                        <div className={styles.productinfo}>
                            <Text level={1} size={14}>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.</Text>
                        </div>
                        <div className={styles.sale}>
                            <Icon name="arrow-bottom" /> <Title level={5} size={16}>15 Sales</Title>
                        </div>
                        <div className={styles.price}>
                            <Title level={5} size={16}>$16.48</Title>
                        </div>
                        <div className={styles.priceafter}>
                            <Title level={5} size={16}>$6.48</Title>
                        </div>
                        <div className={styles['action__position']}>
                            <Button minimal={<Icon name="arrow" />}>Learn More</Button>

                        </div>
                    </div>
                </div>
                <div className={`${styles.position} ${styles['position-card']}`}>
                    <div className={styles.card}>
                        <div className={styles.product}>
                            <div className={`${styles.position} ${styles['position-product']}`}>
                                <img src="/static/product 2.png" className={styles.prod} alt="This is a product" />
                                
                            </div>
                        </div>
                        <div className={styles.info}>
                            <a className={styles.productcategory} href='/'>English Departement</a>
                        </div>
                        <div className={styles.productname}>
                            <Title level={5} size={16}>Health Queries</Title>
                        </div>
                        <div className={styles.productinfo}>
                            <Text level={1} size={14}>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.</Text>
                        </div>
                        <div className={styles.sale}>
                            <Icon name="arrow-bottom" /> <Title level={5} size={16}>15 Sales</Title>
                        </div>
                        <div className={styles.price}>
                            <Title level={5} size={16}>$16.48</Title>
                        </div>
                        <div className={styles.priceafter}>
                            <Title level={5} size={16}>$6.48</Title>
                        </div>
                        <div className={styles['action__position']}>
                            <Button minimal={<Icon name="arrow" />}>Learn More</Button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
