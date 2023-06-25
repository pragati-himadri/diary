import {useEffect} from 'react';
import {PuffLoader} from 'react-spinners';
import {useAuthContext} from '../hooks/useAuthContext.js'
import { usePostsContext } from '../hooks/usePostsContext.js';
import PostHead from '../components/PostHead';
import PostForm from '../components/PostForm';
import styles from '../styles/styles.module.scss';


const Home = () =>{
    const { posts, dispatch } = usePostsContext();
    const {user} = useAuthContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/api/posts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) dispatch({ type: 'SET_POSTS', payload: json });
        }

        if (user) fetchPosts();
    },[user,dispatch]);

    if (!posts) {
        return (
            <div className="spinner">
                <PuffLoader
                   color="#36d7b7"
                size={100}
            />
                
            </div>
        );
    }



    return (
        <>
        <div>
            <h1>Posts</h1>

            <ul className = {styles.postList}>
            {posts && posts.map(post => (
                        <PostHead key={post._id} post={post} />
                    ))} 
            </ul>

            
        </div>

        <div>
            <PostForm/>
        </div>
        </>
    );
};

export default Home;

