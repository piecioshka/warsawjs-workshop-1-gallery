(function () {

    const gallery = window.gallery = window.gallery || {};

    class ThumbList {
        constructor() {
            EventEmitter.mixin(this);

            const $el = document.createElement('div');
            $el.setAttribute('id', 'thumb-list');

            const $app = document.querySelector('#app');
            $app.append($el);
        }

        render(photos) {
            photos.forEach(({ thumb, image }) => {
                const photo = new gallery.Thumb(thumb);
                photo.render();

                photo.on('click', () => {
                    this.emit('click:thumb', { image });
                });
            });
        }
    }

    window.gallery.ThumbList = ThumbList;
}());
