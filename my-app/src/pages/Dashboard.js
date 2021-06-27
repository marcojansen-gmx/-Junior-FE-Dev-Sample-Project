import React from "react";

export default function Dashboard() {
  return (
    <div>
      <title>Do This</title>
      <meta charSet="utf-8" />
      <nav>
        <button>Settings</button>
        <h4>Not Another Todo List</h4>
        <button>logout</button>
      </nav>
      <main>
        <aside>
          <div>
            <label htmlfor="select-status">TODOS</label>
            <select name="select-status" id="status">
              <option value="completed">Completed</option>
              <option value="todo">TODO :'(</option>
              <option value="both">All Todos</option>
            </select>
          </div>
          <ol>
            <li>Hang out washing</li>
            <li>do this code assessment</li>
            <li>make a grilled cheese sandwich</li>
            <li>ugh, take the washing back in</li>
            <li>yell at someone online</li>
          </ol>
        </aside>
        <section>
          <form>
            <label>Add todo</label>
            <div classname="input-wrapper">
              <input placeholder="type todo here..." type="text" />
              <button type="submit">+</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
