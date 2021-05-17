let firebase = require('./firebase')

// /.netlify/functions/create_message?userName=Brian&body=Hello
exports.handler = async function(event) {
  let userName = event.queryStringParameters.userName
  let body = event.queryStringParameters.body

  if (!userName || !body) {
    return {
      statusCode: 400,
      body: `Please provide a userName and a body.`
    }
  } else {
    let db = firebase.firestore()
    await db.collection('messages').add({
      userName: userName,
      body: body,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })

    let messagesQuery = await db.collection('messages').orderBy('created').get()
    let messages = messagesQuery.docs
    let messagesToReturn = []
    for (let i=0; i < messages.length; i++) {
      let message = messages[i].data()
      messagesToReturn.push({
        userName: message.userName,
        body: message.body,
        created: message
      })
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify(messagesToReturn)
    }
  }
}