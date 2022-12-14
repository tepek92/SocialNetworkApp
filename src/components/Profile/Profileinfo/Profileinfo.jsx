import React from "react";
import presswall from "../../../img/presswall.jpg";
import avatar from "../../../img/user.png";
import s from "./Profileinfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const Profileinfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }

  const addFile = (e) => {
    if(e.target.files.length !== 0) {
      console.log(e.target.files);
      props.saveNewPhoto(e.target.files[0]);
    }
  } 

  debugger
  return (
    <div>
      <div>
        <img className={s.presswall} src={presswall} alt="presswall" />
      </div>
      <div>
        <div>{props.userProfile.fullName}</div>
        <img
          className={s.avatar}
          src={props.userProfile.photos.large || avatar}
          alt="avatar"
        /> <br/>
        {props.isOwner && <input onChange={addFile} type={"file"}/>}
        <ProfileStatus isOwner={props.isOwner} updateUserStatus={props.updateUserStatus} userStatus={props.userStatus} />
        <br/>
        <div>Место работы:
          {props.userProfile.lookingForAJob
            ? props.userProfile.lookingForAJobDescription
            : "Уже работаю"}
        </div>
        <div className={s.link}>
          <br/>
          Где меня найти:
          {Object.keys(props.userProfile.contacts).map((link) => {
            return (
              <div>
                {"==> "}
                <a href={"https://" + props.userProfile.contacts[link]}>
                  {link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
