import React, { useEffect, useRef } from "react";
import searchIcon from '../../../public/images/searchIcon.svg';
import collectionIcon from '../../../public/images/collection.svg';
import media from '../../../public/images/media.svg';
import setting from '../../../public/images/setting.svg';
import logout from '../../../public/images/logout.svg';
import styles from './NavigationMenu.module.scss';
import frontier from '../../../public/images/frontier.svg';

const menus = [
  {
    id:1,
    img:searchIcon,
    label: 'Search',
  },
  {
    id:2,
    img:collectionIcon,
    label: 'My Collection',
  },
  {
    id:3,
    img:media,
  },
  {
    id:4,
    img:setting,
  },
  {
    id:5,
    img:logout,
  },
]

const NavigationMenu = () => {
const focusList = useRef()
let currentIndex = 1;
useEffect(() => {
  focusList.current.children[1].focus();
  currentIndex = 1;
},[focusList])

const onKeyUpHandler = (event) => {
    if(event.key === "ArrowUp" && currentIndex > 0) {
      currentIndex  = currentIndex - 1;
      focusList.current.children[currentIndex].focus();
    } else if(event.key === "ArrowDown" && currentIndex < focusList.current.children.length - 1) {
      currentIndex  = currentIndex + 1;
      focusList.current.children[currentIndex].focus();
    }
}

return (
  <div className={styles.root}>
    <img src={frontier} className={styles.frontier}></img>
    <ul ref={focusList} className={styles.navigationList} onKeyUp={onKeyUpHandler}>
      {menus.map(menuItem => <li tabIndex={menuItem.id} key={menuItem.id} className={menuItem.id === 1 ? styles.search : styles.menu}>
        <img src={menuItem?.img} className={styles.searchIcon} alt="search icon" />
        <span className={styles.searchPlaceholder}> {menuItem?.label} </span>
      </li>)}
    </ul>
  </div>
)
}

export default NavigationMenu