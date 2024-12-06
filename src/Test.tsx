import React, { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const handleTagRemove = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div style={{display:"flex"}}>
      {tags.map((tag, index) => (
        <div className="tag" key={index}
        style={{
            backgroundColor: "red",
          }}>
          {tag}
          <span className="remove-tag" onClick={() => handleTagRemove(index)}>
            &times;
          </span>
        </div>
      ))}
      <input      
        type="text"
        className="tag-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type and press Enter..."
      />
    </div>
  );
};

export default TagInput;
