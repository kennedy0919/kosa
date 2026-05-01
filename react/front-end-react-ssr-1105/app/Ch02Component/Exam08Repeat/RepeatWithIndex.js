function RepeatWithIndex() {
    // 변수 선언
    const items = ["Java", "Spring", "Python", "FastAPI"]

    return (
        <div className="card mt-2">
            <div className="card-header">
                RepeatWithIndex
            </div>
            <div className="card-body">
                <ul>
                    { items.map((item, index) => (
                        <li key={ index }>{ item }</li>
                        )) }
                </ul>
            </div>
        </div>
    );
}

export default RepeatWithIndex;