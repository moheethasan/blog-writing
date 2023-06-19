import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaArrowRight } from "react-icons/fa";
import AllTopics from "./AllTopics";
import CustomTopics from "./CustomTopics";
import ICPTopics from "./ICPTopics";
import MissionTopics from "./MissionTopics";
import ProductTopics from "./ProductTopics";
import { useState } from "react";
import AddTopicModal from "../../components/Modal/AddTopicModal";

const Category = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="my-40 container mx-auto">
      <section className="max-w-5xl mx-auto border-2 p-5 border-gray-300 rounded h-">
        <h4 className="text-lg font-bold mb-5">Categories</h4>
        <Tabs>
          <TabList className="border-0 mb-2 flex items-center font-semibold gap-10 mx-5">
            <Tab>All</Tab>
            <Tab>Custom</Tab>
            <Tab>ICP</Tab>
            <Tab>Mission</Tab>
            <Tab>Product</Tab>
            <button
              onClick={handleClickOpen}
              className="btn-primary ms-auto flex items-center gap-1"
            >
              Add Topic <FaArrowRight />
            </button>
          </TabList>
          <h4 className="text-sm font-semibold mt-4 px-5 py-1 border border-gray-300 bg-gray-200">
            Recommended Topics
          </h4>
          <TabPanel>
            <AllTopics></AllTopics>
          </TabPanel>
          <TabPanel>
            <CustomTopics></CustomTopics>
          </TabPanel>
          <TabPanel>
            <ICPTopics></ICPTopics>
          </TabPanel>
          <TabPanel>
            <MissionTopics></MissionTopics>
          </TabPanel>
          <TabPanel>
            <ProductTopics></ProductTopics>
          </TabPanel>
        </Tabs>
        <style>
          {`
          .react-tabs__tab--selected {
            border:0px;
            border-bottom: 2px solid red;
            color: red;
          }
          `}
        </style>
      </section>
      <AddTopicModal
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      ></AddTopicModal>
    </div>
  );
};

export default Category;
