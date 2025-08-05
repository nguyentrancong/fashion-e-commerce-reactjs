import styles from './cart.module.scss';
import Button from '@components/Button/Button';
import EmptyItem from '../components/EmptyItem/EmptyItem';
import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import { BsCart3 } from 'react-icons/bs';

function Cart() {
  const shouldItem = true;

  const handleRenderContents = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <HeaderSideBar
            icon={<BsCart3 style={{ fontSize: '25px' }} />}
            title={'CART'}
          />
          <ItemProduct />
        </div>

        <div className={styles.bottomView}>
          <div className={styles.subtotal}>
            <div className={styles.labelSubtotal}>Subtotal:</div>
            <div className={styles.valueSubtotal}>{'$99.99'}</div>
          </div>
          <Button content={'VIEW CART'} isPrimary={false} />
          <Button content={'CHECKOUT'} />
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
          icon={<BsCart3 style={{ fontSize: '25px' }} />}
          title={'CART'}
          description={'No products in the cart.'}
          onPress={handleReturnToShop}
        />
      )}
    </>
  );
}

export default Cart;
