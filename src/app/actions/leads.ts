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
  