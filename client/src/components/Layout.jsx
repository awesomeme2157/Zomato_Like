// // eslint-disable-next-line
// import React from "react";
// import Navbar from "./Navbar";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;

// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
