
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
        export function BuyChacolateaction(){
            return{
                type:"RETURN-CHACOLATES",
                payload:10
            }
        
            }
            export function ReturnChacolateaction(){
                const action={
                    type:"BUY-CHACOLATES",
                    payload:1
                }
                    return action
                }
                