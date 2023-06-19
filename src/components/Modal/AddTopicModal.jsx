import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddTopicModal({ handleClose, open }) {
  const [selectedOption, setSelectedOption] = useState([]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.category = "Custom";
    data.keywords = selectedOption?.map((value) => value.value);
    axios.post(`${import.meta.env.VITE_API_KEY}/topics`, data).then((data) => {
      if (data.data.acknowledged) {
        Swal.fire("Done!", `Class added successfully`, "success");
        reset();
        handleClose();
      }
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center">Add A Topic!</DialogTitle>
        <DialogContent>
          <form className="w-80 md:w-96" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <h5 className="font-semibold label-text">Topic Name</h5>
              </label>
              <input
                type="text"
                {...register("topic_name")}
                placeholder="Topic name"
                required
                className="border w-full p-2 rounded-md mb-1"
              />
            </div>
            <label className="label">
              <h5 className="font-semibold label-text">Keywords</h5>
            </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              required
              isMulti
            />
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <input
                type="submit"
                value="ADD"
                className="text-blue-600 hover:bg-blue-50 rounded py-1 px-2 cursor-pointer"
              />
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
