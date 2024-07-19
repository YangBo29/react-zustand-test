import React from 'react';
import styles from './index.less';
import { useNavigate } from 'react-router-dom';

function Project(props) {
    const navigate = useNavigate();
    // 返回上一级
    function goBack() {
        navigate('/manage');
    }

    // 刷新
    function refresh() {
        window.location.reload();
    }

    return (
        <div className={styles.container_404}>
            <div className={styles.content_404}>
                <h2>抱歉，找不到您的页面了！</h2>

                <div className={styles.cause}>
                    <p>没找到您要访问的页面，原因可能如下：</p>
                    <p>您访问的网址错误。</p>
                    <p>此页面已被删除或无访问权限。</p>
                </div>

                <div className={styles.content_btn}>
                    <button type="button" className={styles.btn_back} onClick={goBack}>
                        返回管理页
                    </button>
                    <button type="button" className={styles.btn_refresh} onClick={refresh}>
                        刷新
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;
