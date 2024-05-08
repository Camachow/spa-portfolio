import { Route, Routes, useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import NotFound from "../../pages/NotFound";
import DefaultPage from "../../components/DefaultPage";
import PostModelo from "../../components/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';



export default function Post() {

    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    if(!post) {
        return <NotFound />
    }

    return(
        <Routes>
            <Route path="*" element={<DefaultPage/>}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
        

    )
}