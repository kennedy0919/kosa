function ChildComponent({
  name,
  version=18,
  children
}) {
  return (
    <div className="card">
      <div className="card-header">ChildComponent</div>
      <div className="card-body">
       <div>프레임워크: {name}</div>
       <div>버전: {version}</div>
       <div>버전 타입: {typeof(version)}</div>
       {children}
      </div>
    </div>
  );
}

export default ChildComponent;