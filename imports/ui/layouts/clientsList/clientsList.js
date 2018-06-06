import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './clientsList.html';
import { ClientsList } from '../../../api/clients/clients';

Template.clientsList.onCreated(function clientsListOnCreated(){
    const handler = Meteor.subscribe('clients');
    let handlerStatus = handler.ready();
});

Template.clientsList.helpers({
    getContactsList(p) {
        if (p) {
            return ClientsList.find().count();    
        }
        return ClientsList.find();
    }
});