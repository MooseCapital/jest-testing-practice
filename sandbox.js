import fetch from "node-fetch";


async function testF() {
    let getdata = await (await (fetch("https://data.nasdaq.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=TzzPTuHFi1phbcCqeyv3", {
        method: "get"
    } ))).json();
    // let jsondata = await getdata.json();
    console.log(getdata.dataset.name)
    return getdata
}

//testF()

export {testF}