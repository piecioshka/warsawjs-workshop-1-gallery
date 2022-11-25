(function () {

    window.gallery = window.gallery || {};

    class Thumb {
        constructor(url) {
            EventEmitter.mixin(this);

            this.url = url;
        }

        render() {
            const $el = document.createElement('img');
            $el.setAttribute('src', this.url);

            $el.addEventListener('click', () => {
                this.emit('click');
            });

            const $app = document.querySelector('#app');
            $app.append($el);
        }
    }

    window.gallery.Thumb = Thumb;

}());
