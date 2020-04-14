import React, { useState } from 'react';


export default function HandleCardDev() {
     
     const [cardDev, setCardDev] = useState('none');

     setCardDev(cardDev === 'flex' ? 'none' : 'flex');

     return (cardDev);
}