# React Assessment : My Todo

<br>


<br>

# Example UI For Todo List

[Web TODO LIST CLICK!](https://ta-non.vercel.app/assignment/BasicTodoList/TodoList)

<br>

## Implementation Note

- data เริ่มต้นของ todos

```javascript
[
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
```

1. คำอธิบาย (Thai)
   - ข้อมูลตัวอย่างประกอบด้วย id, title และสถานะ completed
   - สำหรับเริ่มต้นแสดงรายการ หรือเป็นค่าเริ่มก่อนสร้าง ลบ หรือแก้ไข todo

- Explanation (English)
  - This array provides sample todo items with id, title, and completion status
  - Ideal for initial display or as seed data before creating, deleting, or editing todos

2. id ของ Todo container ต้องเป็น #todo-container
   - (English) The main todo container must have an id of #todo-container

```javascript
// Use any tag, just ensure it has the id "todo-container"
// Example
<tag id="todo-container">
  {todo.map(() => (
    <tag></tag>
  ))}
</tag>
```

<br>

## Where to Put Your Project Code
- กรุณาเพิ่มโค้ดโปรเจกต์หลักทั้งหมดลงในโฟลเดอร์ชื่อ "codeHere"
- (English) Please place all main project code in a folder named "codeHere"

<br>

# รายการทดสอบ

- ทดสอบ “should display the correct frontend url” (20 คะแนน)
  - (Thai) ตรวจสอบว่า URL ตรงกับค่าที่คาดไว้
  - (English) Ensure the page URL matches the expected value

<br>

- ทดสอบ “should display the todo list” (20 คะแนน)
  - ตรวจสอบว่าในหน้าเว็บมีรายการ todo ครบถ้วน
  - (English) Verify that the page displays the complete todo list
  - เงื่อนไขการทดสอบผ่าน
    - เมื่อมีการแสดงผลรายการ todo ทั้งหมดตาม mock data
    - (English) All mock data items appear on the page
    - เมื่อองค์ประกอบที่คาดหวัง เช่น "My Todo" หรือ placeholder อินพุต ปรากฏอย่างถูกต้อง
    - (English) Expected elements (e.g., “My Todo” or input placeholder) are visible

<br>

- ทดสอบ “should display completed todos with a strikethrough” (20 คะแนน)
  - ตรวจสอบว่ารายการที่ทำเสร็จมีเส้นคาดทับ
  - (English) Check that completed todos have a strikethrough
  - เงื่อนไขการทดสอบผ่าน
    - เมื่อรายการ todo ที่อยู่ในสถานะ “completed” มีการแสดงผลด้วยเส้นคาดในสไตล์ CSS
    - (English) Completed todo items show a line-through via CSS
    - กรุณาให้แน่ใจว่ารายการที่ไม่ completed ไม่มีเส้นคาด
    - (English) Non-completed items should not have a strikethrough

<br>

- ทดสอบ “should add a new todo item” (20 คะแนน)
  - ทดลองเพิ่มรายการใหม่และตรวจสอบว่าเพิ่มได้จริง
  - (English) Try adding a new todo and check if it appears
  - เงื่อนไขการทดสอบผ่าน
    - เมื่อพิมพ์ข้อความใน input แล้วกด Enter แล้วรายการใหม่นั้นปรากฏในหน้า
    - (English) After typing text and pressing Enter the new todo should be visible
    - input ถูกเคลียร์หลังจากเพิ่มรายการสำเร็จ
    - (English) The input field is cleared once the new item is added

<br>

- ทดสอบ “should toggle the completion status of a todo item” (20 คะแนน)
  - ตรวจสอบว่าสามารถเปลี่ยนสถานะทำเสร็จ/ยังไม่เสร็จได้
  - (English) Check that items can switch between completed and incomplete
  - เงื่อนไขการทดสอบผ่าน
    - เมื่อคลิก checkbox ของรายการ todo แล้วสถานะเปลี่ยนได้จริง
    - (English) Clicking the todo’s checkbox actually changes its status
    - เมื่อรายการที่ toggle แล้วแสดง/ซ่อนเส้นคาดอย่างถูกต้อง
    - (English) Toggled items show/hide the strikethrough correctly

<br>

- ทดสอบ “should delete a todo item” (20 คะแนน)
  - ตรวจสอบว่ารายการถูกลบออกเรียบร้อยแล้ว
  - (English) Verify that the item is successfully removed
  - เงื่อนไขการทดสอบผ่าน
    - เมื่อคลิกปุ่ม “Delete” ของรายการใด ๆ แล้วรายการนั้นหายไปจากหน้า
    - (English) Clicking the “Delete” button removes the item from the page
