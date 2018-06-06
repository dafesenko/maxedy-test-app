import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Layout } from './layout';
import { DocumentDefinition } from '../documentDefinition/documentDefinition';

Meteor.methods({
    'layoutList.create'(arr) {
        arr.forEach(item => {
            check(item, String)
        });
        
        const layoutDocument = {
            "header": {
                "rows": [
                  {
                    "columns": []
                  }
                ]
              },
              "buttons": ['save', 'delete']
            };
        const idStore = layoutDocument.header.rows[0].columns;
        arr.forEach(id => idStore.push({fieldId: id}));

        if (Layout.find().count() >= 1) {
            Layout.remove({});
        }

        Layout.insert(layoutDocument);
        console.log('count in Layout ', Layout.find().count());
        console.log('Layout', Layout.find().fetch());
    }, 
    'layoutList.insertButton'(buttonName) {
        check(buttonName, String);

        Layout.update({}, { $push: {buttons: buttonName} })
        const res = Layout.find({}, { fields: { buttons: 1 } }).fetch();
        console.log('Button inserted to Layout', res);
    },
    'layoutList.removeAllButtons'() {
        Layout.update({}, { $set: {buttons: []} });
    },
});