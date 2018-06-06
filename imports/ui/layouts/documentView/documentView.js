import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Layout } from '../../../api/layout/layout';
import { DocumentDefinition } from '../../../api/documentDefinition/documentDefinition'
import './documentView.html';

// Template.documentView.onCreated(function documentViewOnCreated(){
//     const handler = Meteor.subscribe('DocumentList');
//     let handlerStatus = handler.ready();
//     console.log(`DocumentList subscription is ready ${handlerStatus}`);
// });

Template.documentView.helpers({
    getView(p) {
        if (p) {
            return View.find().count();    
        }
        return View.findOne();
    },
    getLabel() {
        const res =  View.findOne();
        console.log('getLabel', res.header.rows[0].columns);
        return res.header.rows[0].columns;
    }
});

const View = new Mongo.Collection(null);

function getDocumentDefinitionById(id) {
    return DocumentDefinition.findOne({_id: id});
}

Template.documentView.events({
    'click .create-document'() {
        const layout = Layout.findOne();
        const idStore = layout.header.rows[0].columns;

        if (View.find().count() === 1) {
            View.remove({});
        }

        idStore.forEach((item, index) => layout.header.rows[0].columns[index] = getDocumentDefinitionById(item.fieldId));
        
        View.insert(layout);

        console.log('Layout', layout);
        console.log('View', View.find().fetch());

    },
    'click .btn-save'(e) {
        e.preventDefault();

        let nameInput = document.getElementById("client-name-field");
        let ageInput = document.getElementById("client-age-field");

        const dataObj = {
            name: nameInput.value,
            age: ageInput.value,
        };
        
        Meteor.call('clientsList.insert', dataObj, (error) => {
            if (error) {
                alert(error);
            } else {
                nameInput.value = '';
                ageInput.value = '';
            }
        });
    },
    'click .btn-delete'() {
        Meteor.call('clientsList.removeAll');
    }
});