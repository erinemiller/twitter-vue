Vue.component('hashtag-input', {
    props: [
        "default-hashtag"
    ],
    data: function () {
        return {
            enteredHashtag: this.defaultHashtag
        }
    },
    watch: {
        enteredHashtag: function() {
            console.log("enteredHashtag has changed!")

            // user dleted the # first character, so force is back on there
            if ( this.enteredHashtag[0] != "#") {
                this.enteredHashtag = "#" + this.enteredHashtag;
            }

            // user entered a hashtag that too short so dont send the event
            if (this.enteredHashtag.length < 4){
                return
            }

            this.$emit("usertypeshashtag", this.enteredHashtag)
        }
    },
    template: `
        <div>
            <input name="hashtag" type="text" v-model="enteredHashtag" v-bind:value="defaultHashtag">
            <button>GO</button>
        </div>
    `
  //has to be wrapped in single element, even if its just a div
})
