import React, {Component} from 'react';
import './styles.css';

class Img_view extends Component {
    render() {
        return (
            <div className="s-img">
                <img 
                    className="Image" 
                    alt="img" 
                    src={this.props.img.link}
                />
            </div>
        );
    }
}

class Img extends Component {
    constructor(props) {
    super(props);
    this.state = {
        imgData: [
        /* https://drive.google.com/uc?id= */
        { link : 'https://drive.google.com/uc?id=1JwkbkzTCkYiEuVVbCCUB_F5s3vCnKdfv' },
        { link : 'https://drive.google.com/uc?id=1_toYqgOT91M5yx4CwoVqM37oL-iZzTti' },
        { link : 'https://drive.google.com/uc?id=1SF_GAIsBfWx6AtAGhX1mhK42iqRedfRW' },
        { link : 'https://drive.google.com/uc?id=1aO-TXkWRI7scqS6No_fBPWvt4QrH8sWY' },
        { link : 'https://drive.google.com/uc?id=1Ca4Nwo_qn9A0KckLkD1NfLW6WnSTmrWL' },
        { link : 'https://drive.google.com/uc?id=1-qCWlYGDvbnASe6cPj1X4ITYB9iFDJ0F' },
        { link : 'https://drive.google.com/uc?id=1Z1ihvVUpARRi42_lNJmpQRyLStLFIjsG' },
        { link : 'https://drive.google.com/uc?id=1b1lOTcyJu7WaW4FEO_5L8F3W2MQ85ogY' },
        ]
    };
    }
    
    render() {
        const mapToComponent = data => {
            return data.map((img, i) => {
            return (<Img_view img={img} key={i}/>);
            });
    };
    
    return (
        <>
        {mapToComponent(this.state.imgData)}
        </>
    );
    }
}

export default Img;
