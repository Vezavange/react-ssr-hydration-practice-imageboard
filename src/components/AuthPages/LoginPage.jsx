import axios from "axios";
import React from "react";

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "/auth/login",
      Object.fromEntries(new FormData(e.target))
    );

    if (response.status === 200) {
      window.location = "/";
    }
  };

  return (
    <div className="mb-3 text-bg-warning auth-container">
      <div className="form-container d-flex min-vh-100 justify-content-center align-items-center">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleEmail">
              <p className="text-label">Введите Ваш email:</p>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="examplePassword">
              <p className="text-label"> Введите Ваш пароль:</p>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
