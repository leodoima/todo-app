import { Trash } from "@phosphor-icons/react";

import styles from './ListTasks.module.css';

function ListTasks() {
    return (
        <div className={styles.content}>
            <div>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <div className={styles.trash}>
                    <Trash size={24} weight="bold" />
                </div>
            </div>
        </div>
    );
}

export { ListTasks };