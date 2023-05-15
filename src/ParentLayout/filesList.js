import React, { useState } from 'react';
import '../css/FileList.css';
function FileList(props) {
  const [files, setFiles] = useState([]);
  async function fetchFiles(inputString) {
    const URI = `http://localhost:${process.env.NODE_PORT || 3002}/fetchFiles/${props.inputString}`
    const responses = await fetch(URI);

    const fileValue = await responses.json();
    const data = [];
    let valll = 10;
    let i = 0;
    for (let response of fileValue) {
      const splitted = response.name.split('/')
      data.push(splitted[splitted.length - 1])
      if (i === valll) {
        break;
      }
    }
    setFiles(data);
  }
  React.useEffect(() => {
    fetchFiles(props.inputString);
  }, [props.inputString]);

  return (
    <div className="file-list">
      <div className='file-count'>Total Files := {files.length}
      </div>
      <div className="grid-container">
        {files.map((file, index) => (
          <div key={index} className="grid-item">
            {file}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileList;