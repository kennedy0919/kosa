function RepeatWithIndex() {
  const items = ["눈사람", "얼음", "눈", "바람"];
  return (
    <div className="card">
      <div className="card-header">
        RepeatWithIndex
      </div>
      <div className="card-body">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RepeatWithIndex;