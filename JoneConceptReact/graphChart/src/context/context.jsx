import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GuthubContext = createContext();

const GithubProvider = ({ children }) => {
  const [gitHubUser, setGitHubuser] = useState(mockUser);
  const [gitHubRepo, setGitHubrepo] = useState(mockRepos);
  const [gitHubFollower, setGitHubfollower] = useState(mockFollowers);
  
  return (
    <GuthubContext.Provider value={{ gitHubUser, gitHubRepo, gitHubFollower }}>
      {children}
    </GuthubContext.Provider>
  );
};
export { GuthubContext, GithubProvider };
