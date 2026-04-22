function RepeatTableRow() {
  const boards = [
    {bno:1, btitle:"제목1", bwriter:"user1", bdate:new Date(), bhitcount:0},
    {bno:2, btitle:"제목2", bwriter:"user2", bdate:new Date(), bhitcount:0},
    {bno:3, btitle:"제목3", bwriter:"user3", bdate:new Date(), bhitcount:0}
  ];

  return (
    <div className="card">
      <div className="card-header">
        RepeatTableRow
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
            {boards.map(board=>(
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
                <td>{board.bwriter}</td>
                <td>{board.bdate.toLocaleDateString()}</td>
                <td>{board.bhitcount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RepeatTableRow;