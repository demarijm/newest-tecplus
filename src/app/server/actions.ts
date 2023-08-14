'use server'

export async function handleNewsletter(formData) {
    'use server'
    console.log('formData', formData)
    // Extract necessary data from formData
    const email = formData.get('email') // Include other properties as needed
  
    // Check for required parameters
    if (!email) {
      console.error("Email is required.");
      return;
    }
  
    // Construct the URL for SendFox
    const url = 'https://api.sendfox.com/contacts';
  
    // Prepare the request body
    const body = {
      email: email,
      lists: ['440109']
    };
  
    // Prepare the headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SENDFOX_API_KEY}`, // Replace with your token
    };
  
    // Make the POST request
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
  
    // Handle the response
    const jsonResponse = await res.json();
    if (res.ok) {
      console.log('Contact created successfully:', jsonResponse);
    } else {
      console.error('An error occurred:', jsonResponse);
    }
  }