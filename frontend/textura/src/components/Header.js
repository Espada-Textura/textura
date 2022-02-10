import React, { useState } from "react";

function Header(props) {
  if (!props.isLogin) return false;
  return (
    <div className="App">
      <h1>Header</h1>
    </div>
  );
}

export default Header;
