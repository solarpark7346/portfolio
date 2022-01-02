import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './styles.css';

class VideoView extends Component {
    render() {
        return (
            <ReactPlayer
                title='유튭 영상이요'
                className='react-player'
                url={this.props.video.link} 
                width='100%'
                height='100%'
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
        { link : 'https://www.youtu.be/2izmmZ889zQ' },
        { link : 'https://www.youtu.be/6ZcQZo9D5Is' },
        { link : 'https://www.youtu.be/TDZsU9Q9Sic' },
        { link : 'https://www.youtu.be/JtyWq44Lp6E' },
        { link : 'https://www.youtu.be/prb1Be7Zhro' },
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
            return (<VideoView video={video} key={i}/>);
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
