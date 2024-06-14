import { useCallback, useMemo, useState } from "react";

const UseMemoAndCallBack = () => {
    const [num, setNum] = useState(0);

    //Momoise Function
    const MemoTas = useMemo(() => {
        return num * 2
    }, [num]);

    //CallBack Hook Fun
    const callBackFun = useCallback(() => {
        console.log('Call Fun Test');
        //Logic
        console.log('Number : ', num);
    }, [num])

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Incriment</button>
            <p>MemoizedVai : {MemoTas}</p>
            <button onClick={callBackFun}>LogCount</button>
        </div>
    )
}

export default UseMemoAndCallBack;