import React from "react";
import { connect } from "react-redux";
import {
  setUserProfile,
  setUserStatus,
  updateUserStatus,
  saveNewPhoto
} from "../../redux/profileReducer";
import Profile from "./Profile";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";
import {
  getAuthorizedUserId,
  getIsAuthorized,
  getUserProfile,
  getUserStatus,
} from "../../redux/profileSelector";

class ProfileContainer extends React.Component {

  updateProfile() {
    let userID = this.props.router.params.userId || this.props.authorizedUserId;
    this.props.setUserProfile(userID);
    this.props.setUserStatus(userID);
  }
  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.updateProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} isOwner={!this.props.router.params.userId}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: getUserProfile(state),
    userStatus: getUserStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuthorized: getIsAuthorized(state),
  };
};

export default compose(
  connect(mapStateToProps, { setUserProfile, setUserStatus, updateUserStatus, saveNewPhoto }),
  withRouter,
  WithAuthNavigate
)(ProfileContainer);
