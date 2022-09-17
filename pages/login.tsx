import React from 'react'

export default function login() {
  return (
    <div className="container flex items-center justify-center mt-20 py-10">
  <div className="w-full md:w-1/2 xl:w-1/3">
    <div className="mx-5 md:mx-10">
      <h2 className="uppercase">It’s Great To See You!</h2>
      <h4 className="uppercase">Login Here</h4>
    </div>
    <form className="card mt-5 p-5 md:p-10" action="index.html">
      <div className="mb-5">
        <label className="label block mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="form-control"
          placeholder="example@example.com"
        />
      </div>
      <div className="mb-5">
        <label className="label block mb-2" htmlFor="password">
          Password
        </label>
        <label className="form-control-addon-within">
          <input
            id="password"
            type="password"
            className="form-control border-none"
            defaultValue={12345}
          />
          <span className="flex items-center ltr:pr-4 rtl:pl-4">
            <button
              type="button"
              className="btn btn-link text-gray-300 dark:text-gray-700 la la-eye text-xl leading-none"
              data-toggle="password-visibility"
            />
          </span>
        </label>
      </div>
      <div className="flex items-center">
        <a href="auth-forgot-password.html" className="text-sm uppercase">
          Forgot Password?
        </a>
        <button
          type="submit"
          className="btn btn_primary ltr:ml-auto rtl:mr-auto uppercase"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

  )
}
