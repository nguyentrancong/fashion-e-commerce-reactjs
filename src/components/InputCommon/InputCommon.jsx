import classNames from 'classnames';
import styles from './inputCommon.module.scss';
import { LiaEyeSlashSolid } from 'react-icons/lia';
import { LiaEyeSolid } from 'react-icons/lia';
import { useState } from 'react';

function InputCommon({ label, type, isRequired = false }) {
  const [isShow, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const isPassword = type === 'password';

  return (
    <div className={styles.container}>
      <div className={classNames(styles.label)}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={styles.inputBox}>
        <input type={isPassword && isShow ? 'text' : type} />
        {isPassword && (
          <div className={styles.boxIcon} onClick={handleToggle}>
            {isShow ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
