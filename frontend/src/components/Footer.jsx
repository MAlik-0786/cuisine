import React from "react";

const Footer = () => {
    return (
        <footer className="bg-brand-cyan w-full  text-white py-2 bottom-0 ">
            <p className="text-center">&copy; {new Date().getFullYear()} Cuisine. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
