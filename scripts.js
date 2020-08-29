new Vue({
    el: '#app',
    data: {
        headerList: [{
            url: 'index.html',
            name: 'home',
        }, {
            url: 'blog.html',
            name: 'blog',
        }, {
            url: 'contact.html',
            name: 'contact',
        }, {
            url: 'social-media.html',
            name: 'social media',
        }],
        firstSection: [{
            title: 'Sincronia',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsa qui. Commodi aliquid veritatis accusantium. Ullam magni odio, error iste fuga enim est sed debitis quasi optio neque adipisci et.',
            img: 'css-scss/assets/img/mediyak.jpg',
            info: 'Luminaria oscura'

        }, {
            title: 'Eden',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsa qui. Commodi aliquid veritatis accusantium. Ullam magni odio, error iste fuga enim est sed debitis quasi optio neque adipisci et.',
            img: 'css-scss/assets/img/pooh.jpg',
            info: 'Pooh'

        }],
        secondSection: [{
            title: 'Sincronia',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsa qui. Commodi aliquid veritatis accusantium. Ullam magni odio, error iste fuga enim est sed debitis quasi optio neque adipisci et.',
            img: 'css-scss/assets/img/yakoni.jpg',
            info: 'Hacia la orilla'
        }, {
            title: 'Condena',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsa qui. Commodi aliquid veritatis accusantium. Ullam magni odio, error iste fuga enim est sed debitis quasi optio neque adipisci et.',
            img: 'css-scss/assets/img/yourname.jpg',
            info: 'your name'
        }]

    },
    components: {
        articles,
        // sectionTwo
    }
})