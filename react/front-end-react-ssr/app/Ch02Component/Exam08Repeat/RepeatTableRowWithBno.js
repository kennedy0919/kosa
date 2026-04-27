function RepeatTableRowWithBno() {
    // 변수 선언
    const boards = [
        {bno:1, btitle:"제목1", bwriter:"user1", bdate: new Date(), bhitcount:0},
        {bno:2, btitle:"제목2", bwriter:"user2", bdate: new Date(), bhitcount:0},
        {bno:3, btitle:"제목3", bwriter:"user3", bdate: new Date(), bhitcount:0}
    ]
    return (
        <div className="card mt-2">
            <div className="card-header">
                RepeatTableRowWithBno
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>bno</th>
                            <th>btitle</th>
                            <th>bwriter</th>
                            <th>bdate</th>
                            <th>bhitcount</th>
                        </tr>
                    </thead>
                <tbody>
                    {boards.map(board => (
                        <tr className="text-center" key={ board.bno }>
                            <td>{ board.bno }</td>
                            <td>{ board.btitle }</td>
                            <td>{ board.bwriter }</td>
                            <td>{ board.bdate.toLocaleDateString() }</td>
                            <td>{ board.bhitcount }</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default RepeatTableRowWithBno;