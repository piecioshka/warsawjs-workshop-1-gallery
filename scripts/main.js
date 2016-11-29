const GALLERY_SELECTOR = '.gallery';
const DISPLAY_CONTAINER_SELECTOR = '.display-area';

const ESCAPE_CODE = 27;
const LEFT_CODE = 37;
const RIGHT_CODE = 39;

function buildImage(url) {
    let $image = document.createElement('img');
    $image.setAttribute('src', url);
    return $image;
}

class Gallery {
    constructor() {
        console.log('Gallery was setup');
        this.$gallery = document.querySelector(GALLERY_SELECTOR);
    }

    start(displayArea) {
        this.$gallery.addEventListener('click', (evt) => {
            let $image = evt.target;
            displayArea.display($image);
            evt.preventDefault();
        });

        document.addEventListener('keydown', (evt) => {
            switch (evt.keyCode) {
                case ESCAPE_CODE:
                    displayArea.destroy();
                    break;

                case LEFT_CODE:
                    displayArea.displayPrevPicture();
                    break;

                case RIGHT_CODE:
                    displayArea.displayNextPicture();
                    break;
            }
        })
    }
}

class DisplayArea {
    constructor() {
        console.log('DisplayArea was setup');
        this.$area = document.querySelector(DISPLAY_CONTAINER_SELECTOR);
        this.$main = this.$area.parentNode;
        this.$current = null;
        this._setupArrows();
    }

    display($thumb) {
        this.$current = $thumb;

        // let thumbSource = $thumb.getAttribute('src');
        let $link = $thumb.parentNode;
        let fullSource = $link.getAttribute('href');

        let $image = buildImage(fullSource);

        this._show();
        this._clear();
        this._render($image);
    }

    displayPrevPicture() {
        let $link = this.$current.parentNode;
        let $li = $link.parentNode;
        let $prevLi = $li.previousElementSibling;

        if (!$prevLi) {
            $prevLi = $li.parentNode.lastElementChild;
        }

        let $prevImage = $prevLi.querySelector('img');
        this.display($prevImage);
    }

    displayNextPicture() {
        let $link = this.$current.parentNode;
        let $li = $link.parentNode;
        let $nextLi = $li.nextElementSibling;

        if (!$nextLi) {
            $nextLi = $li.parentNode.firstElementChild;
        }

        let $nextImage = $nextLi.querySelector('img');
        this.display($nextImage);
    }

    destroy() {
        this._hide();
        this._clear();
    }

    _setupArrows() {
        console.log('_setupArrows');
        this.$main.querySelector('.left-arrow').addEventListener('click', () => {
            this.displayPrevPicture();
        });
        this.$main.querySelector('.right-arrow').addEventListener('click', () => {
            this.displayNextPicture();
        });
    }

    _clear() {
        this.$area.innerHTML = '';
    }

    _render($image) {
        this.$area.appendChild($image);
    }

    _show() {
        this.$main.classList.remove('hide');
    }

    _hide() {
        this.$main.classList.add('hide');
    }
}

function bootstrap() {
    let displayArea = new DisplayArea();
    let gallery = new Gallery();
    gallery.start(displayArea);
}

window.addEventListener('DOMContentLoaded', bootstrap);
