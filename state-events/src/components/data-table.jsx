export default function DataTable({userData}) {
    // Defensive programming
    if (!userData) {
        return (<h1>No user data</h1>);
    }
    return (
        <div>
            <h4>{userData.length} user(s)</h4>
            <table>
                <thead>
                    <th>Order</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Data of birth</th>
                </thead>
                <tbody>
                    {userData.map((data, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data.username}</td>
                            <td>{data.password}</td>
                            <td>{data.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}