import React, {useState} from 'react';
import styles from './Paginator.module.css';
import leftArrow from '../../../assets/images/left-arrow.png';
import rightArrow from '../../../assets/images/right-arrow.png';

function Paginator({count, totalCount, page, pageChanged, portionSize = 10}) {
    const pageCount = Math.ceil(totalCount / count);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pagination}>
            {portionNumber > 1 ? <button className={styles.pagination__btn} onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}><img src={leftArrow} alt=""/>
            </button> : ''}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(p => {
                return (
                    <span className={p === page ? `${styles.pagination__link} ${styles.active}` : `${styles.pagination__link}` } onClick={() => {
                        pageChanged(p)
                    }}>{p}</span>
                )
            })}
            {portionNumber < portionCount ? <button className={styles.pagination__btn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}><img src={rightArrow} alt=""/>
            </button> : ''}
        </div>
    );
}

export default Paginator;