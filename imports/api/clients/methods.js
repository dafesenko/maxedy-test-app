import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'

import { ClientsList } from './clients';

Meteor.methods({
    'clientsList.insert'(data) {
      const {name, age} = data;
      console.log('checking', name, age);
      check(name, String);
      check(age, String);
      
      ClientsList.insert({
        name,
        age,
      });
      console.log('ClientsList', ClientsList.find().fetch());
    },
    'clientsList.removeAll'() {
      console.log('removing clients');
      ClientsList.remove({});
    },
  });