import { Template } from 'meteor/templating';

import './layoutForm.html';

Template.layoutForm.helpers({

});

Template.layoutForm.events({
    'click .create-layout'(e) {
        //  Meteor.call('ddList.removeAll');
        e.preventDefault();
        const ddIDsArr = Array.from(document.querySelectorAll('.dd-item-id'));
        const ddIDsText = ddIDsArr.map(id => id.textContent);
        console.log('Creating layout with fields',ddIDsText);
        Meteor.call('layoutList.create', ddIDsText, (error) => {
            if (error) {
                alert(error);
            } else {
                console.log('layoutList.create method called')
            }
        });
    },
    'click .add-layout'(e) {
        e.preventDefault();

        const labelInput = document.getElementById("dd-label");
        const nameInput = document.getElementById("dd-name");
        const typeInput = document.getElementById("dd-type");

        const dataObj = {
            label: labelInput.value,
            name: nameInput.value,
            type: typeInput.value,
        };
        
        Meteor.call('ddList.insert', dataObj, (error) => {
            if (error) {
                alert(error);
            } else {
                labelInput.value = '';
                nameInput.value = '';
                typeInput.value = '';
            }
        });

   },
});
