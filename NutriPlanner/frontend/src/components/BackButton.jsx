import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();
    const styles = {
        marginTop : '10px',
        marginLeft : '10px',
        cursor : 'pointer'
    }
    return (
    <div>
        <IoMdArrowRoundBack style={styles} size={30} onClick={() => navigate(-1)} />
    </div>
  );
};

