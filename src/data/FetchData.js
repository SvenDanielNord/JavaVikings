async function searchForThing(thing) {
    const apiUrl = `https://kulturarvsdata.se/ksamsok/api?method=search&version=1.1&hitsPerPage=20&query=itemName=${thing}%20AND%20thumbnailExists=j`;
    //https://kulturarvsdata.se/ksamsok/api?method=search&version=1.1&hitsPerPage=20&query=create_fromTime<=1599 and create_toTime>=1600&query=itemName=${thing}%20AND%20thumbnailExists=j
    let response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json'
      }
    });
    let data = await response.json();
    let records = data.result.records;
    if (records.length > 0) {
      let record = records[Math.floor(Math.random() * records.length)];
      let thumbnailSource = '';
      let desc = '';
      for (const val of record.record['@graph']) {
        if (val.thumbnailSource) {
          thumbnailSource = val.thumbnailSource;
        } else if (val.desc) {
          desc = val.desc;
        }
    }
    const urlAndDescription = {
        url: thumbnailSource,
        description: desc
    }
    
      return urlAndDescription  
    } 
  }

export { searchForThing }