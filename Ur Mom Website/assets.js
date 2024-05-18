document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const playButtons = document.querySelectorAll(".playButt"); // New line
  const videoModal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close");
  const videoFrame = document.getElementById("videoFrame");
  const headerWrapper = document.getElementById("headerWrapperHome");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-video");
      openVideoModal(videoUrl);
    });
  });

  playButtons.forEach((playButton) => { // New block
    playButton.addEventListener("click", function () {
      const videoUrl = this.parentElement.querySelector(".thumbnail").getAttribute("data-video");
      openVideoModal(videoUrl);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  videoModal.addEventListener("click", closeModal);

  function openVideoModal(videoUrl) { // New block
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      videoFrame.setAttribute("src", iframeSrc);
      videoModal.style.display = "flex";
    } else {
      console.error("Invalid YouTube video URL");
    }
  }

  function closeModal() {
    videoModal.style.display = "none";
    videoFrame.setAttribute("src", "");
  }

  function extractVideoId(videoUrl) {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(regex);
    return match ? match[1] : null;
  }
});


window.addEventListener('load', function() {
  function updateVideoSize() {
      var screenWidth = window.innerWidth;
      var video = document.getElementById('videoFrame');
      if(screenWidth <= 600) {
        video.width = '320';
        video.height - '200';
      }
      else if (screenWidth <= 900) {
          video.width = '560';
          video.height = '315';
      } else {
          video.width = '840';
          video.height = '472';
      }
  }
  updateVideoSize();
  window.addEventListener('resize', updateVideoSize);
});







