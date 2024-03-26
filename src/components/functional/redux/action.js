
export function Incrementfunctionaction(){
    const action={
        type:"INCREMENT"
    }
        return action
    }
    // export function DecrementFunction(){
    //     const action={
    //         type:"DECREMENT"
    //     }
    //         return action
        // }
        export function ReturnChacolateaction(noofchacolates){
            return{
                type:"RETURN-CHACOLATES",
                payload:noofchacolates
            }
        
            }
            export function BuyChacolateaction(noofchacolates){
                const action={
                    type:"BUY-CHACOLATES",
                    payload:noofchacolates
                }
                    return action
                }
                