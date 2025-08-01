import Button from '@components/Button/Button';
import styles from './login.module.scss';
import classNames from 'classnames';
import InputCommon from '@components/InputCommon/InputCommon';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>SIGN IN</div>
      <InputCommon
        label={'Username or email'}
        isRequired={true}
        type={'text'}
      />
      <InputCommon label={'Password'} isRequired={true} type={'password'} />
      <div className={styles.remember}>
        <input type='checkbox' />
        <div className={classNames(styles.label)}>Remember me</div>
      </div>
      <Button content={'LOGIN'} />
      <div className={classNames(styles.label)}>Lost your password?</div>
    </div>
  );
}

export default Login;
