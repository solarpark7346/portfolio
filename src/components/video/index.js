import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './styles.css';

class Video_view extends Component {
    render() {
        return (
            <ReactPlayer
                title='유튭 영상이요'
                className='react-player'
                url={this.props.video.link} 
                width='100%' height='100%'
                loading="lazy"
                controls
            />
        );
    }
}

class Video extends Component {
    constructor(props) {
    super(props);
    this.state = {
        videoData: [
        { link : 'https://www.youtu.be/Cw2SfUqtg_I' },
        { link : 'https://www.youtu.be/iDiiqMILReY' },
        { link : 'https://www.youtu.be/-U_OtHsd8pk' },
        { link : 'https://www.youtu.be/cOlbGo2En0s' },
        { link : 'https://www.youtu.be/TE8UbETpmdY' },
        { link : 'https://www.youtu.be/cpWxAtnxqBc' },
        { link : 'https://www.youtu.be/JQ8j1Y87Xqk' },
        ]
    };
    }
    
    render() {
        const mapToComponent = data => {
            return data.map((video, i) => {
            return (<Video_view video={video} key={i}/>);
            });
    };
    
    return (
        <>
        {mapToComponent(this.state.videoData)}
        </>
    );
    }
}

export default Video;
