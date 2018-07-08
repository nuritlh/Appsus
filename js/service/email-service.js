import utils from './utils.js';

var emails = null;
if (utils.loadFromStorage('emails')) {
  emails = utils.loadFromStorage('emails');
  removeChecked();
} else {
  emails = [
    {
      id: 12345,
      from: 'bezeq',
      email: 'bezeq_mail@bezeq.co.il',
      title:
        'Dear customer - your account is here and the trees remain in the forest',
      bodtMsg: {
        txt: `This email is sent automatically and can not be answered
        If you are unable to view the invoice, you must download and install Acrobat Reader
        Please note that the invoice is a computerized document signed with an approved electronic signature as defined in the Law
        For an explanation of the octaronic signature click here`,
        imgURL: 'img/email/bezeq.PNG'
      },
      dateSent: '2013-06-09',
      isRead: false,
      isMarked: false
    },
    {
      id: 12346,
      from: 'AIG',
      email: 'service@aig.co.il',
      title: 'Further to your request - Message from AIG',
      bodtMsg: {
        txt: `Hello Shoshi
      Thanks for contacting us.
      Following your request, the documents you have requested are attached.
      For your privacy, the documents are encrypted with a password.
      The password is your mobile phone number, including a prefix and no dash, as you provided to AIG.
      If you are unable to open the files, please contact one of the AIG service representatives at 03-9272300.
      For your convenience, any question or request can be answered by email ("Reply") and AIG representative will be happy to serve you.
       
      Best regards,
      
      AIG`,
        imgURL: 'img/email/AIG.PNG'
      },
      dateSent: '2018-07-05',
      isRead: false,
      isMarked: false
    },
    {
      id: 12347,
      from: 'misterbit',
      email: 'amirf@misterbit.co.il',
      title: 'New Invoice / Receipt 50748 by Mysterbit',
      bodtMsg: {
        txt: `Greetings,
      Payment was received with thanks. To view or download Invoice No. 50748 from Mistrust, please click on the following link:
      Click here to open the document
      A tax invoice / receipt signed electronically in accordance with the provisions of the law and recognized as an original document.
      Best regards,
      Mistrust (amirf@misterbit.co.il)`,
        imgURL: ''
      },
      dateSent: '2017-11-26',
      isRead: true,
      isMarked: false
    },
    {
      id: 123648,
      from: 'Aba',
      email: 'aba@gmail.com',
      title: 'Agreement for the sale of vehicles .pdf',
      bodtMsg: {
        txt: `See patches in the attached bubbles
      https://www.gov.il/en/service/change_vehicle_ownership
      Come back if you want.
      Everything is calm and safe
      father`,
        imgURL: ''
      },
      dateSent: '2018-05-13',
      isRead: false,
      isMarked: false
    },
    {
      id: 12349,
      from: 'Funzing',
      email: 'support@funzing.com',
      title:
        'The details of your invitation to Funzing to "Prof. Yoram Yuval: How to be happy?"',
      bodtMsg: {
        txt: `Hey Shoshi,
      Thank you for inviting in Funzing the "Yoram Yovel: How to be happy?" 
      Activities will take place on Wednesday, 06/13/2018 at 20: 00. 
      You have friends who love the activity? Now it's a great time to share them!
      Important information about activity 
      Activity Address: 301 Abba Hillel Silver, Ramat Gan 
      Arrival instructions:
      `,
        imgURL: 'img/email/Funzing.PNG'
      },
      dateSent: '2017-07-25',
      isRead: true,
      isMarked: false
    },
    {
      id: 13456,
      from: 'bezeq',
      email: 'bezeq_mail@bezeq.co.il',
      title:
        'Dear customer - your account is here and the trees remain in the forest',
      bodtMsg: {
        txt: `This email is sent automatically and can not be answered
        If you are unable to view the invoice, you must download and install Acrobat Reader
        Please note that the invoice is a computerized document signed with an approved electronic signature as defined in the Law
        For an explanation of the octaronic signature click here`,
        imgURL: 'img/email/bezeq.PNG'
      },
      dateSent: '2018-06-01',
      isRead: true,
      isMarked: false
    },
    {
      id: 13345,
      from: 'AIG',
      email: 'service@aig.co.il',
      title: 'Further to your request - Message from AIG',
      bodtMsg: {
        txt: `Hello Shoshi
      Thanks for contacting us.
      Following your request, the documents you have requested are attached.
      For your privacy, the documents are encrypted with a password.
      The password is your mobile phone number, including a prefix and no dash, as you provided to AIG.
      If you are unable to open the files, please contact one of the AIG service representatives at 03-9272300.
      For your convenience, any question or request can be answered by email ("Reply") and AIG representative will be happy to serve you.
       
      Best regards,
      
      AIG`,
        imgURL: 'img/email/AIG.PNG'
      },
      dateSent: '2018-01-15',
      isRead: true,
      isMarked: false
    },
    {
      id: 13335,
      from: 'misterbit',
      email: 'amirf@misterbit.co.il',
      title: 'New Invoice / Receipt 50748 by Mysterbit',
      bodtMsg: {
        txt: `Greetings,
      Payment was received with thanks. To view or download Invoice No. 50748 from Mistrust, please click on the following link:
      Click here to open the document
      A tax invoice / receipt signed electronically in accordance with the provisions of the law and recognized as an original document.
      Best regards,
      Mistrust (amirf@misterbit.co.il)`,
        imgURL: ''
      },
      dateSent: '2018-01-26',
      isRead: true,
      isMarked: false
    },
    {
      id: 11112,
      from: 'Aba',
      email: 'aba@gmail.com',
      title: 'Agreement for the sale of vehicles .pdf',
      bodtMsg: {
        txt: `See patches in the attached bubbles
      https://www.gov.il/en/service/change_vehicle_ownership
      Come back if you want.
      Everything is calm and safe
      father`,
        imgURL: ''
      },
      dateSent: '2018-05-13',
      isRead: true,
      isMarked: false
    },
    {
      id: 12334,
      from: 'Funzing',
      email: 'support@funzing.com',
      title:
        'The details of your invitation to Funzing to "Prof. Yoram Yuval: How to be happy?"',
      bodtMsg: {
        txt: `Hey Shoshi,
      Thank you for inviting in Funzing the "Yoram Yovel: How to be happy?" 
      Activities will take place on Wednesday, 06/13/2018 at 20: 00. 
      You have friends who love the activity? Now it's a great time to share them!
      Important information about activity 
      Activity Address: 301 Abba Hillel Silver, Ramat Gan 
      Arrival instructions:
      `,
        imgURL: 'img/email/Funzing.PNG'
      },
      isRead: true,
      dateSent: '2018-03-23',
      isMarked: false
    },
    {
      id: 23451,
      from: 'bezeq',
      email: 'bezeq_mail@bezeq.co.il',
      title:
        'Dear customer - your account is here and the trees remain in the forest',
      bodtMsg: {
        txt: `This email is sent automatically and can not be answered
        If you are unable to view the invoice, you must download and install Acrobat Reader
        Please note that the invoice is a computerized document signed with an approved electronic signature as defined in the Law
        For an explanation of the octaronic signature click here`,
        imgURL: 'img/email/bezeq.PNG'
      },
      dateSent: '2018-04-19',
      isRead: true,
      isMarked: false
    },
    {
      id: 1253174,
      from: 'AIG',
      email: 'service@aig.co.il',
      title: 'Further to your request - Message from AIG',
      bodtMsg: {
        txt: `Hello Shoshi
      Thanks for contacting us.
      Following your request, the documents you have requested are attached.
      For your privacy, the documents are encrypted with a password.
      The password is your mobile phone number, including a prefix and no dash, as you provided to AIG.
      If you are unable to open the files, please contact one of the AIG service representatives at 03-9272300.
      For your convenience, any question or request can be answered by email ("Reply") and AIG representative will be happy to serve you.
       
      Best regards,
      
      AIG`,
        imgURL: 'img/email/AIG.PNG'
      },
      dateSent: '2017-12-05',
      isRead: true,
      isMarked: false
    },
    {
      id: 1288876,
      from: 'misterbit',
      email: 'amirf@misterbit.co.il',
      title: 'New Invoice / Receipt 50748 by Mysterbit',
      bodtMsg: {
        txt: `Greetings,
      Payment was received with thanks. To view or download Invoice No. 50748 from Mistrust, please click on the following link:
      Click here to open the document
      A tax invoice / receipt signed electronically in accordance with the provisions of the law and recognized as an original document.
      Best regards,
      Mistrust (amirf@misterbit.co.il)`,
        imgURL: ''
      },
      dateSent: '2017-12-26',
      isRead: true,
      isMarked: false
    },
    {
      id: 12875399,
      from: 'Aba',
      email: 'aba@gmail.com',
      title: 'Agreement for the sale of vehicles .pdf',
      bodtMsg: {
        txt: `See patches in the attached bubbles
      https://www.gov.il/en/service/change_vehicle_ownership
      Come back if you want.
      Everything is calm and safe
      father`,
        imgURL: ''
      },
      dateSent: '2017-12-13',
      isRead: true,
      isMarked: false
    },
    {
      id: 1200076,
      from: 'Funzing',
      email: 'support@funzing.com',
      title:
        'The details of your invitation to Funzing to "Prof. Yoram Yuval: How to be happy?"',
      bodtMsg: {
        txt: `Hey Shoshi,
      Thank you for inviting in Funzing the "Yoram Yovel: How to be happy?" 
      Activities will take place on Wednesday, 06/13/2018 at 20: 00. 
      You have friends who love the activity? Now it's a great time to share them!
      Important information about activity 
      Activity Address: 301 Abba Hillel Silver, Ramat Gan 
      Arrival instructions:
      `,
        imgURL: 'img/email/Funzing.PNG'
      },
      dateSent: '2016-06-23',
      isRead: true,
      isMarked: false
    }
  ];
  utils.saveToStorage('emails', emails);
}

var sentEmails = [];
if (utils.loadFromStorage('sentEmails'))
  sentEmails = utils.loadFromStorage('sentEmails');

var draftsEmails = [];
if (utils.loadFromStorage('draftsEmails'))
  draftsEmails = utils.loadFromStorage('draftsEmails');

var checkedEmails = [];

function removeChecked() {
  emails.forEach(email => {
    email.isMarked = false;
  });
  checkedEmails = [];
}
function query(searchEmail) {
  return Promise.resolve(emails).then(res => {
    var emails = res;
    if (!searchEmail) return emails;
    var emails = emails.filter(email => {
      return (
        email.from.toLowerCase().includes(searchEmail.toLowerCase()) ||
        email.email.toLowerCase().includes(searchEmail.toLowerCase()) ||
        email.title.toLowerCase().includes(searchEmail.toLowerCase())
      );
    });

    return emails;
  });
}
function gatSentEmails() {
  return Promise.resolve(sentEmails);
}

function getEmailByID(emailId) {
  var email = emails.find(email => email.id === emailId);
  return Promise.resolve(email);
}
function deleteEmail(emailId) {
  var emailIdx = emails.findIndex(email => email.id === emailId);
  emails.splice(emailIdx, 1);
  utils.saveToStorage('emails', emails);
  return Promise.resolve('deleted!');
}
function updateMark(mailId) {
  emails.forEach(email => {
    if (email.id === mailId) {
      email.isMarked = !email.isMarked;
      if (email.isMarked) {
        var isCheked = checkedEmails.find(id => id === email.id);
        if (isCheked === undefined) checkedEmails.push(email.id);
      } else {
        var isChekedidx = checkedEmails.findIndex(id => id === email.id);
        if (isChekedidx !== -1) checkedEmails.splice(isChekedidx, 1);
      }
    }
  });
  console.log(checkedEmails);
}
function deleteMarkedEmails() {
  checkedEmails.forEach(emailId => {
    emails.forEach((email, idx) => {
      if (emailId === email.id) {
        emails.splice(idx, 1);
      }
    });
  });
  utils.saveToStorage('emails', emails);
}
function saveSentEmails(newMail) {
  var name = newMail.email.substr(0, newMail.email.indexOf('@'));
  var newEMail = {
    id: Date.now(),
    from: name,
    email: newMail.email,
    title: newMail.title,
    bodtMsg: {
      txt: newMail.bodtMsg.txt ? newMail.bodtMsg.txt : '',
      imgURL: newMail.bodtMsg.imgURL
    },
    dateSent: utils.getCurrDate(),
    isRead: false,
    isMarked: false
  };
  sentEmails.unshift(newEMail);
  utils.saveToStorage('sentEmails', sentEmails);
  var sentEmailidx = draftsEmails.findIndex(email => {
    email.id === newMail.id;
    draftsEmails.splice(sentEmailidx, 1);
    utils.saveToStorage('draftsEmails', draftsEmails);
  });

  return Promise.resolve(sentEmails);
}
function getUnreadEmails() {
  var unreadEmails = emails.filter(email => {
    return email.isRead === false;
  });

  return Promise.resolve(unreadEmails);
}
function getTotalMailsNum() {
  return Promise.resolve(emails.length);
}
function updateUnreadEmail(emailId) {
  if (emailId) {
    emails.forEach(email => {
      if (email.id === emailId) email.isRead = !email.isRead;
    });
  } else {
    checkedEmails.forEach(id => {
      emails.forEach(email => {
        if (id === email.id) {
          email.isRead = false;
        }
      });
    });
  }
  utils.saveToStorage('emails', emails);
  return Promise.resolve();
}
function updatedReadEmail() {
  checkedEmails.forEach(id => {
    emails.forEach(email => {
      if (id === email.id) {
        email.isRead = true;
      }
    });
  });

  utils.saveToStorage('emails', emails);
  return Promise.resolve();
}
function filterBy(filter) {
  return Promise.resolve(emails).then(res => {
    var emails = res;
    if (filter === 'all') return emails;
    var emails = emails.filter(email => {
      if (filter === 'read') {
        return email.isRead === true;
      } else if (filter === 'unread') {
        return email.isRead === false;
      }
    });

    return emails;
  });
}
function sortBy(sort) {
  if (sort === 'date') {
    emails.sort(function(a, b) {
      return a.dateSent < b.dateSent ? 1 : b.dateSent < a.dateSent ? -1 : 0;
    });
  } else if (sort === 'subject') {
    emails.sort(function(a, b) {
      return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
    });
  }
  return Promise.resolve(emails);
}
function saveToDrafts(draftEmail) {
  var draft = {
    id: draftEmail.id ? draftEmail.id : Date.now(),
    from: draftEmail.email,
    email: draftEmail.email,
    title: draftEmail.title,
    bodtMsg: {
      txt: draftEmail.bodtMsg.txt ? draftEmail.bodtMsg.txt : '',
      imgURL: draftEmail.bodtMsg.imgURL
    },
    dateSent: utils.getCurrDate(),
    isRead: false,
    isMarked: false
  };
  var draftIdx = draftsEmails.findIndex(draft => draft.id === draftEmail.id);
  draftIdx === -1
    ? draftsEmails.unshift(draft)
    : (draftsEmails[draftIdx] = draft);

  utils.saveToStorage('draftsEmails', draftsEmails);
  console.log('draftsEmails', draftsEmails);

  return Promise.resolve(draft);
}
function gatDraftsEmails() {
  console.log(draftsEmails);

  return Promise.resolve(draftsEmails);
}

//send mail to noteApp
function createEmailFromNote(note) {
  var email = {
    id: Date.now(),
    from: 'me',
    email: 'me@me.com',
    title: note.titelNote,
    dateSent: utils.getCurrDate(),
    isRead: false,
    isMarked: false
  };

  if (!note.todosItem) {
    email.bodtMsg = {
      txt: note.noteTxt ? note.noteTxt : '',
      imgURL: note.url
    };
  } else {
    var str = ``;
    note.todosItem.forEach(todo => {
      var idDone = todo.isChecked ? 'Done' : 'In Process';

      str += todo.todoTitle + ' ' + idDone + ',';
    });
    email.bodtMsg = {
      txt: str,
      imgURL: note.url
    };
  }
  emails.unshift(email);
  utils.saveToStorage('emails', emails);
}

export default {
  query,
  gatSentEmails,
  getEmailByID,
  deleteEmail,
  updateMark,
  deleteMarkedEmails,
  saveSentEmails,
  getUnreadEmails,
  getTotalMailsNum,
  updateUnreadEmail,
  filterBy,
  sortBy,
  updatedReadEmail,
  removeChecked,
  saveToDrafts,
  gatDraftsEmails,
  createEmailFromNote
};
