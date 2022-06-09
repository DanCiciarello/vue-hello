const appVue = new Vue ({
    el: "#appVue",

    // Vue Data
    data: {
        pageTitle: "Hello Vue.js!",
        titleClass: "text-center pt-5",
        imageUrl: "https://picsum.photos/1200/800",
        imageClass: "py-5 d-flex justify-content-center",
        inputText: "",
        resultText: "",
        resultTextClass: "",
    },
    methods: {
        generate: function(){
            this.resultTextClass = "text-success"
            this.resultText = this.inputText;
        },
    }
});