import styles from './modules-todos-core.module.css';

/* eslint-disable-next-line */
export interface ModulesTodosCoreProps {}

export function ModulesTodosCore(props: ModulesTodosCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesTodosCore!</h1>
    </div>
  );
}

export default ModulesTodosCore;
