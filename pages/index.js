import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todo from '../components/Todo';

export default function Home() {
 const todos = [ "전화하기", "밥먹기", "걷기", "일하기" ];

 const func1 = (item) => {
   return (
     <Todo contents={item}></Todo>
   )
 }
 
 return todos.map(func1);
} 
