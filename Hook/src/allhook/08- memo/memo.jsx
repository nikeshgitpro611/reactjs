import { memo } from "react";

const Memo = memo(({ passData }) => {
    console.log('Test kareo');
    return (
        <div>
            <p>Hey! {passData}</p>
        </div>
    )
});

export default Memo;