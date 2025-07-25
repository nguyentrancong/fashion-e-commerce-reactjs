import CardInfo from './CardInfo/CardInfo';
import { dataInfo } from './data';
import styles from './info.module.scss';
import MainLayout from '@components/Layout/Layout';

function Info() {
  return (
    <MainLayout>
      <div className={styles.container}>
        {dataInfo.map((item) => {
          return (
            <CardInfo
              title={item.title}
              des={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
