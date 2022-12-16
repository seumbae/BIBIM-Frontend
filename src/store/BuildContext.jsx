import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getPipelineList } from "../services/axios";

export const BuildContext = createContext({
  pipeline: [],
  modifyStatus: () => {},
  addPipeline: () => {},
  removePipeline: () => {},
});

const BuildContextProvider = ({ children }) => {
  const [pipeline, setPipeline] = useState([]);

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

  const value ={
    pipeline: pipeline,
    addPipeline: addPipeline,
    removePipeline: removePipeline,
    modifyStatus: modifyStatus
  }
  return (
    <BuildContext.Provider value={value}>
      {children}
    </BuildContext.Provider>
  );
}

export default BuildContextProvider;