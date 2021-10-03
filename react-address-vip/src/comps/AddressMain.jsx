import React from "react";
import AppContextProvider from "../context/AppContextProvider";

function AddressMain({ form, children }) {
  return (
    <AppContextProvider>
      <div className="addr_main">
        <main className="addr_main_layout">
          <section>{form}</section>
          <section>{children}</section>
        </main>
      </div>
    </AppContextProvider>
  );
}

export default AddressMain;
