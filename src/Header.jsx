import React, { useState } from 'react';

// Define a recursive Folder component
const Folder = ({ folder, onFolderClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      onFolderClick(folder);
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <strong onClick={toggleFolder} style={{ cursor: 'pointer' }}>
        {folder.name}
      </strong>
      {isOpen && (
        <ul>
          {folder.children.map((item, index) => (
            <li key={index}>
              {item.type === 'folder' ? (
                <Folder folder={item} onFolderClick={onFolderClick} />
              ) : (
                <File file={item} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define a File component
const File = ({ file }) => (
  <div style={{ marginLeft: '20px' }}>
    <em>{file.name}</em>
  </div>
);

// Define the main component
const App = () => {
  // Sample folder structure
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
  };

  return (
    <div>
      <h2>Main Folder</h2>
      <Folder folder={folders} onFolderClick={handleFolderClick} />
    </div>
  );
};

// Sample folder structure
const folders = {
  name: 'Main Folder',
  children: [
    {
      type: 'folder',
      name: 'Subfolder 1',
      children: [
        { type: 'file', name: 'File 1-1.txt' },
        { type: 'file', name: 'File 1-2.txt' },
      ],
    },
    {
      type: 'folder',
      name: 'Subfolder 2',
      children: [
        { type: 'file', name: 'File 2-1.txt' },
        { type: 'folder', name: 'Subfolder 2-1', children: [{ type: 'file', name: 'File 2-1-1.txt' }] },
      ],
    },
  ],
};

export default App;
