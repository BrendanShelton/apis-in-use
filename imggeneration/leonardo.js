// if (quoteId) {
//     const response = await fetch(`/api/saved`, {
//       method: 'POST',
//       body: JSON.stringify({ quote_id: quoteId }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/inspiration');
//     } else {
//       alert('Failed to save quote');
//     }
//   }

function generate() {
    // if (quoteId) {
        const response = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations`, {
          method: 'POST',
          body: JSON.stringify({ quote_id: quoteId }),
          headers: {
            'accept': 'application/json', 
            'authorization': 'Bearer <YOUR_API_KEY>', 
            'content-type': 'application/json',
          },
        });
    
        if (response.ok) {
          //document.location.replace('/inspiration');
        } else {
          alert('Failed to save quote');
        }
    //   }

}