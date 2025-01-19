/* eslint-disable no-undef */
/// <reference types="cypress" />

// This is a simple example of a Cypress test for the frontend of a todo app.
const frontendUrl = Cypress.env("FRONTEND_URL");

if (!frontendUrl) {
  throw new Error("!FRONTEND_URL is not defined in .env.local");
}

const todosUrlPage = frontendUrl;

const mockDataTodo = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Learn javascript",
    completed: false,
  },
  {
    id: 3,
    title: "Learn css",
    completed: false,
  },
];

describe("spec", () => {
  describe("Todo List", () => {
    beforeEach(() => {
      // Mock todos API with dynamic userId
      cy.visit(todosUrlPage);
      cy.wait(100);
    });

    // check frontend url is correct
    it("should display the correct frontend url", () => {
      cy.url().should("eq", todosUrlPage);
    });

    it("should display the todo list", () => {
      cy.screenshot("todo-page", { overwrite: true });
      cy.contains("My Todo");
      cy.get("input[placeholder='new task']").should("exist");
      cy.get("#todo-container").should("contain", "Learn React");
      cy.get("#todo-container").should("contain", "Learn javascript");
      cy.get("#todo-container").should("contain", "Learn css");
    });

    it("should display completed todos with a strikethrough", () => {
      cy.get("#todo-container")
        .children()
        .contains("Learn React")
        .should("have.css", "text-decoration-line", "line-through");
      cy.get("#todo-container")
        .children()
        .contains("Learn javascript")
        .should("not.have.css", "text-decoration-line", "line-through");
    });

    it("should add a new todo item", () => {
      cy.get("input[placeholder='new task']").type("Test Todo");
      cy.get("input[placeholder='new task']").type("{enter}");
      cy.wait(500);
      cy.get("#todo-container").should("contain", "Test Todo");
      cy.get("input[placeholder='new task']").should("have.value", "");
    });

    it("should toggle the completion status of a todo item", () => {
      cy.get("#todo-container")
        .children()
        .eq(1)
        .find("input[type='checkbox']")
        .check();
      cy.wait(500);
      cy.get("#todo-container").children().eq(1).find("input[type='checkbox']");
      cy.get("#todo-container")
        .children()
        .eq(1)
        .contains("Learn javascript")
        .should("have.css", "text-decoration-line", "line-through");
    });

    it("should delete a todo item", () => {
      cy.get("#todo-container").children().eq(1).find("button").click();
      cy.wait(500);
      cy.get("#todo-container").should("not.contain", "Learn javascript");
    });
  });
});
