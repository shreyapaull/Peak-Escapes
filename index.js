// fetch('https://api.pexels.com/v1/curated?per_page=10', {
//     headers: {
//       Authorization: 'bGdkU2zkd2eowyCkVouma8TUllNldAQ55Z9UNF1FxRwbsWXBUtywA6Be'
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     const imageUrl = data.photos[0].src.original;
//     document.querySelector('img').src = imageUrl;
//   })
//   .catch(error => console.error('Error fetching the image:', error))