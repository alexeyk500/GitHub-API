import React, {useEffect, useState} from 'react';
import classes from './UserDetailComponent.module.css';
import axios from "axios";

type UserFromServerType = {
  id: number,
  login: string,
  avatar_url: string,
  location: string,
  public_repos: number,
  followers: number,

}

type PropsType = {
  selectedUser: string | null
}


const UserDetailComponent:React.FC <PropsType>= ({
  selectedUser
}) => {
  const [showUser, setShowUser] = useState<UserFromServerType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(()=>{
    if (selectedUser) {
      setIsLoading(true)
      axios
        .get<UserFromServerType>(`https://api.github.com/users/${selectedUser}`)
        .then(res=>{
          setShowUser(res.data)
        })
        .then(()=>{setIsLoading(false)})
    }
  }, [selectedUser])


  return (
    showUser?
      isLoading?
        <div className={classes.container}>
          Fetching Data from server ...
        </div>
        :
        <div className={classes.container}>
          <div className={classes.titleLogin}>
            {showUser.login}
          </div>
          <div className={classes.imgWrapper}>
            <div className={classes.imgAvatar}>
              <img src={showUser.avatar_url} className={classes.imgAvatar} alt=""/>
            </div>
          </div>
          <div className={classes.titleLogin}>
            {'From: ' + showUser.location}
          </div>
          <div className={classes.titleLogin}>
            {'Repositories - ' + showUser.public_repos}
          </div>
          <div className={classes.titleLogin}>
            {'Followers - ' + showUser.followers}
          </div>
        </div>
      :null
  );
};

export default UserDetailComponent;