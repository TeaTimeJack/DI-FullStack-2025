import React,{ useRef, useState } from 'react'

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    if (inputRef.current) {
      const currentLength = inputRef.current.value.length;
      setCharCount(currentLength);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start typing here..."
        ref={inputRef}
        onChange={handleInputChange}
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter