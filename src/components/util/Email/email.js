import React, { useCallback } from 'react'; 
import useInput from '../../hooks/useInput'; 
import emailjs from 'emailjs-com'; 

const Email = () => { 
    const [name, onChangeName] = useInput(''); 
    const [phone, onChangePhone] = useInput(''); 
    const [email, onChangeEmail] = useInput(''); 
    const [text, onChangeText] = useInput(''); 
    
    const onSubmit = useCallback((e) => { 
        e.preventDefault(); 
        const inputNum = e.target.childElementCount - 1;
        const data = new FormData(e.target); 
        const entries = data.entries(); 
        let failNum = 0; 
        
        for (let i = 0; i < inputNum; i++) {
            const next = entries.next(); 
            const key = next.value[0]; 
            const value = next.value[1]; 
            
            if (!value) { 
                failNum++; 
                alert(`${key}이 비어있어요. 확인해주세요!!`); 
                break; 
            } 
        } 
        
        if (!failNum) { 
            alert('성공적으로 발송했습니다. 감사합니다.'); 
                
            emailjs.sendForm( 
                'service_ID', //service_ID
                'template_ID', //template_ID
                e.target, 
                'user_ID' //user_ID
            ).then((result) => { 
                console.log('result.text', result.text); 
            }, (error) => { console.log(error.text); 
            }); 
        } 
    }, []); 
    
    return ( 
            <form
                className="Sand_Email_From" 
                onSubmit={onSubmit}
                > 

                <input 
                    className='sand-input'
                    type="text" 
                    name="name" 
                    placeholder="이름 *" 
                    value={name} 
                    onChange={onChangeName} 
                /> 

                <input 
                    className='sand-input'
                    type="text" 
                    name="phone" 
                    placeholder="전화번호 *" 
                    value={phone} 
                    onChange={onChangePhone} 
                /> 
                    
                <input 
                    className='sand-input'
                    type="text" 
                    name="email" 
                    placeholder="이메일 *" 
                    value={email} 
                    onChange={onChangeEmail} 
                /> 
                
                <textarea 
                    className='sand-input'
                    name="message" 
                    placeholder="메세지 *" 
                    value={text} 
                    onChange={onChangeText} 
                /> 
                
                <button 
                    className='sand-button'
                    type="submit"
                    > 보내기 
                </button> 
            </form> 
        ); 
    }; 

export default Email;
