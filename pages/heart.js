import Todolist from '../components/Todolist'

const Heart = () => {
    const todo = [ "사랑하기", "노력하기", "일하기", "잠자기" ];
    const Exercise = (item) => {
        return (
            <Todolist contents={item}></Todolist>
        )
    }
    return (
        <div>
            <h1>오늘의 할일 목록</h1>
            {todo.map(Exercise)}
        </div>
    )
}

export default Heart;