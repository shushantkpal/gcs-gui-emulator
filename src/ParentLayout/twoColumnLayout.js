import React, { useState } from "react";
import '../css/twoColumn.css';
import '../css/listData.css'
import BucketList from "./bucketList";
import FileList from "./filesList";
import Header from "./header";


function TwoColumnLayout() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileSelect(file) {
    setSelectedFile(file);
  }


  return (
    <div className="two-column-layout">
      <div className="left-column column">

        <BucketList onSelect={handleFileSelect} />


      </div>
      <div className="right-column column">
        {selectedFile && <FileList inputString={selectedFile} />}
      </div>
    </div>
  );
}

export default TwoColumnLayout;