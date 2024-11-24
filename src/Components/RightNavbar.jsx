import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function RightNavbar() {
  return (
    <div className="space-y-2">
      <button className="btn bg-transparent border border-green-500 text-green-500 w-full">
        Login with google
      </button>
      <button className="btn bg-transparent border border-green-500 text-green-500 w-full">
        Login with github
      </button>

      <div>
        <h4 className="font-bold text-2xl my-4">Join us </h4>

        <div className="flex flex-col gap-3">
          <button class="btn w-full flex gap-1">
            <FaFacebook />
            Join us on Facebook
          </button>
          <button class="btn w-full">
            <FaTwitter />
            Follow us on Twitter
          </button>
          <button class="btn w-full">
            <FaInstagram />
            Follow us on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightNavbar;
