import { slack } from "@/lib/slack"

export async function leadSubmitted(formData: FormData) {
    'use server'
    const budget = formData.get('budget')
    const companyName = formData.get('company')
    const message = formData.get('message')
    const email = formData.get('email')
    const phone = formData.get('phone')
  
    const channel = "cro-lead-magnet"
  
    
  
    try {
      // Call the chat.postMessage method using the built-in WebClient
      const result = await slack.chat.postMessage({
        // The token you used to initialize your app
        token: process.env.SLACK_AUTH_TOKEN,
        channel: channel,
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `New Lead from ${channel},
              \n\n *Requested Page:* contact page
              \n\n *Company Name:* ${companyName}
              \n\n *Email:* ${email}
              \n\n *Phone:* ${phone}
              \n\n *Budget:* ${budget}
              \n\n *Message:* ${message}
              `
            }
          }
  
        ]
      });
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  
  
  }
  
  export async function leadSubmittedFree(formData) {
    'use server'
    const reqeustedPage = formData.get('requested-page')
    const companyName = formData.get('company-name')
    const message = formData.get('message')
    const email = formData.get('email')
  
    const responses = {
      'requested-page': reqeustedPage,
      'company-name': companyName,
      'message': message,
      'email': email
    }
    
  
    console.log('message', message)
    console.log('requested-page', reqeustedPage)
    console.log('company-name', companyName)
    console.log('email', email)
  
    const channel = "cro-lead-magnet"
  
    try {
      // Call the chat.postMessage method using the built-in WebClient
      const result = await slack.chat.postMessage({
        // The token you used to initialize your app
        token: process.env.SLACK_AUTH_TOKEN,
        channel: channel,
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `New Lead from ${channel},
              \n\n *Requested Page:* ${reqeustedPage}
              \n\n *Company Name:* ${companyName}
              \n\n *Email:* ${email}
              \n\n *Message:* ${message}
              `
            }
          }
  
        ]
        // You could also use a blocks[] array to send richer content
      });
  
      // Print result, which includes information about the message (like TS)
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  
  
  }