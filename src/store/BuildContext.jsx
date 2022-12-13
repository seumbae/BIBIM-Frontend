import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getPipeline } from "../services/axios";

export const BuildContext = createContext({
  pipeline: [],
  addPipeline: () => {},
  removePipeline: () => {},
});

const BuildContextProvider = ({ children }) => {
  const [pipeline, setPipeline] = useState([]);

  useEffect(() => {
    getPipeline().then((res) => {
      setPipeline(res.data.result);
    })
  },[])
  const addPipeline = (pipeline) => {
    setPipeline((prev) => [...prev, pipeline]);
  };

  const removePipeline = (pipeline) => {
    setPipeline((prev) => prev.filter((item) => item !== pipeline));
  };

  const value ={
    pipeline: pipeline,
    addPipeline: addPipeline,
    removePipeline: removePipeline
  }
  return (
    <BuildContext.Provider value={value}>
      {children}
    </BuildContext.Provider>
  );
}

export default BuildContextProvider;