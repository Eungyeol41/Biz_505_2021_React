import React from "react";

/**
 * forEach() 코드
 * 배열을 활용하는 JS 필수 코드들
 * 배열.map(), 배열.filter(), 배열.forEach()
 * 		배열.map() {	return 값	} : 배열 개수를 그대로 유지하면서 새로운 배열을 만들기
 * 		배열.filter() {	return boolean	} : 어떤 조건에 맞는 리스트만 추출할 때
 * 		배열.forEach() {	새로운 배열.push()	} : 배열을 단순히 순서대로 연산 처리할 때
 */

/**
 * react에서 forEach()류의 함수를 사용하여 컴포넌트 list를 만들 때
 * 반드시 가장 바깥쪽 tag에는 UNIQUE한 값으로 key를 설정해줘야한다.
 *
 * map()을 사용할 때 2번째 매개변수로 index 키값을 알 수 있는 이 값으로는 절대 key로 설정하지 않는다
 * 오히려 성능을 떨어뜨리는 결과를 내기도 한다.
 */
function TodoList({ todoList }) {
  const viewList = todoList.map((todo) => {
    return (
      <tr>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });
  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList;
