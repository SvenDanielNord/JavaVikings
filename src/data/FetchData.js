async function searchForThing(thing) {
    const apiUrl = `https://kulturarvsdata.se/ksamsok/api?method=search&version=1.1&hitsPerPage=20&query=itemName=${thing}%20AND%20thumbnailExists=j`;
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




//   // Call searchForThing for each thing and return a Promise
//   function loadImages() {
//     const things = ['mössa', 'tröja', 'byxor', 'skor', 'svärd', 'sköld'];
//     const promises = things.map(thing => {
//       return searchForThing(thing, `${thing}-img`);
//     });
//     return Promise.all(promises);
//   }
  
//   // Call loadImages and show the images when all promises are resolved
//   window.onload = function() {
//     loadImages().then(() => {
//       document.querySelector('.loader').style.display = 'none';
//       document.querySelector('.gallery').style.display = 'flex';
//     });
//   };
  
//   // Add click event listener to each image to fetch a new random image
//   const imgs = document.querySelectorAll('img');
//   imgs.forEach(img => {
//     img.addEventListener('click', function() {
//       const thing = img.id.split('-')[0];
//       searchForThing(thing, img.id);
//     });
//   });