import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl,demoVideoTitle,demoVideoUrl,demoChannelUrl,demoChannelTitle } from "../utils/constant"


const VideoCard = ({video:{id:{
    videoId},snippet}}) => {
  return (
    
     <Card sx={{width:{md:'358px',sm:'358px',xs:'100%'},boxShadow:'none',borderRadius:'10px',overflow:"hidden"}} className='videoCardContainer'>
        <Link to={videoId?`/video/${videoId}`: `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url|| demoThumbnailUrl}
        alt={snippet?.title}
        sx={{width:{xs:'100%',sm:'358px',},height:180}}
        >

        </CardMedia>
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'160px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight='bold' color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}></CheckCircle>
            </Typography>
        </Link>
        </CardContent>
     </Card>
   
  )
}

export default VideoCard
