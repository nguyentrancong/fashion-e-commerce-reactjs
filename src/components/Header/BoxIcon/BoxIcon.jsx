import styles from './styles.module.scss';
// import fbIcon from '@icons/vsgs/fb.svg';
// import instaIcon from '@icons/vsgs/insta.svg';

import insIcon from '@icons/svgs/insta.svg';
import fbIcon from '@icons/svgs/facebook.svg';
import ytbIcon from '@icons/svgs/youtobe.svg';

function BoxIcon({ type, href }) {
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ytb':
        return ytbIcon;
      case 'ins':
        return insIcon;
    }
  };

  return (
    <div className={styles.boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
