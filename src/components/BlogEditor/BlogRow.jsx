import axios from "axios";
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BlogRow = ({ topic, refetch }) => {
  const { topic_name, keywords, _id } = topic || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_KEY}/topics/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Topic has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center p-4 border border-t-0 border-gray-300">
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold">{topic_name}</h4>
        <div className="flex">
          {keywords.map((keyword, index) => {
            let bgColor;
            let textColor;
            let borderColor;

            if (index % 3 === 0) {
              bgColor = "bg-yellow-100";
              textColor = "text-yellow-500";
              borderColor = "border-yellow-500";
            } else if (index % 3 === 1) {
              bgColor = "bg-green-100";
              textColor = "text-green-500";
              borderColor = "border-green-500";
            } else {
              bgColor = "bg-red-100";
              textColor = "text-red-500";
              borderColor = "border-red-500";
            }

            return (
              <span
                key={index}
                className={`font-semibold inline-block px-2 py-px text-sm mr-2 rounded-lg border-2 ${textColor} , ${bgColor} , ${borderColor}`}
              >
                {keyword}
              </span>
            );
          })}
        </div>
      </div>
      <div className="ms-auto flex items-center gap-3">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded"
        >
          <FaTrashAlt className="text-xl text-white" />
        </button>
        <Link to="/blogEditor" className="btn-primary flex items-center gap-1">
          Write <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogRow;
