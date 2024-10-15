


const asyncCalls = async (input: number) => {

    try {
        const promise = new Promise((res, rej) => {

            if (input > 5) {
                res("sucess")
            } else {
                rej("failed")
            }
        });

        const res = await promise

        console.log("success respose ", res)
    } catch (err) {
        console.log("err respose ", err)
    }
}


asyncCalls(4);