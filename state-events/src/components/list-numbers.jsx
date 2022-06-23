
export default function ListNumbers({numbers}) {
    if (!numbers || numbers.length == 0) {
        // early returns 
        return (<h1>No numbers passed in</h1>);
    }
    const liTags = [];
    for (let i = 0; i < numbers.length; i++) {
        liTags.push(<li>{numbers[i]}</li>);
    }
    return(
        <ul>
            {liTags}
        </ul>
    );
}