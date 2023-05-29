async function getLocation() {
    const apiUrl = `https://kulturarvsdata.se/ksamso/api?method=search&query=geoDataExists=j&hitsPerPage=20`
    let response = await fetch(apiUrl, {
        headers: {
            Accept: 'application/json'
        }
    });
    if (!response.status.ok) {
        readErrorResponseAPI(response)
    }
    let data = await response.json();
    let records = data.result.records
    return getRecords(records)
}

function readErrorResponseAPI(resp) {
    if (resp.status >= 500) {
      throw new Error("Something is wrong with the server");
    } else if (resp.status >= 400) {
      throw new Error("Samsök is not responding");
    }
  }

function getRecords(records) {
    if (records.length > 0) {
        let record = records[Math.floor(Math.random() * records.length)]
        let location = ''
        for (const val of record.record['@graph']) {
            if (val.placeName) {
                location = val.placeName
            }
        }
        return location
    }
}

export { getLocation }