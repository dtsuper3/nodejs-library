import screenshot from "../helpers/generateWebpageScreenshot";


async function run() {
    await screenshot({
        data: {
            // columns: [
            //     ["data1", 300, 350, 300, 0, 0, 0],
            //     ["data2", 130, 100, 140, 200, 150, 50]
            // ],
            // types: {
            //     data1: "area-step",
            //     data2: "area-spline"
            // }
            xs: {
                data1: "x1",
                data2: "x2"
            },
            columns: [
                ["x1", 10, 30, 45, 50, 70, 100],
                ["x2", 30, 50, 75, 100, 120],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 20, 180, 240, 100, 190]
            ],
            type: "line", // for ESM specify as: line()            
        },

        // IMPORTANT:
        // Specify 'transition.duration=0' to avoid partial rendering
        // caused by the transition(animation).
        transition: {
            duration: 0
        }
    }, "chart01.png");

    // await screenshot({
    //     data: {
    //         columns: [
    //             ["data1", 300, 350, 300, 0, 0, 0],
    //             ["data2", 130, 100, 140, 200, 150, 50]
    //         ],
    //         types: {
    //             data1: "bar",
    //             data2: "area"
    //         }
    //     },
    //     transition: {
    //         duration: 0
    //     }
    // }, "./chart02.png")
}

run()