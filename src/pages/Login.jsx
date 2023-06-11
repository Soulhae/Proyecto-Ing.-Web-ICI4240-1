
function Login() {
  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8ffa9",
      }}
    >
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D9D9D9",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
          maxHeight: "500px",
          maxWidth: "300px",
          padding: "20px",
          margin: "30px",
        }}
      >
        <h2>Iniciar sesion</h2>

        <form>
          <div className="form-group mb-2">
            <label htmlFor="email" classname="form-label">
              Email
            </label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" classname="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" required />
              Por favor ingrese su contraseña
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" />
            <label htmlFor="check" className="form-check-label">
              Recuerdame
            </label>
          </div>
        </form>

        <button
          type="submit"
          className="btn btn primary block mt-2 w-100"
          style={{
            backgroundColor: "#f8ffa9",
            fontSize: 15,
            color: "black",
          }}
        >
          Iniciar sesion
        </button>
      </div>
    </div>
  );
}

export default Login;
