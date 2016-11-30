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
        this.$gallery = document.querySelector(GALLERY_SELECTOR);
    }

    start(displayArea) {
        this._setupClick(displayArea);
        this._setupShortcuts(displayArea);
    }

    _setupClick(displayArea) {
        this.$gallery.addEventListener('click', (evt) => {
            let $image = evt.target;
            displayArea.display($image);
            evt.preventDefault();
        });
    }

    _setupShortcuts(displayArea) {
        document.addEventListener('keydown', (evt) => {
            switch (evt.keyCode) {
                case ESCAPE_CODE:
                    displayArea.destroyContainer();
                    break;

                case LEFT_CODE:
                    displayArea.displayPrevPicture();
                    break;

                case RIGHT_CODE:
                    displayArea.displayNextPicture();
                    break;
            }
        });
    }
}

class DisplayArea {
    constructor() {
        this.$area = document.querySelector(DISPLAY_CONTAINER_SELECTOR);
        this.$main = this.$area.parentNode;
        this.$current = null;
        this._setupArrows();
    }

    display($thumb) {
        this.$current = $thumb;

        let $link = $thumb.parentNode;
        let fullSource = $link.getAttribute('href');

        let $image = buildImage(fullSource);

        this.$main.classList.remove('hide');
        this._clearContainer();
        this.$area.appendChild($image);
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

    destroyContainer() {
        this.$main.classList.add('hide');
        this._clearContainer();
    }

    _clearContainer() {
        this.$area.innerHTML = '';
    }

    _setupArrows() {
        let $leftArrow = this.$main.querySelector('.left-arrow');
        let $rightArrow = this.$main.querySelector('.right-arrow');

        $leftArrow.addEventListener('click', (evt) => {
            this.displayPrevPicture();
            evt.preventDefault();
        });

        $rightArrow.addEventListener('click', (evt) => {
            this.displayNextPicture();
            evt.preventDefault();
        });
    }
}

function bootstrap() {
    let displayArea = new DisplayArea();
    let gallery = new Gallery();
    gallery.start(displayArea);
}

window.addEventListener('DOMContentLoaded', bootstrap);
