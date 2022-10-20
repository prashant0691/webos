import React, { useEffect } from "react";
import styles from "./App.module.scss";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import background from '../public/images/background.svg';
import LogoutMenu from "./components/LogoutMenu";

const App = () => {
  return (
    <div className={styles.mainDiv}>
      <img className={styles.backgroundImg} src={background} alt="background" />
      <NavigationMenu/>
      <LogoutMenu className={styles.logoutMenu}/>
    </div>
  );
};

export default App;

// import React from "react";
// import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// import Item from "./Item";

// let itemsArray = [];
// for (let index = 0; index < 50; index++) {
//   itemsArray.push({ id: `item_${index}` });
// }

// const App = ({ setFocus }) => {
//   React.useEffect(() => {
//     setFocus();
//   }, []);

//   const handleScrolling = ({ node }) => {
//     node.scrollIntoView({ behavior: "smooth", block: "center" });
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         padding: 50,
//         display: "grid",
//         rowGap: 100,
//         gridTemplateColumns: "repeat(3, 1fr)"
//       }}
//     >
//       {itemsArray.map((item) => {
//         return (
//           <Item
//             key={item.id}
//             focusKey={item.id}
//             onBecameFocused={handleScrolling}
//           />
//         );
//       })}
//     </div>
//   );
// };

// const FocusableApp = withFocusable()(App);
// export default FocusableApp;
