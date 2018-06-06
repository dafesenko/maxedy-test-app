import { Meteor } from 'meteor/meteor';

import { ClientsList } from '../clients';

Meteor.publish('clients', function clientsPublication() {
    return ClientsList.find();
})
