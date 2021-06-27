import React from "react";

export default function LoginPage() {
  return (
    <div>
      <title>login</title>
      <meta charSet="utf-8" />
      <form>
        <div classname="input-wrapper">
          <label>name</label>
          <input placeholder="4+ characters" type="text" />
        </div>
        <div classname="input-wrapper">
          <label>password</label>
          <input placeholder="password" type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
