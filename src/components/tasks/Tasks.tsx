import { Trash } from "@phosphor-icons/react";
import styles from './Tasks.module.css';

function Tasks(props) {
    return (
        <div className={styles.content}>
            <div>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <div className={styles.trash}>
                    <Trash size={24} weight="bold" />
                </div>
            </div>
        </div>
    );
}

export { Tasks };