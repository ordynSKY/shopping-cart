import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <>
            <div className={styles.notFound}>
                <h2>404</h2>
                <p>Page not found</p>
            </div>
        </>
    );
};

export default NotFound;
