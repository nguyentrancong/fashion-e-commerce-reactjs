import EmptyItem from '../components/EmptyItem/EmptyItem';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './compare.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { TfiClose } from 'react-icons/tfi';

function Compare() {
  const shouldItem = true;

  const handleRenderContents = () => {
    return (
      <div className={styles.container}>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: '25px' }} />}
          title={'COMPARE'}
        />

        <div className={styles.contentItem}>
          <img
            src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
            alt=''
          />
          <div className={styles.infoItem}>
            <div className={styles.nameItem}>10K Yellow Gold</div>
            <div className={styles.priceItem}>$99.99</div>
          </div>
          <div className={styles.close}>
            <TfiClose />
          </div>
        </div>
      </div>
    );
  };

  const handleReturnToShop = () => {
    // TODO: handle return to shop
  };

  return (
    <>
      {shouldItem ? (
        handleRenderContents()
      ) : (
        <EmptyItem
          icon={<TfiReload style={{ fontSize: '25px' }} />}
          title={'COMPARE'}
          description={'No products in the compare.'}
          onPress={handleReturnToShop}
        />
      )}
    </>
  );
}

export default Compare;
