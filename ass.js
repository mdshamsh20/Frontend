const form = document.querySelector("#form");
      const fieldsContainer = document.querySelector("#fields");
      const addBtn = document.querySelector(".add");

      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const field = `
          <div class="field">
            <input type="text" name="name[]" placeholder="Field Name" />
            <select name="type[]">
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="object">Object</option>
            </select>
            <button class="delete">Delete</button>
          </div>
        `;
        fieldsContainer.insertAdjacentHTML("beforeend", field);
      });

      fieldsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          e.preventDefault();
          e.target.parentNode.remove();
        }
      });