(function () {

    window.gallery = window.gallery || {};

    class Zoom {

        render(image) {
            const $zoom = document.querySelector('#zoom');
            if ($zoom) {
                $zoom.remove();
            }

            const $div = document.createElement('div');
            $div.setAttribute('id', 'zoom');

            const $el = document.createElement('img');
            $el.setAttribute('src', image);

            $div.append($el);

            const $app = document.querySelector('#app');
            $app.append($div);
        }

    }

    window.gallery.Zoom = Zoom;

}());
