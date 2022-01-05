import React, {Component} from 'react';
import './styles.css';
import Modal from '../../../util/ImgModal/Modal.js'

import Imglazy from "./container";
import ImageLoading from '../../../../assets/img/Image loading.png';

class ImgSection extends Component {
    constructor(props) {
    super(props);
    this.state = {
        imgData: [],
        index: null,
        hasModal: false,
        };
    }

    controlModal = (index) => {
        this.setState({
            index: index,
            hasModal: !this.state.hasModal
        });
    }
    
    componentDidMount() {
            setTimeout(() => {
                this.setState ({
                    imgData: [
                    /* https://drive.google.com/uc?id= */
                    'https://drive.google.com/uc?id=1gC885X45CUXZ57m1BQqQFfxwtE2S5YTh',
                    'https://drive.google.com/uc?id=17p-QGejh_GkEuXAR-AND3A0_jAq1bZ88',
                    'https://drive.google.com/uc?id=1GJjb6U_s4GqTT91MwGkXc_ylswNbzmqU',
                    'https://drive.google.com/uc?id=1kbMoYch2uWwQ6bjO56BwK-zIXCwhkkXD',
                    'https://drive.google.com/uc?id=1tlpJ_sjJD3zI7Ax3KpT4GauG-zCPZk1-' ,
                    
                    'https://drive.google.com/uc?id=1amP9605VuhPRtfrdrkxRe687cXq0kMf2' ,
                    'https://drive.google.com/uc?id=1pDw_KK0-j2TWKRz7apKFmmBwvRRIjQb9' ,
                    'https://drive.google.com/uc?id=1P_L05gB62UhawjjWShu8OyYDbrQhCJJk' ,
            
            
                    'https://drive.google.com/uc?id=1Sqzh9kiZxiq7df8udZVKjLfleyt8ZXGr' ,
                    'https://drive.google.com/uc?id=1wnXqvJaLIAISdgZItpGS8J4Oe47jtZkE' ,
                    'https://drive.google.com/uc?id=1bp9tYlJX4qZeSzFm2BMf7CXtMzcAsjAS' ,
                    'https://drive.google.com/uc?id=1-A2z2qP4lArkXJ8PZaHnOJFmHGCTkA-S' ,
            
                    'https://drive.google.com/uc?id=1NRHs5pG1zXzVTZS4ylY3B7jHLXQi7rRQ' ,
                    'https://drive.google.com/uc?id=1KIvw3UAkRJCbOLUQU7HrTv63hF46uGib' ,
                    'https://drive.google.com/uc?id=1RTj-cIrbhIk5f1CnKqcyaFoBgpK9rsH2' ,
                    'https://drive.google.com/uc?id=1lzlOlfantzuY7hP_fMs2jHFUc6y6oozP' ,
                    'https://drive.google.com/uc?id=1mKygL1nfkB7RrSag-B3M-bj5Q0cot1cX' ,
                    'https://drive.google.com/uc?id=1mjWpDO4ej18_S38xTs-WThJFPm-5hHdp' ,
                    'https://drive.google.com/uc?id=1FtvZwjEoZy-qyZ-dYBn_HJE9c3YdVJzt' ,
                    'https://drive.google.com/uc?id=1qvPIVOwTRlqhl3pAu1Gm6e15yWu3nC4T' ,
            
                    'https://drive.google.com/uc?id=1NOe7B63u6WxJaB1_H08hNSn9K8k_CMWF' ,
                    'https://drive.google.com/uc?id=1PuVz3bVOaFRaYvtSmDhmcG_1J0s2_dGa' ,
                    'https://drive.google.com/uc?id=1ONKxvqzTafh8DJ3rXO3SFBTZ9aHY_qk9' ,
                    'https://drive.google.com/uc?id=1d0CF-YQ6eazFU9HE-zQv-IoiETnPz4u_' ,
                    'https://drive.google.com/uc?id=1_wo_-5UPGN9VXPU-miQqjF47KV6bJxC7' ,
                ]
            })
        }, 1000)
    }
    
    render() {
        const mapToComponent = data => {
            return data.map((image, index) => {
            return (
                <>
                    <div className='imgBox'>
                        <div 
                            key={index} 
                            onClick={() => this.controlModal(index)} 
                            className='img_detail_text_box'>
                                Cilck here
                        </div>
            
                        <Imglazy src={image}/>
                    </div>
                    
                </>
            )
            });
        };

        return (
            <>
                {
                    this.state.imgData 
                        ? mapToComponent(this.state.imgData) 
                        : <img 
                            className="Loading_Image" 
                            alt="loading" 
                            src={ImageLoading}
                            />
                }
    
                {this.state.hasModal && (
                    <Modal images={this.state.imgData} index={this.state.index} close={this.controlModal}></Modal>
                )}
            </>
        );
    }
}

export default ImgSection;
