import { useState, useRef } from "react";
import "react-image-crop/dist/ReactCrop.css";

const BlogEditor = () => {
  const [blogText, setBlogText] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [generatedBlog, setGeneratedBlog] = useState("");
  const textAreaRef = useRef(null);

  const handleBlogTextChange = (event) => {
    setBlogText(event.target.value);
  };

  const handleToneSelection = (event) => {
    setSelectedTone(event.target.value);
  };

  const handleGenerateClick = () => {
    const generatedBlog = `Tone: ${selectedTone}\n\n${blogText}`;
    console.log(generatedBlog);
    setGeneratedBlog(generatedBlog);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg">
      <div>
        <label htmlFor="toneSelector" className="block font-bold mb-2">
          Select Tone:
        </label>
        <select
          id="toneSelector"
          value={selectedTone}
          onChange={handleToneSelection}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Choose a tone</option>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Friendly">Friendly</option>
        </select>
      </div>

      <div className="mt-4">
        <textarea
          ref={textAreaRef}
          value={blogText}
          onChange={handleBlogTextChange}
          rows={10}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handleGenerateClick}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Generate
        </button>
      </div>
      {generatedBlog && (
        <div className="mt-4 p-4 bg-gray-100">
          <h2 className="text-lg font-bold mb-2">Generated Blog:</h2>
          <pre>{generatedBlog}</pre>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
