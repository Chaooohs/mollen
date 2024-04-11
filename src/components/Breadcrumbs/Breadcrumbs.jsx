import { Link, useNavigate } from "react-router-dom";
import styles from './Breadcrumbs.module.scss'

export const Breadcrumbs = ({ subfolder, current }) => {
  const navigate = useNavigate()

  const currentFolder = current.split(" ").slice(0, 1)

  const handleClick = () => { 
    navigate(-1)
  }

  return (
    <div className={`txt-circe-sm ${styles.breadcrumbs}`}>
      <ul className={styles.ul}>
        <li>
          <Link to="/" className={styles.link}>
            <span>головна</span>
          </Link>
          <span>/</span>
        </li>
        {
          subfolder &&
          <li>
            <span className={styles.link} onClick={handleClick}>{subfolder}</span>
            <span>/</span>
          </li>
        }
        <li>
          <span>{currentFolder}</span>
        </li>
      </ul>
    </div>
  );
};
