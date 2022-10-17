import React from "react";
import Cover from "../../img/cover.jpeg";
import Profile from "../../img/profileImg.webp";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      {/* //image section */}
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      {/* //Detail section */}
      <div className="ProfileName">
        <span> Ernie Miller</span>
        <span> Junior UI/UX developer</span>
      </div>

      {/* follower section */}
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
        <span>
            My Profile
        </span>
    </div>
  );
};

export default ProfileCard;
