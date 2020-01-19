const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is {props.info}</p>
  </div>
);

const withAdminWaring = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You do not have permission</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the info prop" />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} />,
  document.getElementById("root")
);