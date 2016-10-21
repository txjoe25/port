// // angular.module('ngRepeat', ['ngAnimate']).controller('factoryController', function($scope) {
// //   $scope.friends = [
// //     {name:'John', age:25, gender:'boy'},
// //     {name:'Jessie', age:30, gender:'girl'},
// //     {name:'Johanna', age:28, gender:'girl'},
// //     {name:'Joy', age:15, gender:'girl'},
// //     {name:'Mary', age:28, gender:'girl'},
// //     {name:'Peter', age:95, gender:'boy'},
// //     {name:'Sebastian', age:50, gender:'boy'},
// //     {name:'Erika', age:27, gender:'girl'},
// //     {name:'Patrick', age:40, gender:'boy'},
// //     {name:'Samantha', age:60, gender:'girl'}
// //   ];
// // });
// // 2. This code loads the IFrame Player API code asynchronously.
//       var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '690',
//           width: '1280',
//           videoId: 'M7lc1UVf-VE',
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }

//       // 4. The API will call this function when the video player is ready.
//       function onPlayerReady(event) {
//         event.target.playVideo();
//       }

//       // 5. The API calls this function when the player's state changes.
//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }

// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }