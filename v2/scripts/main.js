let $zoom = document.querySelector('.zoom');
let $images = document.querySelectorAll('img');
let imagesCollection = Array.from($images);

imagesCollection.forEach(($image) => {
    $image.addEventListener('click', (evt) => {
        evt.preventDefault();
        $zoom.innerHTML = '';

        let link = $image.parentNode.href;
        let $img = document.createElement('img');
        $img.src = link;

        $zoom.appendChild($img);
    });
});
