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
        { link : 'https://drive.google.com/uc?id=1HNMHgRvLnGcL__Um_LnURhRE8rCSS7E1' },
        { link : 'https://drive.google.com/uc?id=1yeOudBK32vLz7XfvE0FKzjTUTJVWSZP_' },
        { link : 'https://drive.google.com/uc?id=1C0rXdB5ka8xfQA1H5Fzo4nJWwMuq-YKk' },
        { link : 'https://drive.google.com/uc?id=1SF_GAIsBfWx6AtAGhX1mhK42iqRedfRW' },
        { link : 'https://drive.google.com/uc?id=1aO-TXkWRI7scqS6No_fBPWvt4QrH8sWY' },
        { link : 'https://drive.google.com/uc?id=1IAILGfzAIFlfqK1OAftC1y75H0fiIDDJ' },
        { link : 'https://drive.google.com/uc?id=1wXra4mijZ5j2ZNs1K6bq-vqajj1ADmj2' },
        { link : 'https://drive.google.com/uc?id=1Ca4Nwo_qn9A0KckLkD1NfLW6WnSTmrWL' },
        { link : 'https://drive.google.com/uc?id=1Hdbq99ThnWh5Tqzs1AOkh0g3uCF53RAY' },
        { link : 'https://drive.google.com/uc?id=1Z1ihvVUpARRi42_lNJmpQRyLStLFIjsG' },
        { link : 'https://drive.google.com/uc?id=1Jjm-jstx7Vnn09G7teC20VdX0on99Ux1' },
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
