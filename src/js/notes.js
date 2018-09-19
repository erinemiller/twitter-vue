// COMPUTED PROPERTIES

// let app = new Vue({
//     el: "#app",
//     data: {
//         tweetData: [],
//         hashtag: "#puppies",
//         title: "Dr:",
//         first: "Erin",
//         last: "Miller"
//     },
//     computed: {
//         full: function(){
//             return this.title + " " + this.first + " " + this.last;
//         }
//     }
// })


// in the index just call {{full}}
// app.last change your name thru the app

// Computed vs Watched Property
// WATCHED PROPERTIES

// let app = new Vue({
//     el: "#app",
//     data: {
//         tweetData: [],
//         hashtag: "#puppies",
//         title: "Dr:",
//         first: "Erin",
//         last: "Miller"
//     },
//     watch: {
//         hashtag: function() {
//         console.log("hashtag")
//         }
//     created: function(){
//           this.doTwitterSearch()
//     }
// })

//methods:

