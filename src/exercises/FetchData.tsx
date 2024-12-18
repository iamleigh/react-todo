import React, { useEffect, useState } from "react";

// Create a custom hook to interact with a REST API and fetch data.
// Sample API: https://jsonplaceholder.typicode.com/posts
interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// const fetchPosts = async ( url: string ): Promise<Post[]> => {
// 	const response = await fetch( url );
// 	const data = await response.json();

// 	return data;
// }

const useFetchPosts = ( url: string ) => {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [error, setError] = useState<{ message: string } | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	// Use `try...catch` approach:
	useEffect( () => {
		const fetchData = async () => {
			setLoading( true );

			try {
				const response = await fetch( url );
				if ( ! response.ok ) {
					throw new Error( `HTTP Error Status: ${ response.status }` );
				}

				const data = await response.json();
				setPosts( data );
			} catch {
				setError( error );
			} finally {
				setLoading( false );
			}
		}

		fetchData();
	}, [url]);

	// Use `.then().catch()` approach:
	// useEffect( () => {
	// 	setLoading( true );

	// 	fetchPosts( url )
	// 		.then( ( data ) => {
	// 			setPosts( data );
	// 			setLoading( false );
	// 		})
	// 		.catch( ( error ) => {
	// 			setError( error );
	// 			setLoading( false );
	// 		});
	// }, [url]);

	return [posts, error, loading] as const;
}

const FetchData: React.FC = () => {
	const [posts, error, loading] = useFetchPosts( 'https://jsonplaceholder.typicode.com/posts' );

	let screen = (
		<ul>
			{ posts?.map( ( post ) => (
				<li key={ post.id }>{ post.title }</li>
			)) }
		</ul>
	);

	if ( loading ) {
		screen = <p>Loading posts...</p>;
	} else if ( error ) {
		screen = <p>Error { error.message }</p>;
	} else if ( !posts ) {
		screen = <p>No posts to load.</p>;
	}

	return screen;
}

export { FetchData }