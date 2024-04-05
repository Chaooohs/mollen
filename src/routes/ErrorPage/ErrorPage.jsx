import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  const { status } = useSelector(state => state.error)

  return (
    <div className={styles.error}>
      <div className={styles.status}>{status}</div>
      <div className={styles.data}>Сторінка не знайдена або переміщена</div>

      <Link to="/">
        <span className={`txt-md ${styles.link}`}>
          перейти на головну
        </span>
      </Link>

    </div>
  );
}
