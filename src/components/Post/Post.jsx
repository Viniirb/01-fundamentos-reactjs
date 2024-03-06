import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Viniirb.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Rolim Barbosa</strong>
                        <span>FullStack Developer</span>
                    </div>
                </div>

                <time title="26 de fevereiro as 15:09" dateTime="2024-02-26">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>{' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}