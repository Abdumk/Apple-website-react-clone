import React,{useEffect, useState} from 'react'
import './Youtube.css'



function YoutubeVideos() {

  const [youTubeVideos, setVideo] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAxsqdIDRsJhdGeZNOsohaRn9PV5Mi7Mtk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
      .then((response) => response.json()) // these path give json file and convert to js object using of JSON string metho
      .then((data) => {
        const youtubeVideoData = data.items;
        setVideo(youtubeVideoData);  // after i get data i pass to updater function
      })
   
  }, []);
  
// it prove that we get json file
console.log(youTubeVideos) 

  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {youTubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

            
          </div>
        </div>
      </div>
    
    </>
  )
}

export default YoutubeVideos


