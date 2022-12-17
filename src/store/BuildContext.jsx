import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getPipelineList } from "../services/axios";

export const BuildContext = createContext({
  user: "",
  isAuthenticated: false,
  pipeline: [],
  modifyStatus: () => {},
  addPipeline: () => {},
  removePipeline: () => {},
  login: () => {},
  logout: () => {}
});

const BuildContextProvider = ({ children }) => {
  const [pipeline, setPipeline] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    getPipelineList().then((res) => {
      setPipeline(res.data.result);
    })
  },[]);

  const modifyStatus = (pipelineName) => {
    setPipeline((prev) => {
      const index = prev.findIndex((item) => item.pipeline_name === pipelineName);
      const newPipeline = [...prev];
      newPipeline[index].building = false;
      return newPipeline;
    });
  }

  const addPipeline = (pipeline) => {
    setPipeline((prev) => [...prev, pipeline]);
  };

  const removePipeline = (pipeline) => {
    setPipeline((prev) => prev.filter((item) => item !== pipeline));
  };

  const login = (user) => {
    setUser(user);
    window.localStorage.setItem("user", user);
  }
  const logout = () => {
    setUser("");
    window.localStorage.removeItem("user");
  }

  const value ={
    user: user,
    isAuthenticated: user.length > 0,
    pipeline: pipeline,
    addPipeline: addPipeline,
    removePipeline: removePipeline,
    modifyStatus: modifyStatus,
    login: login,
    logout: logout
  }
  return (
    <BuildContext.Provider value={value}>
      {children}
    </BuildContext.Provider>
  );
}

export default BuildContextProvider;