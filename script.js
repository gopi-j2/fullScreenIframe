document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.querySelector('iframe');
  const requestFullScreen = (element) => {
    const requestMethods = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'];
    const hasFullScreenApi = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    const requestMethod = requestMethods.find(method => element[method]);

    if (hasFullScreenApi && requestMethod) {
      element[requestMethod]({navigationUI: 'hide'}).catch(err => console.log(err));
    }
  }

  document.addEventListener('click', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop,
        offsetTop = iframe.offsetTop;

    requestFullScreen(iframe);
  })
})
