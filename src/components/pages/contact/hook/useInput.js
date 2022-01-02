import { useState, useCallback } from 'react'; 

export default (initialValue = null) => { 
    const [value, setValue] = useState(initialValue); 
    const handler = useCallback(({target}) => { 
        setValue(target.value); 
    }, []); 
    return [value, handler, setValue]; 
};