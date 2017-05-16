const user = "2cool4u123@gmail.com";

class Message {
  constructor(from = user, to = "", subject = "", body = ""){
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messages = JSON.parse(localStorage.getItem('messages'));
let messageDraft = new Message();

if(!messages){
  messages = {
    sent: [
      {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
      {to: "person@mail.com", subject: "Questionaire", body: "Take this free quiz win $1000 dollars"}
    ]
  };
}

const MessageStore = {
  getInboxMessages(){
    return messages.inbox.slice();
  },
  getInboxMessages(){
    return messages.sent.slice();
  },
  getMessageDraft(){
    return messageDraft;
  },
  sendDraft(){
    messages.sent.push(messageDraft);
    messageDraft = new Message();
    localStorage.setItem('messages', JSON.stringify(messages));
  },
  updateDraftField(field, value){
    messageDraft[field] = value;
  }
};

module.exports = MessageStore;
