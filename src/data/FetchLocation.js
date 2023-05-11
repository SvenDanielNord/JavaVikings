async function getLocation() {
    const apiUrl = `https://kulturarvsdata.se/ksamsok/api?method=search&query=geoDataExists=j&hitsPerPage=20`
    let response = await fetch(apiUrl, {
        headers: {
            Accept: 'application/json'
        }
    });
    let data = await response.json();
    let records = data.result.records
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