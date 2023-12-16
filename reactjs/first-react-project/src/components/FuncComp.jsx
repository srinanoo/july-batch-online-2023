// export default function FuncComponent() {
function FuncComponent() {
    return (
        <>
            <h1>Function Component 1</h1>
        </>
    )
}

function FuncComponent1() {
    return (
        <>
            <h2>Function Component 2</h2>
        </>
    )
}

function FuncComponent2() {
    return (
        <>
            <h2>Function Component 3</h2>

            <FuncComponent3 />
        </>
    )
}

function FuncComponent3() {
    return (
        <>
            <h3>Function Component 4</h3>
        </>
    )
}

export default FuncComponent; // default
export { FuncComponent1, FuncComponent2 }; // not default / optional