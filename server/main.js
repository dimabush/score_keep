import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
   /* //inserting new players
   Players.insert({
       name: 'Andrew',
       score: 10
   },{
       name: 'Lauren',
       score: 12
   });*/
   // console.log(Players.find().count());
    // console.log(Players.find().fetch());


    /*let numbers = [9, 99, 4, 56];
     let newNumbers = numbers.map((number) => number += 1);

     console.log(newNumbers);*/

    /*class Person{
        constructor(name = "Anonymous", age = 0){
            this.name = name;
            this.age = age;
        }

        getGreeting(){
            return `Hi! I am ${this.name}`;
        }

        getPersonDescription(){
            return `${this.name} is ${this.age} year(s) old!`;
        }
    }

    class Programmer extends Person{
        constructor(name, age, preferredLanguage = 'assembly'){
            super(name, age);
            this.preferredLanguage = preferredLanguage;
        }

        getGreeting(){
            // if(this.preferredLanguage) {
                return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
            // }else{
            //     super.getGreeting();
            // }
        }
    }

    let firstPerson = new Programmer('Petro', 45);
    console.log(firstPerson.getPersonDescription());
    console.log(firstPerson.getGreeting());

    let secondPerson = new Programmer('Vasya', 25, 'java');
    console.log(secondPerson.getPersonDescription());
    console.log(secondPerson.getGreeting());*/


    /*//showing how to work .bind() method
    let obj = {
        name: 'Andrew',
        printName(){
            console.log(this.name)
        }
    };
    // obj.printName();
    setTimeout(obj.printName.bind(obj), 1000);*/


    /*//ES6 feature: Object Spread Operator & Object Property Shorthand
    let house = {
        bedrooms: 2,
        bathrooms: 1.5
    };
    let yearBuilt = 1995;
    let obj = {
        ...house,
        bedrooms: 3,
        yearBuilt,
        flooring: 'Carpet'
    };
    console.log(obj);*/



});