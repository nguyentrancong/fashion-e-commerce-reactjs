import Button from '@components/Button/Button';
import EmptyItem from '../components/EmptyItem/EmptyItem';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './wishList.module.scss';
import { FaRegHeart } from 'react-icons/fa';

function WishList() {
  const shouldItem = true;

  const handleRenderContents = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <HeaderSideBar
            icon={<FaRegHeart style={{ fontSize: '25px' }} />}
            title={'WISHLIST'}
          />
          <ItemProduct />
        </div>

        <div className={styles.button}>
          <Button content={'VIEW WISHLIST'} isPrimary={false} />
          <Button content={'ADD ALL TO CART'} />
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
          icon={<FaRegHeart style={{ fontSize: '25px' }} />}
          title={'WISHLIST'}
          description={'No products in the wish list.'}
          onPress={handleReturnToShop}
        />
      )}
    </>
  );
}

export default WishList;
