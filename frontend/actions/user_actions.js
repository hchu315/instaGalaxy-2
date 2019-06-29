import * as UserAPIUtil from "../utils/user_api_util";

export const RECEIVE_PROFILE_USER = "RECEIVE_PROFILE_USER";

const receiveUser = (profileUser) => ({
  type: RECEIVE_PROFILE_USER,
  profileUser
});

export const fetchUser = (id) => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)) )
);