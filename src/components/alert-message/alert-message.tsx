import styles from './alert-message.module.scss';
import classNames from 'classnames';
import { Space, Alert } from 'antd';

export interface AlertMessageProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-alert-messages-and-templates
 */
export const AlertMessage = ({ className, children = 'AlertMessage' }: AlertMessageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Space direction="vertical" className={styles.full_width}>
                <Alert message="Warning" type="warning" showIcon closable />
                <Alert message="Success" type="success" showIcon />
                <Alert message="Information" type="info" showIcon />
                <Alert message="Error" type="error" showIcon />
            </Space>
        </div>
    );
};
