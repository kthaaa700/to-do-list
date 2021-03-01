import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todo from '../components/Todo';

export default function Home() {
  return (
    <div>
      <Todo contents="할일 내용 1"></Todo>
      <Todo contents="할일 내용 2"></Todo>
      <Todo contents="할일 내용 3"></Todo>
    </div>
  )
}
