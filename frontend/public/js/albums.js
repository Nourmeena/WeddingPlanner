function loadAlbum(albumPath, imageCount) {
    const gallery = document.querySelector('.album-gallery');
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${albumPath}/img${i}.jpg`; // Assuming the images are named img1.jpg, img2.jpg, etc.
        gallery.appendChild(img);
    }
}

// Call the function for each album
loadAlbum('/img/album1', 10); // Load 10 images from album1
loadAlbum('/img/album2', 5);  // Load 5 images from album2
