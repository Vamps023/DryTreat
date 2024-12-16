import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import logo from '../assets/icon.png';

const Header: React.FC = () => {
  const menuItems = [
    { label: "Home", icon: "pi pi-home", command: () => console.log("Home clicked") },
    { label: "Products", icon: "pi pi-shopping-bag", command: () => console.log("Products clicked") },
    { label: "About Us", icon: "pi pi-info-circle", command: () => console.log("About Us clicked") },
    { label: "Contact", icon: "pi pi-envelope", command: () => console.log("Contact clicked") },
  ];

  const start = (
    <div className="flex align-items-center">
      <img alt="logo" src={logo} height="40" className="mr-2" />
      <span className="text-xl font-bold">DryTreat</span>
    </div>
  );
  

  const end = (
    <div className="flex align-items-center" style={{ display: "flex", alignItems: "center" }}>
      <span className="p-input-icon-left" style={{ marginRight: "1rem" }}>
        <i className="pi pi-search" />
        <InputText
          placeholder="Search Dry Fruits..."
          style={{
            width: "200px",
            padding: "0.5rem",
          }}
        />
      </span>
      <Button
        icon="pi pi-shopping-cart"
        className="p-button-rounded p-button-text p-button-sm mr-3"
        tooltip="View Cart"
      />
      <Button
        icon="pi pi-user"
        className="p-button-rounded p-button-text p-button-sm"
        tooltip="Login / Account"
      />
    </div>
  );

  return <Menubar model={menuItems} start={start} end={end} />;
};

export default Header;
