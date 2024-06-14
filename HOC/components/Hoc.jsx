import React from 'react'
import { useState } from 'react';

const Hoc = (OrignalFunction) => {
    return () => {
        const [money, setMoney] = useState(10);
        const handler = () => {
            setMoney(money * 2)
        }

        return <OrignalFunction money= {money} handler={handler} />
    }
}

export default Hoc
