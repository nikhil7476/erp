import React from 'react'

const Preview = ({ data, onEdit }) =>  {
    return(
        <div style={{ border: '1px solid #ccc', padding: '18px', marginTop: '20px' }} className='editButton'>
            <h3>Preview</h3>
            {Object.entries(data).map(([key, value]) => (
                <p key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                </p>
            ))}
            <button onClick={onEdit} style={{ marginTop: '20px' }}>Edit</button>
        </div>
    );
};

export default Preview;