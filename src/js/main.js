const TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";

let app = new Vue({
    el: "#app",
    data: {
        tweetData: [],
        hashtag: "#puppies",
    },
    watch: {
        hashtag: function() {
        console.log("hashtag")
        this.doTwitterSearch()
        }
    },
    created: function(){
          this.doTwitterSearch()
        }
    },
    methods: {
       newHashtagReceievedFromChildComponent: function() {
           console.log("new hastag recieved from child component!")
           this.hashtag = newHashtag;
    },
       doTwitterSearch: function(){
       console.log("this.hashtag", this.hashtag)
       axios
            .get(TWITTER_SEARCH_URL + encodeURIComponent(this.hashtag))
            .then((response) => {
                this.tweetData = response.data.statuses;
        })
        .catch((error)) => {
            console.warn("aww snap", error)
        }

})
    