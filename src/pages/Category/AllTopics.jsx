import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import BlogRow from "../../components/BlogEditor/BlogRow";

const AllTopics = () => {
  const {
    data: topics = [],
    isLoading,
    refetch,
  } = useQuery(["topics"], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_KEY}/topics`);
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

export default AllTopics;
