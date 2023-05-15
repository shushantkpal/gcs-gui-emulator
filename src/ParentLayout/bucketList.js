import React, { useState } from 'react';


function BucketList({ onSelect }) {


  const [bucket, setBucket] = useState([]);
  async function ftechBucket() {

    let data = [];
    const URI = `http://localhost:${process.env.NODE_PORT || 3002}/getBucketList`
    const responses = await fetch(URI);
    const fileValue = await responses.json();
    for (let response of fileValue) {
      data.push(response.bucketname)
    }
    setBucket(data);
  }
  React.useEffect(() => {
    ftechBucket();
  }, []);


  return (
    <div className="list-data">
      <h3 className='bucket-header'>Buckets</h3>
      {bucket.map((item, index) => (
        <div key={index} className="list-item" id={item} onClick={() => onSelect(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default BucketList;