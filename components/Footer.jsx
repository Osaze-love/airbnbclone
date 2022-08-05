import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-14 py-14 bg-gray-300 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Not a real site</p>
          <p>Just a cool clone</p>
          <p>Portfolio ready</p>
          <p>Osaze Love</p>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre </p>
        <p>Trust and Safety</p>
        <p>Say Hello</p>
        <p>Christmas' a Fav</p>
        <p>For the Win</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COVERAGE</h5>
        <p>Everywhere</p>
        <p>Remote Working</p>
        <p>On-Site Working</p>
        <p>Temporary Working</p>
        <p>Contract Working</p>
      </div>
    </div>
  );
};

export default Footer;
