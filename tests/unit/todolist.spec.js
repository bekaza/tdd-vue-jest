import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList";

describe("TodoList - testcase", () => {
  it("Todolist render", () => {
    const wrapper = mount(TodoList);
    expect(wrapper.find("[data-testid='title']").exists()).toBe(true);
    expect(wrapper.find("[data-testid='input_todo']").exists()).toBe(true);
    expect(wrapper.find("[data-testid='btn_todo']").exists()).toBe(true);
    expect(wrapper.find("[data-testid='input-search_todo']").exists()).toBe(
      true
    );
  });
  it("Todolist show data corectly", () => {
    const wrapper = mount(TodoList, {
      data() {
        return {
          todos: ["abc", "123"]
        };
      }
    });
    expect(wrapper.findAll("[data-testid='list-todo']").length).toBe(2);
  });
});
