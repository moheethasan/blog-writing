import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import BlogRow from "../../components/BlogEditor/BlogRow";

const MissionTopics = () => {
  const {
    data: topics = [],
    isLoading,
    refetch,
  } = useQuery(["topics"], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_KEY}/topics?category=Mission`
    );
    return res.json();
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      {topics?.map((topic) => (
        <BlogRow key={topic._id} topic={topic} refetch={refetch}></BlogRow>
      ))}
    </>
  );
};

export default MissionTopics;
