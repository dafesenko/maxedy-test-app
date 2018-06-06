import { Template } from 'meteor/templating';

import './ddForm.html';

Template.ddForm.helpers({

});

Template.ddForm.events({
    'click .add-dd'(e) {
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
   'click .remove-all-dd'() {
        Meteor.call('ddList.removeAll');
        console.log('all dd are removed');
   },
});




