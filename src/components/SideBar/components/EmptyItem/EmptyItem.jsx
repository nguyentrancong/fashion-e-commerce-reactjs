import HeaderSideBar from '../HeaderSideBar/HeaderSideBar';
import styles from './emptyItem.module.scss';
import Button from '@components/Button/Button';

function EmptyItem({ icon, title, description, onPress }) {
  return (
    <div className={styles.container}>
      <HeaderSideBar icon={icon} title={title} />
      <div className={styles.description}>{description}</div>
      <div className={styles.button}>
        <Button
          content={'RETURN TO SHOP'}
          onPress={onPress}
          btStyles={styles.button}
          isPrimary={false}
        />
      </div>
    </div>
  );
}

export default EmptyItem;
