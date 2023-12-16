// Props...
    // - attributes passed from parent to child component
    // - props are readonly
    // - props cannot be changed

export default function PropsComponent(props) {
    console.log("User Component");
    return (
        <>
            <h3>User Data</h3>
            <p>My Name is: {props.users.name}</p>
            <p>My Age is: {props.users.age}</p>
            <p>My Status is: {props.users.active.toString()}</p>
        </>
    )
}

export function MenuComponent(props) {
    console.log("Menu Component");
    return (
        <>
            <h3>Menu</h3>

            <nav>
                <ul>
                    {
                        props.menu.map((v, i) => {
                            return (
                                <li key={i}>{v}</li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export function ExamComponent(props) {
    console.log("Mark Component");
    // props.subject = "Something else...";
    let temp = props.subject;
    temp = "Something else...";
    return (
        <>
            <h2>Marks</h2>
            <p>Subject: {props.subject}</p>
            <p>Temp Subject: {temp}</p>
            <p>Mark: {props.mark}</p>
        </>
    )
}