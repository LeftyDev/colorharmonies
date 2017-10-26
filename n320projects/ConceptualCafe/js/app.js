/**
 * Created by Brian on 9/28/2017.
 */

Vue.component("customer", {
    template: "#customerTemplate",
    //initiate return data
    data: function () {
        return {
        }
    },
    methods: {
        choice: function(customerChoice) {
            this.customerChoice = customerChoice;

            if (this.customerChoice == "dripBrew") {
                //you ***CAN'T*** emit camelCased strings
                //what you emit is used in your <customer> tag following v-on...i.e. <customer v-on:drip="makeDrip"></customer>;
                //makeDrip from <customer v-on:drip="makeDrip"></customer> is then sent down to line 58 to be used AS the app's methods!
                this.$emit("drip");
            }

            if (this.customerChoice == "frenchPress") {
                //you ***CAN'T*** emit camelCased strings
                this.$emit("french");
            }

            if (this.customerChoice == "aeroPress") {
                //you ***CAN'T*** emit camelCased strings
                this.$emit("aero");
            }
        }
    }
});

var barista = Vue.component("barista", {
    template: "#baristaTemplate",
    data: function() {
        return {
            customerChoice: "",
            baristaPrompt: "How may I help you today?"
        }
    },
    props:[ "choice" ],
    watch: {
        choice: function(choice) {
            this.choice = choice;

            if (this.choice == "App now knows you ordered drip.") {
                this.customerChoice = "Barista now knows you ordered drip."
            }
            if (this.choice == "App now knows you ordered french press.") {
                this.customerChoice = "Barista now knows you ordered french press."
            }
            if (this.choice == "App now knows you ordered aeropress.") {
                this.customerChoice = "Barista now knows you ordered aeropress."
            }
        }
    }
});

Vue.component("coffeeMachine", {
    template: "#machineTemplate"
});


new Vue({
    el: "#app",
    data: function() {
        alert("App is working.");
        //initiate return data
        return {
            choice: "nothing"
        }
    },
    methods: {
        makeDrip: function () {
            this.choice = "App now knows you ordered drip.";
            alert(this.choice);
            //now we need to send this data to the barista
        },
        makeFrench: function () {
            this.choice = "App now knows you ordered french press.";
            alert(this.choice);
            //now we need to send this data to the barista
        },
        makeAero: function () {
            this.choice = "App now knows you ordered aeropress.";
            alert(this.choice);
            //now we need to send this data to the barista
        }
    }
});