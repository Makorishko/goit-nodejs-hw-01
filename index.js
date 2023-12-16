import { listContacts, getContactById, addContact, removeContact } from './contacts.js';
import yargs from 'yargs';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const listOfContacts = await listContacts();
      return console.log(listOfContacts);
    case 'get':
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case 'add':
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);

    case 'remove':
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
