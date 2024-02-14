async function fx1() {
    console.log("fx1 비동기 호출");
    // throw new Error();

    return 10;

}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + " 출력");
}

//await = 비동기를 동기로 바꿔줌, async function 안에서만 사용 가능.
async function fx3() {
    let arg = 0;
    let fx1Result = await fx1();
    arg = fx1Result;
    await fx2(arg);

    // fx1().then((result) => {
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });

}

function handleSubmitClick2() {
    fx3();
    // fx1().then((result) => {
    //     console.log("then 호출");
    //     console.log(result);
    // }).catch(() => {
    //     console.log("오류 생성");
    // });

    // console.log("동기 실행");
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        reject();
    });


    //실행 시점 : p1 resolve 실행 이후
    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    }).then((num) => {
        console.log(num);
    }).catch(() => {
        console.log("오류");
    });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기실행");
}


